# Mongoose Mini-Project

Mongoose is an ORM for Mongo databases, just like Sequelize is an ORM for SQL databases. MongoDB is known as a "No-SQL" database. This can offer us a lot of flexibility as we are now free from the constraints that SQL puts on us.

## Mongoose: Keeping some order

When using MongoDB, you can have some properties in one document and a different set on another document. Mongoose does require you to use a model, so it does enforce some consistency between different documents in your collection.

### Documents? Collections?

| In SQL you used... | In Mongo, you'll use... |
| ------------------ | ----------------------- |
| Database | Database |
| Table | Collection |
| Row | Document |

In MongoDB, you store data in a format called BSON. BSON looks a lot like JSON, and in fact, they are related. BSON is a superset of JSON, which means it does everything JSON does, and a little bit more, such as defining ObjectIds. A typical document (row) in a User collection (table) would look something like this:

```
{
    "_id" : ObjectId("5a62b3d038556634d8280ec4"),
    "name" : "Brandi",
    "email" : "brandi.williams@generalassemb.ly",
    "password" : "$2a$10$/aDegwwlqdtgq466X8aCmeMFUqEtEAQVId4oUUVv8/WaspxBnC5YW"
}
```

## What about Associations/Relationships?

Mongo doesn't do joins like SQL. Instead it has two ways of relating data between different collections. 

The first way is by reference. This looks the most like a traditional join in that it uses the ObjectId (this is the unique identifier for a document) to reference something in another collection.

The second way is through embedded data. These are also known as sub-documents. You've seen a JSON object before with an embedded array - this is a similar idea. 

> Refer to the [class notes](https://gawdiseattle.gitbooks.io/wdi/05-express/express-mongoose/readme.html) if you need examples of using these!

## Your Assignment

Requirements:

Today we'll make an app that relates museums to pieces of art. We'll make schemas for Museum, Piece, and Creator.

* You've demonstrated the ability to create schemas and models with Mongoose
    * You have a Museum model
    * You have a Piece model
    * One Museum has many Pieces (reference relationship)
    * Each Piece has a Creator 
    * Creator is a sub-document of Piece (embedded relationship)
* You've demonstrated a 1:M relationship via reference
    * When viewing a Museum, you can see a list of its Pieces
    * When viewing a Piece, you can see its Museum
* You've demonstrated a 1:M relationship via embedding
    * When viewing a Piece, you can see info on its Creator
* You have GET and POST routes to view and add data to each collection

## How do I start?

For this we'll take a short journey backward into Node, Express, and EJS!

* Fork and clone this repo - we'll be turning this in!
* First things first - read through the code you're already being given!
    * Route stubs are already in `index.js`, `museums.js`, and `pieces.js`. Some inline hints are provided for you.
    * All your routes and EJS files exist already - your job is just to make it all functional with real data!
* Next make your models. Refer to in-class examples, and modify them to fit your needs. See below section for model requirements.
* Create forms that post data to your server for each collection
* Implement adding a museum or a piece to your database
* Create show pages for both museum and piece that allow you to view both the item and it's related data from the other collection

## Model Requirements

There are stubs for your model index file, and the museum and piece models. Hints are written inline that lay out the steps you need to do yourself.

*Don't be daunted!* Mongoose is a lot like Sequelize, so using it will feel a little bit familiar even though it's new to you! When you need to know what to do, look up the [Mongoose docs](https://mongoosejs.com/docs/guide.html) and try to find something that looks like an equivalent. You can also refer to the [class notes](https://gawdiseattle.gitbooks.io/wdi/05-express/express-mongoose/readme.html) for all the CRUD examples.

#### Museum

A museum should have a name, a city, a country, and an image. The stub file looks like the code snippet below, so go ahead and try to implement the things that are marked as `TODOs`.

```javascript
// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema

// TODO: Use schema to create model

// TODO: Export Museum Model
```

#### Piece

A piece should have a name, an image, an embedded schema for Creator, and a reference to the Museum it is currently in. `TODOs` and `HINTs` are also found in this stub file, so take a look at it.

#### Creator

A creator should have a first name, a last name, an image, a birth year, and a death year. 

> Note: This doesn't need any separate file - it just gets to live inside the Piece model! 

## Routes

The below routes are stubbed out for your convenience. You don't need to add any new ones, just implement the ones that are already there. Express EJS Layouts as well as a layout.ejs and a navbar are already included for you. All the individual EJS files are stubbed out for you too. This way you can get straight to the part where you are creating the models and using them in your routes.

| Method | Route Path | Purpose |
| ----- | ------------- | ------------------------------- |
| GET | / | Home page - already has an EJS file |
| GET | /museums | Index page to show a list of museums |
| POST | /museums | Take form data and use it to add new museum |
| GET | /museums/new | Render form for adding new museum |
| GET | /museums/:id | Show page for specific museum. Include list of pieces! |
| GET | /pieces | Index page to show a list of pieces |
| POST | /pieces | Use form data to add a new piece (remember to add museum and creator!) |
| GET | /pieces/new | Render form for adding a new piece |
| GET | /pieces/:id | Show page for specific piece. Include all creator info! |

> HINT: Use a dropdown on the new piece form so that the user can select which Museum the piece belongs in! :) 

## Hooking it up

For embedded documents, you are readily able to get the information since it already exists in your document. For referenced documents, use the [populate](https://mongoosejs.com/docs/populate.html) functionality. This is the correlate to Sequelize's `include`. It does the work of a join or sub query and loads up the data onto your object(s) as needed.

## Bring it all together now!

Once your forms for adding museums and pieces works:

* Add at least 2 museums. 
* Add at least two pieces of art to each museums

## Need More? Try a Bonus

* Implement a DELETE route for a piece or a museum
* Implement a PUT route for editing a piece or a museum
* Style it up! Add some custom CSS!
* Look up some artwork! 
    * Do you know where the Mona Lisa lives? How about the Rosetta stone? What about the statue of David? Monet's Water Lillies? Fill out your database with some [impressive pieces](https://www.touropia.com/most-famous-paintings/)!

## References

* [Mongoose docs](https://mongoosejs.com/docs/guide.html)
* [Populate](https://mongoosejs.com/docs/populate.html)
* [Mongoose Connections](https://mongoosejs.com/docs/connections.html)
* [Using Sub-documents](https://mongoosejs.com/docs/subdocs.html)
* [Finding a subdocument by ID](https://mongoosejs.com/docs/subdocs.html) (down page!)
* [Class notes](https://gawdiseattle.gitbooks.io/wdi/05-express/express-mongoose/readme.html)
* [Top 10 Most Famous Pieces of Art](https://www.touropia.com/most-famous-paintings/)
