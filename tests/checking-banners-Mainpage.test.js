import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'

describe ('Checking banner in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
    })
    it('Check that banners are shown', async() =>{
        await mainpage.visit()
        await banner.checkIfBannersAreDisplayed()
    })
})