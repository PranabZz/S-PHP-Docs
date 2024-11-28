# CRUD Operations in S-PHP Framework

The `Models` class is designed to facilitate interaction with the database for performing basic CRUD operations. This class provides methods to create, read, update, and delete records in the database. Below is a guide on how to use these methods.


### 1. Create Operation (Insert Data)

The create method allows you to insert data into the database table. It automatically filters the data to ensure only valid fields, defined in the `$fillables` array, are inserted.

```php 
public function create($request)
``` 
### Example Usage

```php 
$model = new YourModel();
$request = [
    'name' => 'John Doe',
    'email' => 'john.doe@example.com'
];
$model->create($request);
```

### 2. Read Operation (Select Data)

The `select` method allows you to retrieve data from the database. You can specify which columns to select and apply `WHERE` conditions if needed.

```php 
public function select($columns, $where = [])
```

#### Example Usage

<i>Without WHERE condition</i>

```php

$model = new YourModel();
$columns = ['id', 'name', 'email'];
$result = $model->select($columns);
```

<i>With WHERE condition</i>

```php

$model = new YourModel();
$columns = ['id', 'name', 'email'];
$where = ['id' => 1];
$result = $model->select($columns, $where);
```

### 3. Find by ID (Get a Single Record)

The findByID method retrieves a single record by its id.

``` php

public function findByID($id)
$id: The unique identifier for the record you want to retrieve.
```

#### Example Usage

```php

$model = new YourModel();
$id = 1;
$result = $model->findByID($id);

```


This will return the record where the id matches the provided value.

### 4. Update Operation

The update method allows you to modify an existing record. You need to specify the record's id and the data you want to update.


```php

public function update($request, $id)
$request: An associative array containing the fields to be updated.
$id: The unique identifier of the record you want to update.
```

#### Example Usage

```php
$model = new YourModel();
$request = [
    'name' => 'Jane Doe',
    'email' => 'jane.doe@example.com'
];
$id = 1;
$model->update($request, $id);
```

In this example, the record with id = 1 will have its name and email updated with the values from the $request array.

### 5. Delete Operation

The delete method removes a record from the database based on its id.

```php
public function delete($id)
```

#### Example Usage

```php
$model = new YourModel();
$id = 1;
$model->delete($id);
```

This will delete the record with the specified id from the database.

