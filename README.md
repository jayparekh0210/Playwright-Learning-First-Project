# 🎭 Playwright Learning - First Project

A beginner-friendly project to learn and explore **Playwright**, a modern end-to-end testing framework for web applications.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Resources](#resources)

---

## 🎯 Overview

This project serves as a learning resource for understanding:
- ✅ Writing automated tests with **Playwright**
- ✅ Test configuration and setup
- ✅ Browser automation basics
- ✅ Best practices in end-to-end testing

**Tech Stack:**
- **Playwright v1.61.0** - Modern E2E Testing Framework
- **Node.js** - JavaScript Runtime
- **CommonJS** - Module System

---

## 📦 Prerequisites

Before you get started, ensure you have:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jayparekh0210/Playwright-Learning-First-Project.git
   cd Playwright-Learning-First-Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## 📁 Project Structure

```
Playwright-Learning-First-Project/
├── tests/                    # Test files directory
├── constants/                # Constant variables & configurations
├── playwright.config.js      # Playwright configuration file
├── package.json              # Project metadata & dependencies
├── package-lock.json         # Locked dependency versions
└── README.md                 # This file
```

### Directories:
- **`tests/`** - Contains all test files (.spec.js)
- **`constants/`** - Stores reusable constants and utility functions

---

## ⚙️ Configuration

### `playwright.config.js`

The configuration file includes:

| Setting | Details |
|---------|---------|
| **Test Directory** | `./tests` |
| **Parallel Execution** | ✅ Enabled by default |
| **Browser** | Chromium (headless: false) |
| **Reporter** | HTML report generation |
| **Trace** | Enabled on first retry |
| **CI/CD Ready** | Optimized for CI environments |

**Key Features:**
- Tests run in parallel for faster execution
- HTML reports for visual test results
- Trace recording for debugging failed tests
- CI-specific configurations for GitHub Actions, GitLab CI, etc.

---

## 🏃 Getting Started

### 1. Create Your First Test

Create a file `tests/example.spec.js`:

```javascript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBeTruthy();
});
```

### 2. Run the Test

```bash
npx playwright test
```

### 3. View HTML Report

```bash
npx playwright show-report
```

---

## 📊 Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in a specific file:
```bash
npx playwright test tests/example.spec.js
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

### Run tests for specific browser:
```bash
npx playwright test --project=chromium
```

### Open test reporter:
```bash
npx playwright show-report
```

---

## 📚 Resources

### Official Documentation
- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Test Guide](https://playwright.dev/docs/intro)

### Learning Materials
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Selectors Guide](https://playwright.dev/docs/locators)
- [Debugging Tests](https://playwright.dev/docs/debug)
- [Test Reports](https://playwright.dev/docs/test-reporters)

### Community
- [Playwright GitHub](https://github.com/microsoft/playwright)
- [Stack Overflow - Playwright Tag](https://stackoverflow.com/questions/tagged/playwright)

---

## 💡 Tips for Success

1. **Start Simple** - Begin with basic navigation and assertions
2. **Use Locators** - Prefer modern locators over CSS/XPath selectors
3. **Wait Properly** - Use Playwright's built-in waiting mechanisms
4. **Debug Efficiently** - Use the debug mode and trace viewer
5. **Organize Tests** - Group related tests in separate files
6. **Reuse Code** - Create fixtures for common test setup

---

## 🔗 Quick Links

- [View on GitHub](https://github.com/jayparekh0210/Playwright-Learning-First-Project)
- [Playwright Official Site](https://playwright.dev/)

---

## 📝 License

This project is licensed under the ISC License - see the `package.json` file for details.

---

## 🎓 Happy Testing! 🚀

Feel free to explore, experiment, and build upon this foundation. Happy learning! 

**Questions or Issues?** Feel free to open an issue on GitHub or check the Playwright documentation.

---

**Last Updated:** June 2026
