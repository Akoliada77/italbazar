import { expect } from "chai"
const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')

export default class FavouritePage {
    async visit() { 
        await page.goto('https://www.staging.italbazar.ru/account/?targetScreen=favorite')
        expect(page,'')
    }
}