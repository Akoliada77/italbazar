import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'

describe ('Checking header in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    jest.setTimeout(20000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
    })

    it("MainPageIsLoaded", async() =>{
        await mainpage.visit()
    })
    it('CookieAreAccepted', async() =>[
        await mainpage.closeCookie()
    ])
    it('ClickOnEveryLinkInHeader', async() =>{
        await mainpage.visit()
        await mainpage.clickOnAboutUs()
        await mainpage.clickOnDelivery()
        await mainpage.clickOnShops()
    })
})