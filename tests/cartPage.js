class CartPage {
    constructor(page) {
        this.page = page;
        this.cartProductName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]'); // optional
    }

    async getCartProductName() {
        return await this.cartProductName.textContent();
    }
}

module.exports = CartPage;
