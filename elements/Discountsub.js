const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class Discountsub {
    async isDiscountSubDisplayed() {
        expect(await isElementVisible('.desktop_form_block__Nh0zf')).to.be.true
    }
    async checkTitleOfSection() {
        expect(await getText(page,'.desktop_form_title__1A4Xy')).to.eq('Подпишитесь на скидки')
    }
    async checkCheckBoxesOfSection() {
        expect(await getCount(page,'.desktop_form_checkboxText__8CBC-')).to.eq(3)
        await click(page,'#root > div:nth-child(17) > div > div > div.desktop_form_block__Nh0zf > form > div > div.desktop_form_checkboxes__gLVqA > div:nth-child(1) > label > span')
        expect(await getCount(page,'.desktop_form_checkboxText__8CBC-')).to.eq(2)
        await click(page,'#root > div:nth-child(17) > div > div > div.desktop_form_block__Nh0zf > form > div > div.desktop_form_checkboxes__gLVqA > div:nth-child(2) > label > span')
        expect(await getCount(page,'.desktop_form_checkboxText__8CBC-')).to.eq(1)
        await click(page,'#root > div:nth-child(17) > div > div > div.desktop_form_block__Nh0zf > form > div > div.desktop_form_checkboxes__gLVqA > div:nth-child(3) > label > span')
        expect(await getCount(page,'.desktop_form_checkboxText__8CBC-')).to.eq(0)
    }
}