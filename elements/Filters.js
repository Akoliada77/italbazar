const { click, doubleClick, getCount, getText, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../lib/utils')
import { expect, use } from 'chai'
import CatalogPage from '../pages/CatalogPage'

let catalogpage

catalogpage = new CatalogPage()

export default class Filters {
    async filtersAreDisplayed() {
        expect(await isElementVisible('.desktop_page_sortingBox__2Yt-O')).to.be.true
    }
}