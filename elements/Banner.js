const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
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
}