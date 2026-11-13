import {test,expect} from '@playwright/test'

test('Multiple Files Upload', async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#multipleFilesInput").setInputFiles(['D:/empty.pdf','D:\wordtest.docx']);
   //uploadbtn.setInputFiles("D:/empty.pdf")
   await page.waitForTimeout(2000)
   await page.locator("//*[@id='multipleFilesForm']/button").click();
    await page.waitForTimeout(2000)
})   