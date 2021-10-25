import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import SeeAll from '../elements/SeeAll'

describe ('Checking SeeAll in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    let seeall
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
        seeall = new SeeAll()
    })
    it('Check SeeAll section is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await seeall.isSeeAllIsDisplayed()
    })
})