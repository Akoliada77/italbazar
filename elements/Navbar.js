import { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } from '../lib/helpers'
import { generateEmail, generateID, generateNumbers } from '../lib/utils'
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
        await click (page, '#root > div:nth-child(1) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(1) > div > div > a > div')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
    }
    async clickOnShoes() {
        await click (page, '#root > div:nth-child(1) > div > div:nth-child(3) > div > nav > div.bottom_header_navBlockButtonsContainer__2Tg5P > div:nth-child(2) > div > div > a > div')
        await page.waitForNavigation()
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/obuv/zhenskaya/')
    }
}
