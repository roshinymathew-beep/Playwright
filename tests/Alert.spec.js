import {test,expect} from '@playwright/test'

test.beforeEach(async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
})
test('Simple Alert', async({page})=>
{
    page.on('dialog',async dialog=>
    {
        expect(dialog.type()).toContain("alert")
        await expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    await page.waitForTimeout(2000)
    await page.getByRole("button",{name:"click the button to display an  alert box:"}).click();
})   
test('Confirmation Alert', async({page})=>
{
    await page.getByRole("link",{name:"Alert with OK & Cancel"}).click();
 
    page.on('dialog',async dialog=>
    {
        expect(dialog.type()).toBe("confirm")
        await expect(dialog.message()).toContain("Press a Button !");
        await dialog.accept();
        //dialog.dismiss();
    })
        await page.waitForTimeout(2000)
        await page.getByRole("button",{name:"click the button to display a confirm box"}).click();
})   
test.only('Prompt Alert', async({page})=>
{
    let inputvalue="abc";
    await page.getByRole("link",{name:"Alert with Textbox"}).click();
    
    page.on('dialog',async dialog=>
    {
        if(dialog.type()==="prompt")
        {
        expect(dialog.message()).toContain("Please enter your name");
        dialog.accept(inputvalue);
        //dialog.dismiss();
        }
    })
        await page.getByRole("button",{name:"click the button to demonstrate the prompt box"}).click();
        await expect(page.locator("#demo1")).toHaveText('Hello $inputvalue How are you today') 
})   