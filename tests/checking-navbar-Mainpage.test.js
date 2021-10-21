import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'

describe ('Checking navbar in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
    })
    it('ClickOnEveryLinkOnNavbarAsWoman', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await navbar.chooseWoman()
        await navbar.clickOnClothes()
        await navbar.clickOnShoes()
        await navbar.clickOnАccessories()
        await navbar.clickOnForGirls()
        await navbar.clickOnNewProducts()
    })
    it('ClickOnEveryLinkOnNavbarAsMan', async() =>{
        await mainpage.visit()
        await navbar.chooseMan()
        await navbar.clickOnClothesMan()
        await navbar.clickOnShoesMan()
        await navbar.clickOnАccessoriesMan()
        await navbar.clickOnForBoys()
        await navbar.clickOnNewProductsAsMan()
    })
    it('CheckMiddleNavbar', async() =>{
        await mainpage.visit()
        await navbar.hoverProfile()
        await navbar.hoverCart()
        await navbar.clickOnFavorite()
    })
    it('CheckingOtherLinksInNavbar', async() =>{
        await mainpage.visit()
        await navbar.clickOnForHome()
        await navbar.clickOnBrands()
    })
})