const { test, expect } = require('@playwright/test');
const LoginPage = require('./loginPage');
const ProductsPage = require('./productsPage');
const CartPage = require('./cartPage');
const LogoutPage = require('./logoutPage');

test('User can login, add product to cart, verify, and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const logoutPage = new LogoutPage(page);

    // Step 1: Go to login page
    await loginPage.goto();
    await page.waitForTimeout(2000); // 5s delay

    // Step 2: Login
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000); // 5s delay

    // Step 3: Add product to cart
    await productsPage.addProductToCart();
    await page.waitForTimeout(2000); // 5s delay

    // Step 4: Go to cart
    await productsPage.goToCart();
    await page.waitForTimeout(2000); // 5s delay

    // Step 5: Verify product
    const cartProductName = await cartPage.getCartProductName();
    expect(cartProductName).toBe('Sauce Labs Backpack');
    await page.waitForTimeout(2000); // 5s delay

    // Step 6: Logout
    await logoutPage.logout();
    await page.waitForTimeout(2000); // 5s delay
});
