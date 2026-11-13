import {test,expect} from '@playwright/test'

test('File Upload', async({page})=>
{
    await page.goto("https://demo.automationtesting.in/FileUpload.html");
    await page.locator("#input-4").setInputFiles("D:/empty.pdf")
   //uploadbtn.setInputFiles("D:/empty.pdf")
   await page.waitForTimeout(2000)
   await page.locator("/html/body/section/div[1]/div/div/div[1]/button[3]/span").click();
    await page.waitForTimeout(2000)
})   