import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("displays a correct page title", async ({ page }) => {
  await expect(page).toHaveTitle("Home | Vite React Template");
});
