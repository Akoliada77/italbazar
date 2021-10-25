import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import SeeAll from '../elements/SeeAll'
import Brands from '../elements/Brands'

describe ('Checking marketbox in Mainpage', () => {
    let mainpage
    let navbar
    let brands

    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        brands = new Brands()
    })
    it('Check that Brands section is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await brands.brandContainerIsDisplayed()
    })
    it('Check title of brands section', async() =>{
        await brands.checkTitleOfBrands()
    })
})