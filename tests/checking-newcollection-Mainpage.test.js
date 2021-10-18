import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import NewCollection from '../elements/NewCollection'

describe ('Checking new collection in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    let newcollection
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
        newcollection = new NewCollection()
    })
    it('Check that New Collection is displayed',async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await newcollection.checkNewCollectionIsDisplayed()
    })
    it('Check the tile of New collection', async() =>{
        await newcollection.checkTitleOfNewCollection()
        await newcollection.checkTitleOfNewCollectionButton()
    })
    it('Check Details Button', async() =>{
        await newcollection.checkDetailsButton()
        await mainpage.visit()
        // await newcollection.check2DetailsButton()
    })
    it('Check See all new products of New collection', async() =>{
        await mainpage.visit()
        await newcollection.clickOnSeeAllNewProducts()
    })
    it('Check flipping the pictures', async() =>{
        await mainpage.visit()
    })

})