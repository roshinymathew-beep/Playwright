import {test,expect} from '@playwright/test'

import testdata from '../Util/Multiplejsondata.json'  //testdata is a userdefined variable to access data from json file

test.describe("login test",()=>
{
    for(const data of testdata)
    {
        test(`DataDrivenMultiple test with ${data.email}`,async({page})=>
{
    await page.goto("https://keralaproperty.in/member/login/");
    await page.locator("#ulogin").fill(data.email);
    await page.locator("#upass").fill(data.password);
    await page.locator("#sub_logbtn").click();
})
    }
})
