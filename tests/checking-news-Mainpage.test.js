import MainPage from '../pages/MainPage'
import News from '../elements/News'

describe ('Checking news in Mainpage', () => {
    let mainpage
    let news
    jest.setTimeout(30000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        news = new News()
    })
    it('Check that news are displayed',async() =>{
        await mainpage.visit()
        await mainpage.closeCookie()
        await news.newsAreDisplayed()
    })
    it('Check the title of News section',async() =>{
        await news.checkTitleOfSections()
    })
    it('Click on More News button',async() =>{
        await news.checkButtonMoreNews()
    })
    it('Check transition to news page', async() =>{
        await mainpage.visit()
        await news.checkTransitionToNews()
    })
})