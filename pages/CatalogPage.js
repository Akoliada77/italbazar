import { expect } from "chai"
const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')

export default class CatalogPage {
    async visit() { 
        await page.goto('https://www.staging.italbazar.ru/catalog/')
        expect(page.url()).to.eq('https://www.staging.italbazar.ru/catalog/')
        expect(await isElementVisible('.desktop_page_mainBox__3129p')).to.be.true
        expect(await isElementVisible('.header_line__21rZI')).to.be.true
    }
    async closeCookie() {
        const cookie = await page.$('.cookie_modal_container__1THr2')
        if (cookie) {
            await click (page, '.gray_full_button_button__lIBCl.cookie_modal_button__2FwX-')
            await shouldNotExist(page, '.cookie_modal_container__1THr2')
        }
    }
}