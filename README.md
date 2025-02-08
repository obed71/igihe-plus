# IGIHE-PLUS

## 1. Overview

IGIHE-PLUS is a browser extension for [igihe.com](https://igihe.com/index.php) with the following features:

- Removing ads ✔
- Changing Theme ✔
- Bookmarking articles
- Analytics Dashboard

> **Note 1**: _This project is under development so, the latest version has only checked features._

> **Note 2**: _By default all features are disabled, so user has to enable which feature they need to use._

## 2. How to test it locally

There are different ways to run a browser extension depending on which browser you are using.

### Step 1: Clone repository

Open a terminal, command Prompt, PowerShell, or Git Bash. and navigate to the desired directory. Then run one of the following command:

- Using **https**

  ```bash
  git clone https://github.com/obed71/igihe-plus.git
  ```

- Using **ssh-key**

  ```bash
  git clone git@github.com:obed71/igihe-plus.git
  ```

> **Note 3:** _If you don't have git in your computer, just download a zip file._

### Step 2: Open a browser and run it

- For **Firefox** users:

  - Navigate to `about:debugging#/runtime/this-firefox`
  - Click on **Load temporary Add-on**.
  - Open the extension's directory and select _manifest.json_ file, or select the packaged extension (.zip file).

- For **Edge** and **Chrome** users: read [this post](https://cassidoo.co/post/test-browser-extensions/) by Cassidy Williams.

## 3. Contributing

We welcome contributions to IGIHE-PLUS! If you have an idea for a new feature or have found a bug, please open an issue on our [GitHub repository](https://github.com/obed71/igihe-plus/issues).

### How to contribute

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page.
2. **Clone your fork**: Clone your forked repository to your local machine.

```bash
git clone https://github.com/<your-username>/igihe-plus.git
```

3. **Create a new branch**: Create a new branch for your feature or bug fix.

```bash
git checkout -b my-feature-branch
```

4. **Make your changes**: Implement your feature or bug fix.
5. **Commit your changes**: Commit your changes with a descriptive commit message.

```bash
git commit -m "Add new feature: description"
```

6. **Push to your fork**: Push your changes to your forked repository.

```bash
git push origin my-feature-branch
```

7. **Open a pull request**: Go to the original repository and open a pull request with a description of your changes.

> **Note 4:** _Please ensure your code follows the project's coding standards and includes appropriate tests._

Thank you for contributing to IGIHE-PLUS!
