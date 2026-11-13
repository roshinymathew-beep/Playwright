import {test,expect} from '@playwright/test'

test('Dropdown', async({page})=>
{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    let day=page.locator("select[class='day']")
    await day.selectOption("05");
    await page.waitForTimeout(3000)
    let month=page.locator("select[class='middle month']")
    await month.selectOption({label:"JUN"});
    await page.waitForTimeout(3000)
    let yr=page.locator("select[class='year']")
    await yr.selectOption({index:4})

    await page.waitForTimeout(3000)


})