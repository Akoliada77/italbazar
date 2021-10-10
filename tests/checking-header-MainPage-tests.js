import MainPage from '../pages/MainPage'

describe ('Checking if links work in Homepage', () => {
    let mainpage
    jest.setTimeout(20000)

    beforeAll(async() =>{
        mainpage = new MainPage()
    })

    it("MainPageIsLoaded", async() =>{
        await mainpage.visit()
    })
})