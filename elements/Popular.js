const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import { ElementHandle } from 'puppeteer'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Popular {
    async isPopularDisplayed() {
        expect(await isElementVisible('.popular_products_title__oL--W')).to.be.true
        expect(await isElementVisible('.popular_products_container__164UX')).to.be.true
    }
    async checkSwitchingImages() {

    }
    async checkTitleOfPopular() {
        expect(await getText(page, '.popular_products_title__oL--W')).to.eq('Популярное')
    }
    async checkHoverOfProduct() {
        await page.hover('#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div')
        expect(await isElementVisible('.product_card_hover__23Uf6')).to.be.true
        expect(await isElementVisible('.product_card_sizes__2btIw')).to.be.true
        expect(await isElementVisible('.gray_button_button__gHHWj.product_card_details__2iykS')).to.be.true
    }
    async checkInfoOfProductInCard() {
        const cost = await getText(page, '#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(1) > div.price_block_price__naE0S > span.price_block_common__RNl1X.price_block_currentPrice__1Q9Vc.price_block_black__25pjN > span')
        const title = await getText(page, '#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(1) > div.product_card_productName__3UB9Z')
        const brand = await getText(page, '#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(2) > div')
        await click(page,'#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div > a:nth-child(1) > div.product_card_preview__5FpYL')
        await page.waitForNavigation()
        let cost1 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_priceBlock__2XeTd > div.main_info_block_currentPrice__31hdv > span')
        let title1 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productName__1qmIM')
        let brand1 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productBrand__2K-5p')
        // expect(cost).to.equal(cost1)
        expect(title).to.equal(title1)
        expect(brand).to.equal(brand1)
    }
    async checkAboutButton() {
        await page.hover('#root > div.popular_products_container__164UX > div > div.slider-with-round-arrows > div > div.slick-list > div > div.slick-slide.slick-active.slick-current > div > div > div')
        await click(page, '.gray_button_button__gHHWj.product_card_details__2iykS')
        expect(await isElementVisible('.product_modal_container__2kAnm')).to.be.true
        expect(await isElementVisible('.product_modal_management__3uBWP')).to.be.true
    }
}