class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]'); // example product
        this.cartIcon = page.locator('.shopping_cart_link');
        this.productName = page.locator('.inventory_item_name');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async getProductName() {
        return await this.productName.textContent();
    }
}

module.exports = ProductsPage;
