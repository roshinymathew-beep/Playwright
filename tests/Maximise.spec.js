import {test} from '@playwright/test'

//test.use({viewport:{width:1366,height:633}})
test('Screen Maximise',async({page})=>
{
    console.log(page.viewportSize().width);
    console.log(page.viewportSize().height)
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000)
})