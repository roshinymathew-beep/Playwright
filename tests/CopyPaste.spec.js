import {test,expect} from '@playwright/test'

test('Copy Paste', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    const fname= await page.getByPlaceholder("Enter your full name");
    //fname.click();
    await fname.fill("Roshiny Mathew");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(3000)
})