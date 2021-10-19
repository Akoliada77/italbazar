const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class SeeAll {
    async isSeeAllIsDisplayed() {
        expect(await isElementVisible('.sections_navigation_desktop_container__WVAbf')).to.be.true
        expect(await getCount(page, '.sections_navigation_desktop_content__1bGp5')).to.equal(4)
    }
    async checkIfLinksWorks() {
        const clothes = await getText(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(1) > div.sections_navigation_desktop_content__1bGp5 > div')
        expect(clothes).to.equal('Одежда')
        await click(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(1) > div.sections_navigation_desktop_content__1bGp5 > a > div > div')
        let url = page.url()
        expect(url).to.equal('https://www.staging.italbazar.ru/catalog/odezhda/zhenskaya/')
        await mainpage.visit()
        const shoes = await getText(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(2) > div.sections_navigation_desktop_content__1bGp5 > div')
        expect(shoes).to.equal('Обувь')
        await click(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(2) > div.sections_navigation_desktop_content__1bGp5 > a > div > div')
        let url1 = page.url()
        expect(url1).to.equal('https://www.staging.italbazar.ru/catalog/obuv/zhenskaya/')
        await mainpage.visit()
        const bags = await getText(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(3) > div.sections_navigation_desktop_content__1bGp5 > div')
        expect(bags).to.equal('Сумки')
        await click(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(3) > div.sections_navigation_desktop_content__1bGp5 > a > div > div')
        let url2 = page.url()
        expect(url2).to.equal('https://www.staging.italbazar.ru/catalog/aksessuary/zhenskie/sumki/')
        await mainpage.visit()
        const forhome = await getText(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(4) > div.sections_navigation_desktop_content__1bGp5 > div')
        expect(forhome).to.equal('Для дома')
        await click(page, '#root > div:nth-child(6) > div > div > div.sections_navigation_desktop_navigationBox__3etKJ > div:nth-child(4) > div.sections_navigation_desktop_content__1bGp5 > a > div > div')
        let url3 = page.url()
        expect(url3).to.equal('https://www.staging.italbazar.ru/catalog/dlya_doma/')
    }
}