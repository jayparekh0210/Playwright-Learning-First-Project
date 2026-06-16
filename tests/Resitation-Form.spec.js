import { test } from '@playwright/test';
import { REGISTATION_FORM_URL } from "../constants/url-constants"

test('Registation Form Application', async ({ page }) => {
  await page.goto(REGISTATION_FORM_URL);
  
  //Name
  await page.getByRole('textbox', { name: 'First Name' }).fill('Jay');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Parekh');
  
  //Address
  await page.locator('textarea').fill('Test Address');
  
  //Email
  await page.locator('input[type="email"]').fill('jay@playwright.com');
  
  //Telephone
  await page.locator('input[type="tel"]').fill('9908948662');

  //gender
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  
    //Langauge
    await page.locator('#msdd').click();
    await page.getByText('Hindi').click();

  //Hooby
  await page.locator("input[value='Cricket']").check();
  await page.locator("input[value='Movies']").check();

  //Skills
  await page.locator('#Skills').selectOption('Java');
  
  //Country
  await page.locator("span[role=combobox]").click()
  await page.locator("//li[text()='India']").click()

  //dob
  await page.locator('#yearbox').selectOption('1998');
  await page.getByPlaceholder("Month").selectOption('October');
  await page.locator('#daybox').selectOption('2');

  //password  
  await page.locator('#firstpassword').fill('Test');
  await page.locator('#secondpassword').fill('Test');

  await page.getByRole('button', { name: 'Submit' }).click();
});