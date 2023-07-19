import { shallowMount } from "@vue/test-utils";
import { filter } from "lodash";
import Search from '~/components/Search'

describe('componets/Search.vue', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallowMount(Search)
  })

  test('선택 가능한 연도의 개수가 일치합니다', () => {
   const year = wrapper.vm.filters.find(f => f.name === 'year')
   const yearLength = new Date().getFullYear() - 1985 + 1
   expect(year.items.length).toBe(yearLength)
  })
})