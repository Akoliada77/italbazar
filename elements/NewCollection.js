const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class NewCollection {
    async checkNewCollectionIsDisplayed() {
        await page.$('.new_collection_box__3jgDA')
    }
    async checkTitleOfNewCollection() {
        const title = await getText(page, '.collection_header_title__2Uo4W')
        expect(title).to.equal('Последние поступления')
    }
    async checkTitleOfNewCollectionButton() {
        const title = await getText(page, '.black_go_to_button_button__dQ2Fh')
        expect(title).to.include('Смотреть все новинки')
    }
    async checkDetailsButton() {
        const name = await getText(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_leftBox__3k2nh > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_title__2lPFr')
        const brandname = await getText(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_leftBox__3k2nh > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_brand__1Nepu')
        await click(page,'.collection_item_itemLink__1S8x2.undefined')
        await page.waitForSelector('.product_images_slider_mainSliderContainer__yhlON')
        const name2 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productName__1qmIM')
        const brandname2 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productBrand__2K-5p')
        expect(name).to.equal(name2)
        expect(brandname).to.equal(brandname2)
    }
}