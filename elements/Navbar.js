const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Navbar {
    async clickOnFavorite() {
        await click (page, '.heart_button_heart__3v8Wu')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/account/?targetScreen=favorite')
        await click(page, 'body > div:nth-child(5) > div > div > div.login_modal_cross__2LO8R > div > div')
        let title = await getText(page, '.desktop_favorite_title__6Jbwx')
        expect(title).to.equal('Избранное')
    }
    async clickOnClothes() {
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[0].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
    }
    async clickOnShoes() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[1].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/obuv/zhenskaya/')
    }
    async hoverProfile() {
        await page.hover('.profile_button_icon__1Vyec')
        await page.waitForSelector('.profile_button_content__3fAoR')
    }
    async hoverCart() {
        await page.hover('.shopping_bag_button_icon__3w46q')
        await page.waitForSelector('.empty_cart_title__1_ou0')
        let text = await getText(page, '.empty_cart_title__1_ou0')
        expect(text).to.equal('Ваша корзина пока пуста')
    }
    async clickOnАccessories() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[2].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/aksessuary/zhenskie/')
    }
    async clickOnForGirls() {
        await mainpage.visit()
        await page.waitForTimeout(1500)
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[3].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/dlya_detey/dlya_devochek/') 
    }
    async clickOnForHome() {
        await mainpage.visit()
        await click(page, '#root > div:nth-child(1) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(5) > div > div > a > div')
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/dlya_doma/') 
    }
    async clickOnBrands() {
        await mainpage.visit()
        await click(page, '#root > div:nth-child(1) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(6) > div > div > a > div')
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/brands/') 
    }
    async chooseMan() {
        await click(page,'#root > div.utils_desktop__2aNwE > div > div:nth-child(2) > div > nav > div.middle_header_for_man__2Dz3g.gender_button_container__EsmC6 > div > div')
        await page.waitForTimeout(1500)
    }
    async chooseWoman() {
        await click(page,'#root > div.utils_desktop__2aNwE > div > div:nth-child(2) > div > nav > div.middle_header_for_woman__Ey3VB.gender_button_container__EsmC6 > div > div')
        await page.waitForTimeout(1500)
    }
    async clickOnClothesMan() {
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[0].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/odezhda/muzhskaya/')
    }
    async clickOnShoesMan() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[1].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/obuv/muzhskaya/')
    }
    async clickOnАccessoriesMan() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[2].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/aksessuary/muzhskie/')
    }
    async clickOnForBoys() {
        await mainpage.visit()
        await page.waitForTimeout(1500)
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[3].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/dlya_detey/dlya_malchikov/') 
    }
    async clickOnForHome() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[4].click()
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/dlya_doma/') 
    }
    async clickOnBrands() {
        await mainpage.visit()
        await click(page, '.bottom_header_justLinks__2R0HI')
        expect(await isElementVisible('.available_brands_container__3X9Mz')).to.be.true
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/brands/') 
    }
    async clickOnNewProducts() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[5].click()
        expect(await isElementVisible('.breadcrumbs_container__36FaE')).to.be.true
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/new/dlya_zhenshin/')
    }
    async clickOnNewProductsAsMan() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[5].click()
        expect(await isElementVisible('.breadcrumbs_container__36FaE')).to.be.true
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/new/dlya_muzhchin/')
    }
    async clickOnSale() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[6].click()
        expect(await isElementVisible('.breadcrumbs_container__36FaE')).to.be.true
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/sale/dlya_zhenshchin/')
    }
    async clickOnSaleAsMan() {
        await mainpage.visit()
        const navbar = await page.$$('.bottom_header_button_button__9n5-I')
        await navbar[6].click()
        expect(await isElementVisible('.breadcrumbs_container__36FaE')).to.be.true
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/sale/dlya_muzhchin/')
    }
}
