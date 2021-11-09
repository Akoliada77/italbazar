import Footer from '../elements/Footer'
import MainPage from '../pages/MainPage'

describe ('Checking SeeAll in Mainpage', () => {
    let mainpage
    let footer
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        footer = new Footer()
    })
    it('Check that Footer is displayed', async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await footer.isFooterDisplayed()
    })
    it('Check that footer sections are displayed', async() =>{
        await footer.areFooterContacsDisplayed()
        await footer.isFooterCatalogDisplayed()
        await footer.isFooterHelpfulInfoDisplayed()
    })
})