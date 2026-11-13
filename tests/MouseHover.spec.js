import {test,expect} from '@playwright/test'

test('Hover', async({page})=>
{
    await page.goto("https://www.ebay.com/");
    await page.locator("//*[@id='vl-flyout-nav']/ul/li[4]/a/span").hover();
    await page.locator('//*[@id="vl-flyout-nav"]/ul/li[4]/div[2]/div[1]/nav[1]/ul/li[3]/a').click();
    await page.waitForTimeout(3000)
})