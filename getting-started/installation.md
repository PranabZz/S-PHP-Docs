# Installation

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/PranabZz/S-PHP.git
```

### 2. Install Dependencies (Optional)

If you wish to use Composer to manage dependencies, run the following:

```bash
composer install
```
### Project Structure

```bash
S-PHP/
│
├── app/
│   ├── Controllers/
│   ├── Models/
│   └── Views/
│
├── public/
│   └── index.php       # Entry point for the application
│
├── routes/
│   └── web.php         # Defines routes for the application
│
└── .gitignore
```

## Usage

### Create a New Controller

To create a new controller, simply create a new file in the app/Controllers directory:

```php
<?php

namespace App\Controllers;

class HomeController
{
    public function index()
    {
        echo "Welcome to S-PHP!";
    }
}

```

### Define a New Routes

To create a new routes, simply add to the web.php file in the app/router/web.php directory:

```php
<?php

use App\Core\Router;
use App\Controllers\HomeController;

$router = new Router();

$router->get('/home', HomeController::class, 'index');

$router->dispatch();  
```

> **Info:**  
> $route->dispatch() is a must !