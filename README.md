# 🎯 BitMascot SQA Engineer Assessment – Playwright Automation

This repository contains the **automation solution** for the BitMascot SQA Engineer Assessment.  
The test scenario is automated using **Playwright** in **JavaScript** following the **Page Object Model (POM)** design pattern.

---

## 📝 Scenario Automated

1. User logs in with valid credentials (`standard_user` / `secret_sauce`).  
2. Adds one product to the cart.  
3. Verifies the product name in the cart.  
4. Logs out.

---

## 📂 Project Structure
/tests<br>
loginPage.js # Page Object for login page<br>
productsPage.js # Page Object for products page<br>
cartPage.js # Page Object for cart page<br>
logoutPage.js # Page Object for logout<br>
addToCart.spec.js # Test script<br>
playwright.config.js # Playwright configuration<br>
package.json # Project configuration<br>
README.md # This file<br>
## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/arshuhag/BitMascot-Assessment.git
cd BitMascot-Assessment
```
### 2. Install dependencies
```bash
npm install
npx playwright install
```
### 3. Run tests
```bash
npx playwright test
```
### 4. View HTML report
```bash
npx playwright show-report
```
### 🧪 Test Details

Framework: Playwright Test

Design pattern: Page Object Model (POM)

Browser: Chromium (default, can be changed in playwright.config.js)

Delay: 2 seconds after each step for demonstration purposes

### 🔑 Credentials Used
Username: standard_user<br>
Password:	secret_sauce<br>
