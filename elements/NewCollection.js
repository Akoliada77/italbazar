const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
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
        const cost = await getText(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_leftBox__3k2nh > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_pricesBlock__3Mg8- > div.collection_item_prices__1gKQJ > div.collection_item_salePrice__2pWoQ > span')
        await click(page,'.collection_item_itemLink__1S8x2.undefined')
        await page.waitForSelector('.desktop_product_page_sliders__1gvH0')
        expect(await isElementVisible('.product_images_slider_mainSliderContainer__yhlON')).to.be.true
        const name2 = await getText(page, '#root > div:nth-child(4) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productName__1qmIM')
        const brandname2 = await getText(page, '#root > div:nth-child(4) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productBrand__2K-5p')
        const cost2 = await getText(page, '#root > div:nth-child(4) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_priceBlock__2XeTd > div.main_info_block_currentPrice__31hdv > span')
        expect(name).to.equal(name2)
        expect(brandname).to.equal(brandname2)
        expect(cost).to.equal(cost2)
    }
    async check2DetailsButton() {
        const name = await getText(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_rightBox__2QDuU > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_title__2lPFr')
        const brandname = await getText(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_rightBox__2QDuU > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_brand__1Nepu')
        await click(page,'#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div.desktop_collection_productsBox__1HxQC > div.desktop_collection_rightBox__2QDuU > div > div > div.collection_item_textBlock__2raTe > div > div.collection_item_pricesBlock__3Mg8- > div.collection_item_moreLink__1a2UW > a > div')
        await page.waitForSelector('.product_images_slider_mainSliderContainer__yhlON')
        const name2 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productName__1qmIM')
        const brandname2 = await getText(page, '#root > div:nth-child(3) > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productBrand__2K-5p')
        expect(name).to.equal(name2)
        expect(brandname).to.equal(brandname2)
    }
    async clickOnSeeAllNewProducts() {
        await click(page, '#root > div.new_collection_box__3jgDA > div.utils_desktop__2aNwE > div > div > div:nth-child(1) > div.collection_header_buttonBox__2th-o > a > div') 
        await page.waitForNavigation()
        expect(await isElementVisible('.catalog_banner_container__eEmON')).to.be.true
        const url = page.url()
        expect(url).to.eq('https://www.staging.italbazar.ru/catalog/new/')
    }

}