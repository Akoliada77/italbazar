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
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[0].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        await selectText(page, '.price_filter_toInput__PF4h_')
        await typeText(page, '.price_filter_toInput__PF4h_', '12345')
        await click(page, '.pink_boxed_button_box__3ELgq.price_filter_button__wSbQP')
        expect(page.url()).to.include('maxPrice=12345&minPrice=1238')
    }
    async doesSaleFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[1].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.sale_filter_button__2zDxL')
        expect(page.url()).to.include('?discounts=')
    }
    async doesColourFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[2].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.color_filter_button__2volR')
        expect(page.url()).to.include('?colors=')
    }
    async doesSizeFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[3].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.size_filter_button__1G9Ft')
        expect(page.url()).to.include('?sizes=')
    }
    async doesBrandFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[4].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.brand_filter_button__1tos9')
        expect(page.url()).to.include('?brands=')
    }
    async doesFasonFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[5].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.fason_filter_button__1pK3o')
        expect(page.url()).to.include('?fasons=')
    }
    async doesMaterialFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[6].click()
        expect(await isElementVisible('.material_filter_container__3Soa3')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.material_filter_button__2wZ7m')
        expect(page.url()).to.include('?materials=')
    }
    async doesSeasonsFilterWork() {
        const filters = await page.$$('.filter_filterButton__3r4_W') 
        await filters[7].click()
        expect(await isElementVisible('.filter_filterContent__3iGNK')).to.be.true
        const option = await page.$$('.checkbox_box__1JiQN.undefined')
        await option[0].click()
        await click(page, '.pink_boxed_button_box__3ELgq.season_filter_button__3fheM')
        expect(page.url()).to.include('?seasons=')
    }
    async isNumberSortDisplayed() {
        expect(await isElementVisible('.desktop_page_productsLimitsBox__1pMpm')).to.be.true
    }
    async doesNumberSortWorks() {
        // const number = await page.$$('.css-giqxv7-singleValue')
        // expect(await getText(page, number)).to.eq("24")
        expect(await getText(page,'#root > div:nth-child(4) > div > div > div.desktop_page_titleBox__3aVbX > div > div > div > div > div > div.css-1hwfws3 > div')).to.eq("24")
        expect(await getCount(page, '.product_card_card__36uRe')).to.eq(24)
        expect(await isElementVisible('.css-giqxv7-singleValue')).to.be.true
        const but = await page.$$('.css-giqxv7-singleValue')
        await but[0].click()
        expect(await isElementVisible('.css-13tnpzo')).to.be.true
        const option = await page.$$('.css-aixs5i-option')
        await option[0].click()
        await page.waitForTimeout(3000)
        expect(await getCount(page, '.product_card_card__36uRe')).to.eq(48)
        expect(page.url()).to.include('?productsLimit=48')
    }
}