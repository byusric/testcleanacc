import { describe, it } from 'vitest'
import TableConfig from './data/TableConfig.json'
import Products from './data/Products.json'

import { mount } from '@vue/test-utils'
import AppTable from '../AppTable.vue'

describe('Table', () => {
  it('renders properly', async ({ expect }) => {
    const wrapper = mount(AppTable, {
      props: { tableConfig: TableConfig, items: Products, itemKey: 'id' }
    })

    expect(wrapper.find('thead').exists()).toBeTruthy()
    expect(wrapper.find('tbody').exists()).toBeTruthy()
    const trs = wrapper.findAll('tr')
    expect(trs.length).toBe(Products.length + 1)
    const tds = wrapper.findAll('td')
    expect(tds.length).toBe(TableConfig.length * Products.length + TableConfig.length)
  })
})
