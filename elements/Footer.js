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
}