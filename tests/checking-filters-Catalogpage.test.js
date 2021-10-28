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
    it('Check that sorting filter work', async()=>{
        await filters.doesSortingWork()
    })
    it('Check that cost filter work', async()=>{
        await catalogpage.visit()
        await filters.doesCostFilterWork()
    })
    it('Check that sale filter work', async()=>{
        await catalogpage.visit()
        await filters.doesSaleFilterWork()
    })
    it('Check that colour filter work', async()=>{
        await catalogpage.visit()
        await filters.doesColourFilterWork()
    })
    it('Check that size filter work', async()=>{
        await catalogpage.visit()
        await filters.doesSizeFilterWork()
    })
    it('Check that brand filter work', async()=>{
        await catalogpage.visit()
        await filters.doesBrandFilterWork()
    })
    it('Check that fason filter work', async()=>{
        await catalogpage.visit()
        await filters.doesFasonFilterWork()
    })
    it.skip('Check that material filter work', async()=>{
        await catalogpage.visit()
        await filters.doesMaterialFilterWork()
    })
    it('Check that seasons filter work', async()=>{
        await catalogpage.visit()
        await filters.doesSeasonsFilterWork()
    })
    it('Check that number sort is displayed', async()=>{
        await catalogpage.visit()
        await filters.isNumberSortDisplayed()
    })

})