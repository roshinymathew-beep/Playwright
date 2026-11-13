import {expect} from '@playwright/test'
export class SauceDemo
{
    constructor(page)
    {
        this.usernamefield=page.locator("#user-name")
        this.passwordfield=page.locator("#password")
        this.loginbutton=page.locator("#login-button")
    }

    async setValues(username,password)
    {
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
    }

    async loginClick()
    {
        await this.loginbutton.click();
    }

    async urlValidation(page)
    {
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }


    
}