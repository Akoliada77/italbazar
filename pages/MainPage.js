import { waitForText, shouldNotExist, click, getText, getCount, typeText, selectText } from "../lib/helpers"
import { generateID, generateEmail } from "../lib/utils"


export default class HomePage {
    async visit() {
        await page.goto("https://www.staging.italbazar.ru")
        await page.waitForSelector(".carousel_container__w-zAD")
        await page.waitForSelector(".middle_header_navBlock__V7lVb")
    }
    async 
}