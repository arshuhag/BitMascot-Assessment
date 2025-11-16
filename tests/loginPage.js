class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Keep parameters so you can reuse the method
    async login(username, password) {
        await this.usernameInput.fill(username);  // <-- pass string from test
        await this.passwordInput.fill(password);  // <-- pass string from test
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
