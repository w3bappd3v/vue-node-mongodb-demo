import { shallowMount } from '@vue/test-utils'
import Listings from '@/views/Listings.vue'

describe('Listings.vue', () => {

  it('Renders at least one Listing', () => {
    const wrapper = shallowMount(Listings,{ 
      computed: {
        listings () {
          return [
            {
              id: 1,
              address: "123 First Street",
              neighborhood: "Beverly Hills",
              price: "2,000,000",
              summary: "2BD, 2BA, 1200SF, CONDO",
              image: "listing-1"
            },
            {
              id: 2,
              address: "321 2nd Ave",
              neighborhood: "Harlem",
              price: "100,000",
              summary: "2BD, 2BA, 900SF, SINGLE-FAMILY",
              image: "listing-2"
            }
    
          ]
        }
      }
     })
    const filterInput = wrapper.find('input')
    filterInput.setValue('321')
    wrapper.vm.filterListings()
    const div = wrapper.find('.listings')
    console.log(this.listings)
    console.log(div.html())
    expect(div.exists()).toBe(true)
  })
})