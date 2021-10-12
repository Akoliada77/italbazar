import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'

describe ('Checking if links work in Homepage', () => {
    let mainpage
    let navbar
    jest.setTimeout(20000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
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
    it('ClickOnEveryLinkOnNavbarAsWomen', async() =>{
        await mainpage.visit()
        // await navbar.clickOnFavorite()
        await navbar.clickOnClothes()
        await navbar.clickOnShoes()
    })
})