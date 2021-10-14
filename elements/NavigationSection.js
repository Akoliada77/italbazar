const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import { PageEmittedEvents } from 'puppeteer'
import MainPage from '../pages/MainPage'

let mainpage

mainpage = new MainPage()

export default class NavigationSection {
    async checkNavigationSectionIsDisplayed() {
        await page.$('.sections_navigation_desktop_container__WVAbf')
    }
}