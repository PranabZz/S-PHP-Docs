# Helper Functions Overview

The following helper functions are commonly used for general utility tasks like handling errors, sanitizing input, managing CSRF protection, redirecting pages, and debugging. These functions enhance the security and usability of your project by providing reusable methods for various operations.

## 1. `sanitizeInput($data)`
This function is used to clean user input to prevent security issues such as XSS (Cross-Site Scripting) attacks and other vulnerabilities.

Purpose: Sanitizes and escapes input data by stripping tags and converting special characters to HTML entities.

Usage: It processes both strings and arrays recursively, making sure any input is safe before being used in the application.

How it works:

- strip_tags(): Removes HTML and PHP tags.
- trim(): Removes extra spaces from the input.
- htmlspecialchars(): Converts special characters to HTML entities (to prevent code execution).
- ENT_QUOTES: Ensures both double and single quotes are converted.

## 2. `csrf()`

Generates and inserts a hidden CSRF (Cross-Site Request Forgery) token into an HTML form. This token helps to verify that the requests made are from the correct user, preventing CSRF attacks.

Purpose: Protects the application from CSRF by generating a token and embedding it into forms.

Usage: Call this function in your form to include the CSRF token.

How it works:

If a csrf_token doesn't exist in the session, a new one is created using bin2hex(random_bytes(32)) to generate a secure, random token.
The token is then rendered as a hidden input field in your form.


## 3. `validateCsrfToken($token)`

Validates the CSRF token submitted with a form request to ensure it matches the token stored in the session.

Purpose: Verifies that the CSRF token in the request is valid and prevents unauthorized or malicious form submissions.

Usage: Call this function with the token submitted via a form to check if it matches the one stored in the session.

How it works:

It compares the session token with the provided token using hash_equals(), which prevents timing attacks by securely comparing strings.

## 4. `register_shutdown_function() with error handling`
This function is used to catch fatal errors and redirect the user to a custom error page.

Purpose: Handles fatal errors that might occur at runtime and logs the error details. It also redirects the user to a custom error page.

Usage: It is automatically invoked when the script ends, ensuring that if a fatal error occurs, it will be logged and the user will be redirected to a specified error page.

How it works:

error_get_last(): Retrieves the last error that occurred.
If the error is fatal (like E_ERROR), it logs the error and redirects the user to an error.html page with the error message as a query parameter.

## 5. `redirect($url, $message = "")`
Redirects the user to a specified URL and optionally passes a message to be stored in the session.

Purpose: Simplifies the process of redirecting users while passing messages (e.g., success or error messages).

Usage: Call this function after performing actions like form submission or authentication to redirect the user to another page.

How it works:

If a message is provided, it stores the message in the session under $_SESSION['message'].
After that, it uses the header("Location:") function to redirect the user to the specified URL.

## 6. `dd($arr)`

This function is commonly used for debugging purposes. It dumps an array (or any variable) in a readable format and halts further script execution.

Purpose: To inspect the contents of a variable or array during development.

Usage: Call dd() to dump the contents of any variable and immediately stop the script.

How it works:

- `print_r():` Outputs the contents of the array or variable in a human-readable format.
- `die():` Stops the execution of the script, which is helpful for debugging because it ensures that no further code is executed after the output.