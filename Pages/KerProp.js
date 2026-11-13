export class KerProp
{
    constructor(page)
    {
        this.userfield=page.locator("#ulogin")
        this.passwordfield=page.locator("#upass")
        this.loginbutton=page.locator("#sub_logbtn")
    }

    async setValues(username,password)
    {
        await this.userfield.fill(username);
        await this.passwordfield.fill(password);
    }
    async loginClick()
    {
        await this.loginbutton.click();
    }
    
}