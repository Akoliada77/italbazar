const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Brands {
    async brandContainerIsDisplayed() {
        expect(await isElementVisible('.desktop_marketing_info_brands__2XHmD')).to.be.true
        expect(await isElementVisible('.slick-slider.desktop_slider_box__3V8-3.slick-initialized')).to.be.true
    }
    async checkTitleOfBrands() {
        let title = await getText(page, '#root > div:nth-child(10) > div > div > div.desktop_marketing_info_brands__2XHmD > span')
        expect(title).to.eq('150')
        expect(await isXpathVisible('//*[@id="root"]/div[10]/div/div/div[3]/text()')).to.be.true
    }
}