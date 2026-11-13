import {test,expect} from '@playwright/test'

test('ScreenShot',async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(2000)
    const srchbox=page.locator("#twotabsearchtextbox")
    await srchbox.screenshot({path:".//Screenshot//elmnt.png"})
    await page.screenshot({path:".//Screenshot//page.png"})
})