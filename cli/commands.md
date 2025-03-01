# CLI Command Handler

S-PHP provides a command-line interface (CLI) for managing file creation, running server processes, and performing other common tasks.

## Available Commands

### System Commands

- **php do up**
  
  Starts the PHP built-in server at `localhost:8000`.

  **Usage:**
  ```bash
  php do up
  ```

- **php do work**
  
  Runs the job worker using the `php work` command.

  **Usage:**
  ```bash
  php do work
  ```

### File Creation Commands

- **php do views [name]**
  
  Creates a new view file in the `app/views/` directory with the provided name. The file will contain a basic HTML template.

  **Usage:**
  ```bash
  php do views home/index
  ```
  This will create a new file `app/views/home/index.php` with a simple template like:
  ```php
  <!-- View File: index -->
  ```

- **php do controller [name]**
  
  Creates a new controller class in the `app/controllers/` directory. The class will extend the base controller class `App\Controllers\Controller`.

  **Usage:**
  ```bash
  php do controller User
  ```
  This will create a new controller file `app/controllers/User.php` containing a class like:
  ```php
  <?php
  
  namespace App\Controllers;
  
  use App\Controllers\Controller;
  
  class User extends Controller
  {
      // TODO: Implement Controller functionality
  }
  ```

- **php do middleware [name]**
  
  Creates a new middleware class in the `app/middleware/` directory. The class will extend the base middleware class `App\Middleware\Middleware`.

  **Usage:**
  ```bash
  php do middleware CheckAuth
  ```
  This will create a new middleware file `app/middleware/CheckAuth.php` containing a class like:
  ```php
  <?php
  
  namespace App\Middleware;
  
  use App\Middleware\Middleware;
  
  class CheckAuth extends Middleware
  {
      // TODO: Implement Middleware functionality
  }
  ```

- **php do model [name]**
  
  Creates a new model class in the `app/models/` directory. The class will extend the base model class `App\Core\Models`.

  **Usage:**
  ```bash
  php do model User
  ```
  This will create a new model file `app/models/User.php` containing a class like:
  ```php
  <?php
  
  namespace App\Models;
  
  use App\Core\Models;
  
  class User extends Model
  {
      // TODO: Implement Model functionality
  }
  ```

### Other Commands

- **php do help**
  
  Displays the list of available commands and how to use them.

  **Usage:**
  ```bash
  php do help
  ```

## How to Use

To use these commands, simply open your terminal, navigate to the root directory of your project, and run any of the available commands with the `php do` prefix.

### Examples:

1. **Start the built-in PHP server:**
   ```bash
   php do up
   ```

2. **Create a new controller named `User`:**
   ```bash
   php do controller User
   ```

3. **Create a new middleware named `CheckAuth`:**
   ```bash
   php do middleware CheckAuth
   ```

4. **Create a new model named `User`:**
   ```bash
   php do model User
   ```

5. **View available commands:**
   ```bash
   php do help
   ```
