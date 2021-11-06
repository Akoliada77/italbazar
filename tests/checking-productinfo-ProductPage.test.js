import MainPage from '../pages/MainPage'
import Productinfo from '../elements/Productinfo'
import ProductPage from '../pages/ProductPage'

describe ('Checking product container in Mainpage', () => {
    let mainpage
    let productinfo
    let productpage
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        productinfo = new Productinfo()
        productpage = new ProductPage()
        
    })
    it('Check that product container is displayed', async() =>{
        await productpage.visit()
        await productinfo.isProductInfoContainerDisplayed()
        
    })
})