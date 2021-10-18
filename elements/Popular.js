const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class Popular {
    async isPopularDisplayed() {
        expect (await isElementVisible('.popular_products_container__164UX')).to.be.true
    }
    async checkSwitchingImages() {

    }
    async checkTitleOfPopular() {
        expect(await getText(page, '.popular_products_title__oL--W')).to.eq('Популярное')
    }
}