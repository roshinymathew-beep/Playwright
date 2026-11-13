import {test,expect} from '@playwright/test'

test('Drag and Drop', async({page})=>
{
    await page.goto("https://testautomationcentral.com/demo/drag_and_drop.html");
    const src= await page.locator("#draggable");
    const dest=await page.locator("#droppable");
    await src.dragTo(dest);
    await page.waitForTimeout(2000);

    const msg=await page.locator("#drop-message").textContent();
    console.log(msg);
    expect (msg).toBe("Dropped successfully!")

})

