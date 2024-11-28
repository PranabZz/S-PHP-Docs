# S-PHP Directory Structure

The directory structure for S-PHP is organized into various folders for easier development and maintenance. Below is the structure of the S-PHP framework:

### Explanation:

- **`app`**: This is the core folder where all your framework’s business logic resides. It is divided into subfolders like `config` (for configuration files), `controllers` (for handling HTTP requests), `core` (core functionalities like database, router, etc.), `middleware` (for managing the flow of requests), `models` (defining the data structure), `router` (routing logic), `services` (handling core business logic), and `views` (UI templates).
  
- **`composer.json` & `composer.lock`**: These files are used for managing the dependencies of the project with Composer.

- **`public`**: The public folder houses static files like assets (images, fonts), CSS, JavaScript, and other resources that can be accessed directly from the browser.

- **`vendor`**: This folder contains Composer’s autoload files and any external dependencies that the project relies on.

This directory structure should give developers a clear view of how the S-PHP framework is organized, making it easier for them to understand and work with the framework.


```bash
S-PHP
├── app
│   ├── config
│   │   └── config.php
│   ├── controllers
│   │   ├── Auth
│   │   │   ├── LoginController.php
│   │   │   └── RegisterController.php
│   │   ├── Controller.php
│   │   └── HomeController.php
│   ├── core
│   │   ├── Database.php
│   │   ├── Models.php
│   │   ├── Request.php
│   │   ├── Response.php
│   │   ├── Router.php
│   │   └── View.php
│   ├── middleware
│   │   ├── GuestMiddleware.php
│   │   └── Middleware.php
│   ├── models
│   │   └── User.php
│   ├── router
│   │   ├── api.php
│   │   └── web.php
│   ├── services
│   │   └── Auth.php
│   └── views
│       ├── edit.php
│       ├── index.php
│       ├── login.php
│       └── test.php
├── composer.json
├── composer.lock
├── error.html
├── function.php
├── index.php
├── logo.png
├── public
│   ├── assets
│   ├── css
│   ├── img
│   └── js
├── README.md
├── src
└── vendor
    ├── autoload.php
    └── composer
```