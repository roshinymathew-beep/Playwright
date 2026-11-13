import {test, expect} from '@playwright/test'

test('fblogin', async({page})=>
{
    await page.goto("https://www.facebook.com/")
    const tit=await page.title();
    console.log(tit);

    //getByRole
    await page.getByRole('textbox',{name:'Email address or mobile number'}).fill("abc@gmail.com")
    //await page.getByRole('textbox',{name:"Password"}).type("abc123");
    //await page.getByPlaceholder("Password").type("abc123"); //getByPlaceHolder
    await page.locator("#pass").fill("abc123")
    await page.getByRole('button',{name:'Log in'}).click();
    await page.waitForTimeout(3000);
})