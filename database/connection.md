# Database Class in S-PHP Framework

The `Database` class in S-PHP handles the connection between the application and the MySQL database. This class encapsulates the database connection details and provides functionality to interact with the database using PDO (PHP Data Objects).

## Database Connection

The connection to the MySQL database is established in the constructor of the `Database` class. It accepts a configuration array which contains the database host, database name, username, and password.

### Constructor

```php
public function __construct($config)
{
    $dsn = 'mysql:host=' . $config['host'] . ';dbname=' . $config['database'];
    $this->connection = new \PDO($dsn, $config['username'], $config['password']);
}
``` 

- `$config:` This is an associative array that contains the following configuration values:

- `host:` The MySQL host (typically localhost for local development).
- `database:` The name of the MySQL database.
- `username:` The username for connecting to the database (default is usually root).
- `password:` The password for the MySQL user.

When a Database object is instantiated, the constructor automatically establishes the connection to the database using the provided credentials.