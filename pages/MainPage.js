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
        const cookieAcceptBtn = await page.$('.body > div:nth-child(11) > div > div > div > div:nth-child(2)')
        await click (page, cookieAcceptBtn)
        await shouldNotExist(page, '.cookie_modal_container__1THr2')
    }
    async clickOnAboutUs() {
        await click (page, '#root > div:nth-child(2) > div > div.top_header_box__2h_A3 > div > nav > a:nth-child(1) > div > div')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/about/')
    }
}