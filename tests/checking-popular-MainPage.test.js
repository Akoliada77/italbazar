import Navbar from '../elements/Navbar'
import MainPage from '../pages/MainPage'
import Banner from '../elements/Banner'
import NewCollection from '../elements/NewCollection'
import Popular from '../elements/Popular'

describe ('Checking new collection in Mainpage', () => {
    let mainpage
    let navbar
    let banner
    let newcollection
    let popular
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        navbar = new Navbar()
        banner = new Banner()
        newcollection = new NewCollection()
        popular = new Popular()
    })
    it('Check that Popular continer is displayed', async() =>{
        await mainpage.visit()
        await popular.isPopularDisplayed()
    })
    it('Check title of Popular container', async() =>{
        await popular.checkTitleOfPopular()
    })
})