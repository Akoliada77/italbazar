import { tsArrayType } from "@babel/types"
import { expect } from "chai"
import { waitForText, shouldNotExist, click, getText, getCount, typeText, selectText } from "../lib/helpers"
import { generateID, generateEmail } from "../lib/utils"


export default class MainPage {
    async visit() {
        await page.goto("https://www.staging.italbazar.ru")
        await page.waitForSelector(".carousel_container__w-zAD")
        await page.waitForSelector(".middle_header_navBlock__V7lVb")
    }
    async closeCookie() {
        await page.waitForSelector('.cookie_modal_container__1THr2')
        await click (page, '.gray_full_button_button__lIBCl.cookie_modal_button__2FwX-')
        await shouldNotExist(page, '.cookie_modal_container__1THr2')
        // const cookies = await page.cookies()
        // expect(cookies).to.be.an('array').that.does.have.deep.property('cookiesAccepted', {name: 'cookiesAccepted'})
    }
    async clickOnAboutUs() {
        await click (page, '#root > div:nth-child(2) > div > div.top_header_box__2h_A3 > div > nav > a:nth-child(1) > div > div')
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
    
}