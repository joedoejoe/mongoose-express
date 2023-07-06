// import mongoose
const mongoose = require("mongoose");
const Product = require("./models/product");

// connect to mongo
mongoose
    .connect("mongodb://localhost:27017/farmStand", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTION OPEN!");
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!");
        console.log(err);
    });

const p = new Product({
    name: "Ruby Grapefruit",
    price: 1.99,
    category: "fruit",
});

const seedProducts = [
    {
        name: "Fairy Eggplant Grapefruit",
        price: 1.0,
        category: "vegetable",
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        category: "fruit",
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: "fruit",
    },
    {
        name: "Organic Celery",
        price: 1.5,
        category: "vegetable",
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: "diary",
    },
];

Product.insertMany(seedProducts)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
