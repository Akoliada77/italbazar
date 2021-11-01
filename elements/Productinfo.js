const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import { ElementHandle } from 'puppeteer'
import MainPage from '../pages/MainPage'
import ProductPage from '../pages/ProductPage'

let mainpage
let productpage

mainpage = new MainPage()
productpage = new ProductPage()

export default class Productinfo {
    async isProductInfoContainerDisplayed() {
        expect(await isElementVisible('.desktop_product_page_productInfo__2UahX')).to.be.true
    }
    async checkElementsOfProductInfoAreDisplayed() {
        // expect(await isElementVisible('.main_info_block_vendorCode__rBRMJ')).to.be.true // articul
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div:nth-child(1) > div')).to.be.true // articul
        // expect(await isElementVisible('.main_info_block_vendorCodeNumber__HRFh_')).to.be.true // articul number
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div:nth-child(1) > div > span')).to.be.true // articul number
        // expect(await isElementVisible('.main_info_block_productName__1qmIM')).to.be.true // product name
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productName__1qmIM')).to.be.true // product name
        // expect(await isElementVisible('.main_info_block_productBrand__2K-5p')).to.be.true // brand
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_head__2thrj > div > h1.main_info_block_productBrand__2K-5p')).to.be.true // brand
        // expect(await isElementVisible('.main_info_block_color__3a5vs')).to.be.true // colour
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_color__3a5vs')).to.be.true // colour
        // expect(await isElementVisible('.main_info_block_colorName__2tyca')).to.be.true // colour value
        expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_color__3a5vs')).to.be.true // colour value
        // expect(await isElementVisible('.main_info_block_variantsBlock__3lknQ')).to.be.true // colour variants
        // expect(await isElementVisible('#root > div:nth-child(3) > div > div > div.desktop_product_page_container__2HFDF > div.desktop_product_page_productInfo__2UahX > div.main_info_block_variantsBlock__3lknQ')).to.be.true // colour variants
        // expect(await isElementVisible('.main_info_block_sizes__23Svn')).to.be.true // sizes

        // expect(await isElementVisible('.boxed_heart_button_box__3m2vn')).to.be.true //favourites
        // expect(await isElementVisible('.pink_boxed_button_box__3ELgq.cart_button_addToCartButton__1k4aa')).to.be.true // add to cart button
    }
    async addingProductToCart() {
        const name = await page.$$('.main_info_block_productName__1qmIM')
        await getText(page, name[0])
        console.log(name[0])
    }
}