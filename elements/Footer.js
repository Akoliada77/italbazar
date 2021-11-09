const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class Footer {
    async isFooterDisplayed(){
        expect(await isElementVisible('.desktop_footer_container__1Zl5k')).to.be.true
    }
    async areFooterContacsDisplayed(){ 
        expect(await isElementVisible('.desktop_footer_contacts__3PN_G')).to.be.true
    }
    async isFooterCatalogDisplayed(){
        expect(await isElementVisible('.desktop_footer_catalog__3cusD')).to.be.true
    }
    async isFooterHelpfulInfoDisplayed(){
        expect(await isElementVisible('.desktop_footer_helpfulInfo__1_UWT')).to.be.true
    }
    async checkTitleOfFooterSections(){
        expect(await getText(page,'#root > div.footer_container__3aq8W > div.utils_desktop__2aNwE > div.desktop_footer_container__1Zl5k > div.page_layout_container__2vfVI > div > div.desktop_footer_contacts__3PN_G > div.desktop_footer_title__2EXlf')).to.eq('Контакты')
        expect(await getText(page, '#root > div.footer_container__3aq8W > div.utils_desktop__2aNwE > div.desktop_footer_container__1Zl5k > div.page_layout_container__2vfVI > div > div.desktop_footer_catalog__3cusD > div.desktop_footer_title__2EXlf')).to.eq('Каталог')
        expect(await getText(page, '#root > div.footer_container__3aq8W > div.utils_desktop__2aNwE > div.desktop_footer_container__1Zl5k > div.page_layout_container__2vfVI > div > div.desktop_footer_helpfulInfo__1_UWT > div.desktop_footer_title__2EXlf')).to.eq('Полезная информация')
    }
}
