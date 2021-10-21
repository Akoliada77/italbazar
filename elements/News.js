const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class News {
    async newsAreDisplayed() {
        expect(await isElementVisible('.undefined.shop-news-carousel.slider-with-round-arrows')).to.be.true
        expect(await isElementVisible('.desktop_news_title__1d0qY')).to.be.true
    }
    async checkTitleOfSections() {
        expect(await getText(page, '.desktop_news_title__1d0qY')).to.equal('Новости')
    }
    async checkButtonMoreNews() {
        expect(await isElementVisible('#root > div:nth-child(14) > div > div > div:nth-child(1) > div.desktop_news_button__1yXTL > a > div')).to.be.true
        await click(page, '#root > div:nth-child(14) > div > div > div:nth-child(1) > div.desktop_news_button__1yXTL > a > div > span:nth-child(1)')
        await page.waitForSelector('.news_page_newsBox__26fpM')
        expect(page.url()).to.equal('https://www.staging.italbazar.ru/news/')
    }
    async checkTransitionToNews() {
        const title = await getText(page, '#root > div:nth-child(14) > div > div > div.undefined.shop-news-carousel.slider-with-round-arrows > div > div > div > div.slick-slide.slick-active.slick-current > div > a:nth-child(1) > div > div.news_slider_title__PcclQ')
        await click(page, '#root > div:nth-child(14) > div > div > div.undefined.shop-news-carousel.slider-with-round-arrows > div > div > div > div.slick-slide.slick-active.slick-current > div > a:nth-child(1) > div > div.news_slider_image__GGTyl')
        expect(await isElementVisible('.news_big_post_container__sJU9e')).to.be.true
        expect(await getText(page, '.news_big_post_title__1eODi')).to.eq(title)
        expect(await getText(page, '#root > div.page_layout_container__2vfVI > div > div.news_big_post_contentBox__3vh1s > div.news_big_post_nav__3p4tt > div > span:nth-child(3) > a')).to.equal(title)
    }
    async checkThat3NewsAreDisplayed() {
        await getCount(page, '')
    }
}