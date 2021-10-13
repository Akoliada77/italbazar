import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'

describe ('Checking if links work in Homepage', () => {
    let mainpage
    let navbar
    jest.setTimeout(30000)

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
    it('ClickOnEveryLinkOnNavbarAsWoman', async() =>{
        await mainpage.visit()
        await navbar.chooseWoman()
        await navbar.clickOnClothes()
        await navbar.clickOnShoes()
        await navbar.clickOnАccessories()
        await navbar.clickOnForGirls()
        // await navbar.clickOnForHome()
    })
    it('ClickOnEveryLinkOnNavbarAsMan', async() =>{
        await mainpage.visit()
        await navbar.chooseMan()
        await navbar.clickOnClothesMan()
        await navbar.clickOnShoesMan()
        await navbar.clickOnАccessoriesMan()
        await navbar.clickOnForBoys()
    })
    it.skip('CheckMiddleNavbar', async() =>{
        await mainpage.visit()
        await navbar.clickOnFavorite()
        await navbar.hoverProfile()
        await navbar.hoverCart()
    })
})