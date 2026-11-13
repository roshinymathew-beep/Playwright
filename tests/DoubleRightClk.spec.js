import {test,expect} from '@playwright/test'

test('Dblclk and RightClk', async({page})=>
{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    await page.locator("//*[@id='authentication']/button").dblclick();
    await page.waitForTimeout(2000)

    await page.locator("//*[@id='authentication']/span").click({button:'right'})
    await page.waitForTimeout(2000)
})