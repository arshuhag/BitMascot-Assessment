BitMascot SQA Engineer Assessment – Playwright Automation
Project Overview

This repository contains the automation solution for the BitMascot SQA Engineer Assessment.
The test scenario is automated using Playwright in JavaScript following the Page Object Model (POM) design pattern.

Scenario Automated:

User logs in with valid credentials (standard_user / secret_sauce).

Adds one product to the cart.

Verifies the product name in the cart.

Logs out.

Project Structure
/tests
  loginPage.js       # Page Object for login page
  productsPage.js    # Page Object for products page
  cartPage.js        # Page Object for cart page
  logoutPage.js      # Page Object for logout
  addToCart.spec.js  # Test script
playwright.config.js # Playwright configuration
package.json         # Project configuration
README.md            # This file

Setup Instructions

Clone the repository

git clone https://github.com/arshuhag/BitMascot-Assessment.git
cd BitMascot-Assessment


Install dependencies

npm install
npx playwright install


Run tests

npx playwright test


View HTML report

npx playwright show-report

Test Details

Test framework: Playwright Test

Design pattern: Page Object Model (POM)

Browser: Chromium (default, can be changed in playwright.config.js)

Delays: 5 seconds after each step for demonstration purposes

Credentials Used

Username: standard_user

Password: secret_sauce

Notes

The project is designed for the public demo site https://www.saucedemo.com
.

.gitignore is configured to exclude node_modules/ and playwright-report/.
