# Middleware in S-PHP

Middleware in S-PHP provides a convenient mechanism for filtering HTTP requests entering your application. Middleware functions as an intermediary between the request and the controller, allowing you to perform tasks such as authentication, logging, or validation before the request reaches the actual controller logic.

## What is Middleware?

Middleware is a class that handles HTTP requests before they reach the controller. It acts as a filter, intercepting requests to verify certain conditions are met (e.g., user authentication, access control), and either allowing the request to proceed or halting it with an appropriate response.

## Creating Middleware

In S-PHP, middleware is typically stored in the `app/middleware` directory. Here's how a simple `Middleware` class is defined:

```php
<?php

namespace App\Middleware;
use App\Core\Response; // PHP cannot support multiple class inheritance, so we use namespaces

class Middleware
{
    // Handle the request, checking if the user is authenticated
    public function handle()
    {
        if (!$this->auth()) {
            return false;
        }
        return true;
    }

    // Authentication check
    public function auth()
    {
        // Check if user session is available
        if (!$_SESSION['user']) {
            return false;
        }
        return true;
    }
}
``` 

## Key Components:

- `handle():` The main method that will be called to handle the incoming request. If the authentication check fails, it returns false, effectively blocking the request.
- `auth():` A helper method that checks if the session contains a valid user. 

> If the session does not have a user, the request is denied.In this example, the middleware is used to check if the user is authenticated before allowing access to certain routes. If the user is not authenticated (i.e., no $_SESSION['user']), the middleware returns false, which can prevent further processing.

### Using Middleware in Routes

Once you have created your middleware, you can apply it to specific routes to protect them from unauthorized access.

In your routes.php or equivalent file, you can specify which middleware should be applied to specific routes. For example:

``` php

$router->get('/home', HomeController::class, 'index', Middleware::class); // This line will call the handle() method of the Middleware class when a request is made to the /home route. If the auth() method in Middleware returns false, the request will be blocked, and the user will be denied access.
```
<br/>

---

<br/>

# Benefits of Middleware

### Middleware offers several advantages:

- `Separation of concerns:` It allows you to separate the logic for authentication, logging, and other tasks from the controller.
- `Reusability:` Middleware can be reused across multiple routes or controllers, making your code more modular and easier to maintain.
Control over request flow: Middleware gives you more control over the flow of requests in your application, allowing you to stop or modify the request before it reaches the controller.

### Example Use Cases for Middleware
- `Authentication:` Check if a user is logged in before they can access certain pages or resources.
- `Authorization:` Verify if the logged-in user has permission to access the requested resource.
- `Logging:` Log the details of requests made to certain routes for auditing purposes.
- `Input Validation:` Validate request data before processing it in the controller.


### Conclusion

Middleware in S-PHP provides a powerful and flexible way to filter HTTP requests and ensure that certain conditions are met before a request is passed to the controller. By using middleware, you can centralize common functionality like authentication and authorization, leading to cleaner and more maintainable code.

For advanced middleware functionality, you can create custom methods and chain multiple middleware classes together to perform complex request processing.