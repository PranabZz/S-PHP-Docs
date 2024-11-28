# Defining Routes in S-PHP

In S-PHP, routes are defined using the `Router` class, which is responsible for mapping URL paths to controller actions. Routes can be configured with HTTP methods (GET, POST, etc.), controllers, controller methods, and middleware.

Here’s an explanation of how routes are defined and how they work in your S-PHP project.

## Example of Defining Routes

```php
<?php

use App\Middleware\Middleware;
use App\Middleware\GuestMiddleware;
use App\Core\Router;
use App\Controllers\HomeController;
use App\Controllers\Auth\LoginController;

$router = new Router();

// Define GET routes
$router->get('/home', HomeController::class, 'index', Middleware::class);
$router->get('/', HomeController::class, 'index', Middleware::class);
$router->get('/login', LoginController::class, 'index' ,GuestMiddleware::class);

// Define POST routes
$router->post('/login', LoginController::class, 'login');
$router->post('/logout', LoginController::class, 'logout');
$router->post('/create', HomeController::class, 'create');
$router->post('/update/{id}', HomeController::class, 'update');
$router->post('/delete/{id}', HomeController::class, 'delete');

// Define dynamic routes with parameters
$router->get('/edit/{id}', HomeController::class, 'edit');

// Dispatch the router to handle requests
$router->dispatch();
``` 
<br/>

--- 

<br/>

# Explanation of Route Definition


### HTTP Methods:

`get()` is used for defining routes that handle GET requests.
`post()` is used for defining routes that handle POST requests.
You can define other HTTP methods like PUT or DELETE as needed by replacing `get()` and `post()` accordingly.
Path: The first argument is the URL path (e.g., /home, /login, /edit/{id}). Paths can also include dynamic parameters, such as {id}, which can be accessed in the controller.

`Controller and Method:` The second and third arguments specify the controller and method to call when the route is matched. For example, HomeController::class refers to the HomeController, and 'index' specifies the index() method within that controller.

`Middleware:` The optional fourth argument specifies the middleware to apply to the route. Middleware acts as a filter before the request is passed to the controller method. In this example:

> Middleware::class is applied to the /home and / routes.GuestMiddleware::class is applied to the /login route to ensure that guests (unauthenticated users) can access the login page. Dynamic Route Parameters: Some routes may contain dynamic parameters, such as /edit/{id}, where {id} is a placeholder for an actual value. These values are passed to the controller method when the route is matched.

## Handling the Request
After defining all the routes, the dispatch() method is called to process the incoming request. This method checks the requested URL and matches it with the defined routes. If a match is found, it executes the corresponding controller method.