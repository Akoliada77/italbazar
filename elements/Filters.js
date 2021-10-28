const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import CatalogPage from '../pages/CatalogPage'

let catalogpage

catalogpage = new CatalogPage()

export default class Filters {
    async filtersAreDisplayed() {
        expect(await isElementVisible('.desktop_page_sortingBox__2Yt-O')).to.be.true
        expect(await getCount(page, '.filter_container__3GKpi.false')).to.eq(8)
        expect(await getCount(page, '.filters_sorting__2PPhx')).to.eq(1)
    } 
    async doesSortingWork() {
        await page.waitForSelector('.filters_sorting__2PPhx')
        await page.select('.filters_sorting__2PPhx','Новинки')
        expect(page.url()).to.include('?order=')
    }
    async doesCostFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(2) > div.filter_filterButton__3r4_W')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await selectText(page, '.price_filter_toInput__PF4h_')
        await typeText(page, '.price_filter_toInput__PF4h_', '12345')
        await click(page, '.pink_boxed_button_box__3ELgq.price_filter_button__wSbQP')
        expect(page.url()).to.include('maxPrice=12345&minPrice=1238')
    }
    async doesSaleFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(3) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(3) > div.filter_filterContent__3iGNK > div > div.sale_filter_checkboxes__qLx0P > div:nth-child(3) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.sale_filter_button__2zDxL')
        expect(page.url()).to.include('?discounts=')
    }
    async doesColourFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(4) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(4) > div.filter_filterContent__3iGNK > div > div.color_filter_topItemsContainer__3s06Y > div > div:nth-child(2) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.color_filter_button__2volR')
        expect(page.url()).to.include('?colors=')
    }
    async doesSizeFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(5) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(5) > div.filter_filterContent__3iGNK > div > div.size_filter_itemsContainer__2eqTH > div > div:nth-child(15) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.size_filter_button__1G9Ft')
        expect(page.url()).to.include('?sizes=')
    }
    async doesBrandFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(6) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(6) > div.filter_filterContent__3iGNK > div > div.brand_filter_topItemsContainer__fpZFf > div > div:nth-child(2) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.brand_filter_button__1tos9')
        expect(page.url()).to.include('?brands=')
    }
    async doesFasonFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(7) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div.filters_container__2bPmi > div:nth-child(7) > div.filter_filterContent__3iGNK > div > div.fason_filter_topItemsContainer__2_h3b > div > div:nth-child(2) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.fason_filter_button__1pK3o')
        expect(page.url()).to.include('?fasons=')
    }
    async doesMaterialFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(8)')
        expect(await isElementVisible('.material_filter_container__3Soa3')).to.be.true
        // await page.waitForSelector('.material_filter_container__3Soa3')
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(8) > div.filter_filterContent__3iGNK > div > div.material_filter_itemsContainer__1smAP > div:nth-child(1) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.material_filter_button__2wZ7m')
        expect(page.url()).to.include('?materials=')
    }
    async doesSeasonsFilterWork() {
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(9) > div')
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await click(page, '#root > div:nth-child(3) > div > div > div.desktop_page_productsContainer__2TvcD > div.desktop_page_mainBox__3129p > div.desktop_page_sortingBox__2Yt-O > div > div:nth-child(9) > div.filter_filterContent__3iGNK > div > div:nth-child(2) > div:nth-child(1) > label > span')
        await click(page, '.pink_boxed_button_box__3ELgq.season_filter_button__3fheM')
        expect(page.url()).to.include('?seasons=')
    }
    async isNumberSortDisplayed() {
        expect(await isElementVisible('.desktop_page_productsLimitsBox__1pMpm')).to.be.true
    }
    async doesNumberSortWorks() {
        expect(await getText(page,'#root > div:nth-child(3) > div > div > div.desktop_page_titleBox__3aVbX > div > div > div > div > div > div.css-1hwfws3 > div')).to.eq("24")
        expect(await getCount(page, '.product_card_card__36uRe')).to.eq(24)
        await click(page,'#root > div:nth-child(3) > div > div > div.desktop_page_titleBox__3aVbX > div > div > div > div > div > div.css-1ort343')
        expect(await isElementVisible('.css-13tnpzo')).to.be.true
        await click(page,'#react-select-2-option-1')
        await page.waitForTimeout(1500)
        expect(await getCount(page, '.product_card_card__36uRe')).to.eq(48)
        expect(page.url()).to.include('?productsLimit=48')
    }
}