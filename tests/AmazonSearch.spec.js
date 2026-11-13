import {test,expect} from '@playwright/test'

test('URL Validation', async({page})=>
{
    await page.goto("https://www.amazon.in/");
    const srch=page.locator("#twotabsearchtextbox")
    await srch.fill("Samsung phones")
    for(let i=1;i<=7;i++)
    {
        await page.keyboard.press("Shift+ArrowLeft");
    }
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000)
    console.log(page.url());
    await expect(page).toHaveURL(/Samsung/)
    //await expect(page).toHaveURL(/.*Samsung*/i) i for case- insensitive check
    await page.waitForTimeout(3000)

})