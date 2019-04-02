# mongodb-crud

## Endpoints :

|Route |HTTP |Header(s)|Body   |Description |
|------|:---:|:-------:|:-----|:-----------|
|`books`|GET|`none`|`none`|Get all books info |
|`/books/:isbn`|GET|`none`|`none`|Get a single book info|
|`/books`|POST |`none`|`isbn:String`(**Required**) , `title:String`(**Required**), `author:String`(**Required**), `category:String`(**Required**),`stock:String`(**Required**)| Create a new book
|`/books/:isbn`|DELETE|`none`|`none`| Delete a book 
|`/books/:isbn`|PUT|`none`|`isbn:String` , `title:String`, `author:String`, `category:String`,`stock:String`| Update a book with new info|
|`/books/:isbn`|PATCH|`none`|`isbn:String` , `title:String`, `author:String`, `category:String`,`stock:String`| Update a book with single field new info|


```
npm install
```