# Controllers in S-PHP

In the S-PHP framework, controllers play a key role in handling the logic of your application. They are responsible for processing incoming requests, interacting with models, and returning appropriate views or responses. Controllers serve as an intermediary between the model (data layer) and view (presentation layer).

## Role of a Controller

Controllers are designed to group related actions that respond to various user requests. For example, in a typical web application, the `HomeController` might handle requests related to the homepage, while an `AuthController` might manage authentication-related actions like login and registration.

Each method in a controller corresponds to a specific route and defines what should happen when that route is accessed.

### Key Responsibilities of Controllers:
- **Handle Requests**: Controllers process incoming requests and gather necessary data to respond with.
- **Interact with Models**: Controllers often retrieve data from models and pass it to views.
- **Return Responses**: Controllers return views, JSON data, or redirects to the user based on the request.

---

## Controller Structure

Controllers are typically organized within the `app/controllers` directory. Each controller is usually a class, and the methods within that class represent actions that can be performed based on the route matched.

For example, a `HomeController` could look like this:

```php
<?php

namespace App\Controllers;

use App\Core\Request;
use App\Core\View;
use App\Models\User;

class HomeController
{
    public function index()
    {
        $user = new User();
        $data = $user->select(['id', 'username']);
        View::render('test.php', $data);
    }

    public function create()
    {
        $user = new User();
        $req = new Request();
        $request = $req->request();
        
        $user->create($request);
        redirect('/');
    }

    public function edit($id)
    {
        $user = new User();
        $data = $user->findByID($id);
        View::render('edit.php', $data);
    }

    public function update($id)
    {
        $user = new User();
        $req = new Request();
        $request = $req->request();
        
        $user->update($request, $id);
        redirect('/');
    }

    public function delete($id)
    {
        $user = new User();
        $user->delete($id);
        redirect('/');
    }
}
``` 

## Breakdown of Methods

- `index():` The main method that retrieves data and loads a view.
- `create():` Handles form submissions, processes data, and creates new records in the database.
- `edit($id):` Retrieves a record by its ID and prepares it for editing.
- `update($id):` Updates an existing record in the database.
- `delete($id):` Deletes a record based on its ID.


## Passing Data to Views

In S-PHP, controllers pass data to views using the View::render() method. The data passed to the view can be an array, which the view will use to display dynamic content.

For example, in the index() method:

``` php
View::render('test.php', $data);
```