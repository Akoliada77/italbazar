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
    it('', async() =>{

    })
})