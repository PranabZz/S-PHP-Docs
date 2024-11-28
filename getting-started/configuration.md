# Database Configuration in S-PHP

In the S-PHP framework, the database connection settings are stored in the `app/config/config.php` file. This file plays an important role in configuring your application's connection to the database. Below is an example of how to set up the database connection:

## Example of `app/config/config.php`:

```php
<?php
/* Here we keep our database host and the database we will be using for the project
*/
return [
    'host' => '', // Your Host 
    'database' => '', // Database name
    'username' => '', // MySql username
    'password' => '' // MySql password
];
```

# Explanation of Configuration Fields:

`host` : This specifies the database server's host address. For most local development setups, this will be localhost. If you're using a different server, replace localhost with the appropriate host address (e.g., 127.0.0.1 or an IP address).

`database` : This is the name of the database your application will connect to. In the example above, the database name is start. Replace it with the name of your actual database.

`username` : This is the username required for connecting to the database. In many local environments, the default is usually root. However, if you're using a different database user, make sure to replace it accordingly.

`password` : The password associated with the database username. The example shows root as the password, but this should be changed to the actual password for your database user.

---

# How It Works

This configuration file provides the essential details for your application to establish a connection with a MySQL database. The framework uses these values to communicate with the database and perform operations like querying, inserting, updating, and deleting data.

Important Notes:
Security: Always be cautious when handling sensitive information like database credentials. Ensure this configuration file is never exposed publicly or checked into version control. It's a good practice to use environment variables for sensitive data in a production environment.

Further Customization: You can modify this configuration file later to include additional settings like port numbers, charset, or connection timeouts if needed.

Note: This is a basic configuration for local development. For production environments, consider using more secure connection practices like using environment variables or an encrypted connection.