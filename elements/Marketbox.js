const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Marketbox {
    async isMarketBoxIsDisplayed() {
        expect(await isElementVisible('.desktop_marketing_info_box__2ilrA')).to.be.true
    }
    async checkTitleOfMarketBox() {
        let title = await getText(page, '.desktop_marketing_info_salesTitle__366hy')
        expect(title).to.include('Скидки до')
        // let title2 = await page.$x('//*[@id="root"]/div[10]/div/div/div[1]/text()')
        // let text = title2.innerText()
        // await getText(page, title2)
        // console.log(text)
        // expect(text).to.equal('на оригиналы известных марок')
        expect(await isXpathVisible('//*[@id="root"]/div[10]/div/div/div[1]/text()')).to.be.true
    }
    async checkTransitionToCatalog() {
        const sections = await page.$$('.desktop_marketing_info_image__1CcMP')
        await sections[0].click()
        await page.waitForNavigation()
        expect(page.url()).to.include('https://www.staging.italbazar.ru/catalog/')
        await mainpage.visit()
        const button = await page.$$('.desktop_marketing_info_image__1CcMP')
        await button[1].click()
        await page.waitForNavigation()
        expect(page.url()).to.include('https://www.staging.italbazar.ru/catalog/')
    }

}