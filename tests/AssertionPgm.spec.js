import {expect,test} from '@playwright/test'


test.beforeEach(async({page})=>
{
     await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
})
test('Title Verf', async({page})=>
{
   // await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    /*const ttl=await page.title();
    console.log(ttl);*/
    await expect(page).toHaveTitle("Rediff")
})

test('Button Disabled',async({page})=>
{
   // await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    await expect(page.locator('#Register')).toBeDisabled();
})

test("Fname Editable", async({page})=>
{
    await expect(page.getByPlaceholder("Enter your full name")).toBeEditable();
})

test.only("Logo", async({page})=>
{
    await expect(page.getByAltText("Rediffmail")).toBeVisible();
    //await expect(page.getByTitle("Rediffmail")).toBeVisible();
})