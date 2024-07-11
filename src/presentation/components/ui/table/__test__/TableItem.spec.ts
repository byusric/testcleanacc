import { afterEach, describe, it, vi } from 'vitest'
import TableConfig from './data/TableConfig.json'
import Products from './data/Products.json'

import { mount } from '@vue/test-utils'
import TableItem from '../TableItem.vue'
import { getObjectValue } from '@/utils/getObjectValue'
import { defineComponent, h, markRaw } from 'vue'

vi.mock('@/utils/getObjectValue', () => {
  const getObjectValue = vi.fn((key: string, obj: Record<string, any>) =>
    key.split('.').reduce((previousValue, currentValue) => {
      const val = previousValue[currentValue]
      if (val) {
        return val
      } else {
        return previousValue
      }
    }, obj)
  )

  return { getObjectValue }
})

describe('Table Item', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('renders properly with elements in config', async ({ expect }) => {
    const wrapper = mount(TableItem, { props: { tableConfig: TableConfig } })
    expect(wrapper.find('tr').exists()).toBeTruthy()
    expect(wrapper.findAll('td').length).toBe(TableConfig.length)
    expect(wrapper.findAll('span').length).toBe(TableConfig.length)
  })

  it('renders properly without elements in config', async ({ expect }) => {
    const wrapper = mount(TableItem, { props: { tableConfig: [] } })
    expect(wrapper.find('tr').exists()).toBeTruthy()
    expect(wrapper.findAll('td').length).toBe(0)
    expect(wrapper.findAll('span').length).toBe(0)
  })

  it('renders properly with elements in config and in object', async ({ expect }) => {
    const item = Products[0]
    const tableConfig = TableConfig.map((a) => ({ ...a, key: undefined }))
    const wrapper = mount(TableItem, {
      props: { tableConfig, item }
    })
    expect(getObjectValue).toBeCalledTimes(TableConfig.length)
    wrapper.findAll('span').forEach((s, i) => {
      expect(JSON.stringify(JSON.parse(s.text()))).toBe(
        JSON.stringify(getObjectValue(tableConfig[i]?.key ?? '', item))
      )
    })
  })

  it('renders properly with elements in config and in object', async ({ expect }) => {
    const item = Products[0]
    const tableConfig = TableConfig.map((a) => ({
      ...a,
      key: undefined,
      component: markRaw(
        defineComponent({
          props: ['value'],
          setup(props) {
            // return the render function
            return () => h('div', JSON.stringify(props.value))
          }
        })
      )
    }))

    const wrapper = mount(TableItem, {
      props: { tableConfig, item }
    })

    expect(getObjectValue).toBeCalledTimes(TableConfig.length)
    wrapper.findAll('div').forEach((s, i) => {
      expect(s.text()).toBe(JSON.stringify(getObjectValue(tableConfig[i]?.key ?? '', item)))
    })
  })
})
