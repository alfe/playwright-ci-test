// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://alfebelow.com/');
  await expect(page).toHaveTitle(/alfebelow.com/);
});
