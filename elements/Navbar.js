const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Navbar {
    async clickOnFavorite() {
        await click (page, '#root > div:nth-child(1) > div > div:nth-child(2) > div > nav > div.middle_header_heart__1AwTJ > div > a')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/account/?targetScreen=favorite')
        await click(page, 'body > div:nth-child(5) > div > div > div.login_modal_cross__2LO8R > div > div')
        let title = await getText(page, '.desktop_favorite_title__6Jbwx')
        expect(title).to.equal('Избранное')
    }
    async clickOnClothes() {
        await click(page, '#root > div:nth-child(2) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(1) > div > div')
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
    }
    async clickOnShoes() {
        await mainpage.visit()
        await click (page, '#root > div:nth-child(2) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(2) > div > div')
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
        await click(page, '#root > div:nth-child(2) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(3) > div > div > a > div')
        await page.waitForSelector('.desktop_page_h1__2Jzco')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/aksessuary/zhenskie/')
    }
    async clickOnForGirls() {
        await mainpage.visit()
        await click(page, '#root > div:nth-child(1) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(4) > div > div > a > div')
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
    async choosenMan() {
        await click(page,'#root > div.utils_desktop__2aNwE > div > div:nth-child(2) > div > nav > div.middle_header_for_man__2Dz3g.gender_button_container__EsmC6 > div > div')
    }
    async chooseWoman() {
        await click(page,'#root > div.utils_desktop__2aNwE > div > div:nth-child(2) > div > nav > div.middle_header_for_woman__Ey3VB.gender_button_container__EsmC6 > div > div')
    }
}
