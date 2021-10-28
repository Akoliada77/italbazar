import Discountsub from '../elements/Discountsub'
import MainPage from '../pages/MainPage'

describe ('Checking SeeAll in Mainpage', () => {
    let mainpage
    let discountsub
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        discountsub = new Discountsub()
    })
    it('Check that Discountsub is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await discountsub.isDiscountSubDisplayed()
    })
    it('Check title of Discountsub section', async() =>{
        await discountsub.checkTitleOfSection()
    })
    it.skip('Check that checkboxes work', async() =>{
        await discountsub.checkCheckBoxesOfSection()
    })
})