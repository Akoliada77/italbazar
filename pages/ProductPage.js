import { expect } from "chai"
const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import MainPage from '../pages/MainPage'
import Navbar from '../elements/navbar'

let mainpage
let navbar

mainpage = new MainPage()
navbar = new Navbar()

export default class ProductPage {
    async visit() { 
        await mainpage.visit()
        await mainpage.closeCookie()
        await navbar.chooseWoman()
        let clothes = await page.$$('.bottom_header_button_button__9n5-I')
        await clothes[0].click()
        await page.waitForNavigation()
        expect(page.url()).to.eq('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
        let pr = await page.$$('.product_card_hoverPreview__2AYHm')
        // await pr[0].click()
        await pr[0].evaluate(a => a.click());
        await page.waitForNavigation()
        expect(await isElementVisible('.desktop_product_page_container__2HFDF')).to.be.true
    }
}