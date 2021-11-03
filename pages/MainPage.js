import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")


export default class MainPage {
    async visit() {
        await page.goto("https://www.staging.italbazar.ru")
        await page.waitForSelector(".carousel_container__w-zAD")
        await page.waitForSelector(".middle_header_navBlock__V7lVb")
    }
    async closeCookie() {
        const cookie = await page.$('.cookie_modal_container__1THr2')
        if (cookie) {
            await click (page, '.gray_full_button_button__lIBCl.cookie_modal_button__2FwX-')
            await shouldNotExist(page, '.cookie_modal_container__1THr2')
        }
        // const cookies = await page.cookies()
        // expect(cookies.jsonValue()).to.have.property('cookiesAccepted', {name: 'cookiesAccepted'})
    }
    async clickOnAboutUs() {
        const but = await page.$$('.undefined.top_header_block__2jCyz')
        await but[0].click()
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/about/')
    }
    async clickOnDelivery() {
        await click (page, '.top_header_delivery__F_T90.top_header_block__2jCyz')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/dostavka_i_oplata/')
        let title = await getText(page, '.delivery_page_title__6IoOi')
        expect(title).to.eq(' Условия доставки')
    }
    async clickOnShops() {
        await shouldNotExist(page, '.stores_button_dropdownContent__r0-b-')
        await click(page, '.dotted_button_button__mDsw6')
        await page.waitForSelector('.stores_button_dropdownContent__r0-b-')
    }
    async checkPhoneNumberisDisplayed() {
        expect(await isElementVisible('.top_header_phone_number__1kQTQ.top_header_block__2jCyz')).to.be.true
    }
}