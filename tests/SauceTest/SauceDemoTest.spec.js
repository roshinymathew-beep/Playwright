import {test,expect} from '@playwright/test'

import { SauceDemo } from '../../Pages/Saucedemo'

test('Sauce Test', async({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    const SLogin=new SauceDemo(page);
    await SLogin.setValues("standard_user","secret_sauce");
    await SLogin.loginClick();
    await page.waitForTimeout(2000);
    await SLogin.urlValidation(page);
})