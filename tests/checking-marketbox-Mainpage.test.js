import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import SeeAll from '../elements/SeeAll'
import Marketbox from '../elements/Marketbox'

describe ('Checking marketbox in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    let seeall
    let marketbox
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
        seeall = new SeeAll()
        marketbox = new Marketbox()
    })
    it('Check that marketbox is loaded', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await marketbox.isMarketBoxIsDisplayed()
    })
    it('Check the title of marketbox', async() =>{
        await marketbox.checkTitleOfMarketBox()
    })
    it('Check transition to catalog', async() =>{
        await marketbox.checkTransitionToCatalog()
    })

})