import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import NewCollection from '../elements/NewCollection'
import Popular from '../elements/Popular'
import { prototype } from 'mocha'

describe ('Checking popular container in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    let newcollection
    let popular
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
        newcollection = new NewCollection()
        popular = new Popular()
    })
    it('Check that Popular continer is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await popular.isPopularDisplayed()
    })
    it('Check title of Popular container', async() =>{
        await popular.checkTitleOfPopular()
    })
    it('Check hover of product is displayed', async() =>{
        await popular.checkHoverOfProduct()
    })
    it('Check transition to product card', async() =>{
        await mainpage.visit()
        await popular.checkInfoOfProductInCard()
    })
    it('Check About button in popular section', async() =>{
        await mainpage.visit()
        await popular.checkAboutButton()
    })
})