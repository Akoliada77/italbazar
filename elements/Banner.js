const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import { doc } from 'prettier'
import MainPage from '../pages/MainPage'
import Navbar from './Navbar'

let mainpage
let navbar

mainpage = new MainPage()
navbar = new Navbar()

export default class Banner {
    async checkIfBannersAreDisplayed() {
        await page.waitForSelector('.carousel_container__w-zAD')
    }
    async checkSwitchingBanners() {
        let banner = await page.$('#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-list > div > div:nth-child(2)')
        let banner1 = await page.$('#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-list > div > div:nth-child(3)')
        let banner2 = await page.$('#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-list > div > div:nth-child(4)')
        let banner3 = await page.$('#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-list > div > div:nth-child(5)')
        document.getElementsByName(banner).contains('.slick-slide.slick-active.slick-current')
        // await click(page, '.#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-arrow.slick-next')
        // await page.waitForSelector(banner1).contains('.slick-slide.slick-active.slick-current')
        // await click(page, '.#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-arrow.slick-next')
        // await page.waitForSelector(banner2).contains('.slick-slide.slick-active.slick-current')
        // await click(page, '.#root > div.carousel_container__w-zAD > div.utils_desktop__2aNwE > div > div > div.slick-arrow.slick-next')
        // await page.waitForSelector(banner3).contains('.slick-slide.slick-active.slick-current')
    }
    async checkCarouselIsDisplayed() {
        await page.$('.carousel_box__2Sjsr')
    }
}