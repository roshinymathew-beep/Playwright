import { test,expect } from "@playwright/test";

import { KerProp } from "../../Pages/KerProp";

test("KPloginTest", async({page})=>
{
    await page.goto('https://keralaproperty.in/member/login/');
    const login=new KerProp(page);
    await login.setValues("abc@gmail.com","Abc123");
    await login.loginClick();
    await page.waitForTimeout(2000);
})