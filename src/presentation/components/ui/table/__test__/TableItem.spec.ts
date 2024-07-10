import { describe, it } from 'vitest'
import TableConfig from './data/TableConfig.json'
import Products from './data/Products.json'

import { mount } from '@vue/test-utils'
import TableItem from '../TableItem.vue'
import { getObjectValue } from '@/utils/getObjectValue'

describe('Table Item', () => {
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
    const wrapper = mount(TableItem, {
      props: { tableConfig: TableConfig, item }
    })
    wrapper.findAll('span').forEach((s, i) => {
      expect(s.text()).toBe(getObjectValue(TableConfig[i].key, item) + '')
    })
  })
})
