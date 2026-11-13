import {test, expect} from '@playwright/test'

test('TitleVerf', async({page})=>{
    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
})

test('printtest', async()=>{
    console.log("Let's start")
}
)