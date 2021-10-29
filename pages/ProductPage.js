import { expect } from "chai"
const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class ProductPage {
    async visit() { 
        await page.goto('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
        await page.waitForSelector('.product_card_card__36uRe')
        await mainpage.closeCookie()
        let pr = await page.$$('[class="product_card_container__1UHDe"]')
        await pr[0].click()
        await page.waitForNavigation()
        expect(await isElementVisible('.product_images_slider_container__3gqX1.product-cart-images-slider')).to.be.true
        expect(await isElementVisible('.desktop_product_page_container__2HFDF')).to.be.true
    }
}