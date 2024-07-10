import { describe, it } from 'vitest'
import TableConfig from './data/TableConfig.json'

import { mount } from '@vue/test-utils'
import TableHeader from '../TableHeader.vue'

describe('Test Table Header', () => {
  it('renders properly with elements', async ({ expect }) => {
    const wrapper = mount(TableHeader, { props: { tableConfig: TableConfig } })
    expect(wrapper.find('thead').exists()).toBeTruthy()
    expect(wrapper.find('tr').exists()).toBeTruthy()
    expect(wrapper.findAll('td').length).toBe(TableConfig.length)
    expect(wrapper.findAll('span').length).toBe(TableConfig.length)
  })

  it('renders properly without elements', async ({ expect }) => {
    const wrapper = mount(TableHeader, { props: { tableConfig: [] } })
    expect(wrapper.find('thead').exists()).toBeTruthy()
    expect(wrapper.find('tr').exists()).toBeTruthy()
    expect(wrapper.findAll('td').length).toBe(0)
    expect(wrapper.findAll('span').length).toBe(0)
  })
})
