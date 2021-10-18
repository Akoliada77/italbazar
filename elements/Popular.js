const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import { ElementHandle } from 'puppeteer'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Popular {
    async isPopularDisplayed() {
        expect (await isElementVisible('.popular_products_container__164UX')).to.be.true
    }
    async checkSwitchingImages() {

    }
    async checkTitleOfPopular() {
        expect(await getText(page, '.popular_products_title__oL--W')).to.eq('Популярное')
    }
    async checkHoverOfProduct() {
        // await ElementHandle.hover(await page.$('#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(1) > div.product_card_preview__5FpYL > div.utils_desktop__2aNwE > div > img'))
        // const el = await page.$$('#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(1) > div.product_card_preview__5FpYL > div.utils_desktop__2aNwE > div > img')
        await page.hover('#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div')
        await page.waitForTimeout(3000)
        expect(await isElementVisible('.product_card_hover__23Uf6')).to.be.true
        expect(await isElementVisible('.product_card_sizes__2btIw')).to.be.true
        expect(await isElementVisible('.gray_button_button__gHHWj.product_card_details__2iykS')).to.be.true
    }
}