import CatalogPage from '../pages/CatalogPage'
import Filters from '../elements/Filters'

describe ('Checking filters in CatalogPage', () => {
    let catalogpage
    let filters

    jest.setTimeout(30000)

    beforeAll(async() =>{
        catalogpage = new CatalogPage()
        filters = new Filters()
    })

    it('Filters are displayed', async() => {
        await catalogpage.visit()
        await catalogpage.closeCookie()
        await filters.filtersAreDisplayed()
    })

})