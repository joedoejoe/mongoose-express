# mongoose-express
Mongoose interaction with Express

This webapp allows users the following dynamic interaction with MongoDB using Mongoose ODM:
1. Create grocery products
2. Modify products (categories, name, and/or price)
3. View all products
4. View products by filter (using query string)
5. Delete product records

More detailed info:
1. RESTful routing is handled by Express.JS
2. Supported REST API include standard and non-standard, made possible with method-override https://www.npmjs.com/package/method-override
3. EJS is used as view engine, for templating purpose
4. Webapp is seeded with initial data, refer to https://github.com/joedoejoe/mongoose-express/blob/main/seeds.js
