import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Brands from '../elements/Brands'
import Contactblock from '../elements/Contactblock'

describe ('Checking brands in Mainpage', () => {
    let mainpage
    let navbar
    let brands
    let contactblock

    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        brands = new Brands()
        contactblock = new Contactblock()
    })
    it('Check that Contact block is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await contactblock.isContactBlockDisplayed()
    })
    it('Check that Callback form is displayed',async() =>{
        await contactblock.isCallbackFormDisplayed()
    })
    it('Check hovers of Contact block', async() =>{
        await mainpage.visit()
        await contactblock.checkHoverOfCall()
        await contactblock.checkHoverOfWrite()
    })

})