import { expect } from "chai"
const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class ProductPage {
    async visit() { 
        await page.goto('https://www.staging.italbazar.ru/')
        await mainpage.closeCookie()
        let but = await page.$$('.gray_link_button_link__c70FC')
        await but[4].click()
        expect(await isElementVisible('.product_card_container__1UHDe')).to.be.true
        await page.waitForTimeout(2000)
        let pr = await page.$$('.product_card_container__1UHDe')
        await pr[1].click()
        expect(await isElementVisible('.desktop_product_page_container__2HFDF')).to.be.true
    }
}