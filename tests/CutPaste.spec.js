import {test,expect} from '@playwright/test'

test('Cut Paste', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    const fname= await page.getByPlaceholder("Enter your full name");
    //fname.click();
    await fname.fill("Roshiny Mathew");
    await page.keyboard.down("Shift");
    for(let i=1;i<=6;i++)
    {
        await page.keyboard.press("ArrowLeft");
    }
    await page.keyboard.up("Shift");
    await page.waitForTimeout(3000)
    await page.keyboard.press("Control+X");
    /* await page.keyboard.press("Control+C");
    await page.keyboard.press("Backspace");*/
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(3000)
})