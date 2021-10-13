import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'

describe ('Checking header in Homepage', () => {
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
        await navbar.chooseWoman()
        await navbar.clickOnClothes()
        await navbar.clickOnShoes()
        await navbar.clickOnАccessories()
        await navbar.clickOnForGirls()
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