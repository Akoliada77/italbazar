const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class Contactblock {
    async isContactBlockDisplayed() {
        expect(await isElementVisible('.contacts_block_gridContainer__3MVDX')).to.be.true
        expect(await getCount(page,'.contacts_block_iconTextBox__2HtfE')).to.eq(3)
    }
    async isCallbackFormDisplayed() {
        await click(page,'#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(1) > div.contacts_block_iconText__6GbEe')
        expect(await isElementVisible('.ReactModal__Content.ReactModal__Content--after-open.user_callback_modal_modal__NYqXb')).to.be.true
        expect(await getText(page,'.user_callback_modal_title__3G2BL')).to.eq('Заказать обратный звонок')    
    }
    async checkHoverOfCall() {
        await page.hover('#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(2) > div > span.contacts_block_hoverButtonOff__1o52Q > div > div.contacts_block_iconText__6GbEe')
        expect(await isElementVisible('#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(2) > div > span.contacts_block_hoverButtonOn__TJWyi > div.contacts_block_hoverText__1sM3p')).to.be.true
        expect(await getText(page,'#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(2) > div > span.contacts_block_hoverButtonOn__TJWyi > div.contacts_block_hoverText__1sM3p')).to.include('Работаем с 11:00 до 21:00 по г. Москва (UTC+3:00)')
    }
    async checkHoverOfWrite() {
        await page.hover('#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(3) > div > span.contacts_block_hoverButtonOff__1o52Q > div > div.contacts_block_iconText__6GbEe > a')
        expect(await isElementVisible('#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(3) > div > span.contacts_block_hoverButtonOn__TJWyi > div.contacts_block_hoverText__1sM3p')).to.be.true
        expect(await getText(page,'#root > div.footer_container__3aq8W > div.contacts_block_pinkBlock__1klHQ > div > div:nth-child(3) > div > span.contacts_block_hoverButtonOn__TJWyi > div.contacts_block_hoverText__1sM3p')).to.include('Наш e-mail')
    }
}