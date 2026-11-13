import {test,expect} from '@playwright/test'

import data from '../DataDrivenjson/KPdata.json'  //data is a userdefined variable to access data from json file

test('DataDriven',async({page})=>
{
    await page.goto("https://keralaproperty.in/member/login/");
    await page.locator("#ulogin").fill(data.email);
    await page.locator("#upass").fill(data.password);
    await page.locator("#sub_logbtn").click();
})
