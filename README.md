#MTG X

<img src="https://app.codeship.com/projects/d3251c90-81d2-0134-94fa-36079b336971/status?branch=master"/>

![Cordova SQLite](https://github.com/jdnichollsc/Ionic-Starter-Template/blob/gh-pages/images/sqlite.png?raw=true)
![Sample](https://github.com/litehelpers/Cordova-sqlite-storage#sample)

* **Debug in the browser:** Test using the **`./app/js/queries.js`** file to create your queries **(Drop tables, create tables, insert data, etc)**.
* **Debug in the device:** Test using the **`./www/mtgx.db`** file, you can edit the database using **[DB Browser for SQLite](http://sqlitebrowser.org/)**

##SQLite examples using **Angular Services**
* Returns all the elements of a sequence that satisfies a specified condition:
```javascript
var query = "SELECT * FROM Users WHERE Name LIKE ?";
return $q.when(SqliteService.getItems(query, ['%Juan%']));
```
* Execute SQL query:
```javascript
var query = "DELETE FROM Users WHERE Name LIKE ?";
return $q.when(SqliteService.executeSql(query, ['%Juan%']));
```
