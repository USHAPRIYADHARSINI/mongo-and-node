// const express = require("express"); //importing express- old way of importing

import express from "express"; //new way to import
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import moviesRouter from "./routes/movies.route.js" ;

dotenv.config();

const app = express();

// const PORT = 4000; // denoting port number
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // phone dial
// top-level await
await client.connect(); // call button
console.log("Mongo is connected ✌️😊");

app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use ("/movies", moviesRouter);

// listen is given to run the file
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


//  /movies/:id - to get a particular movie detail- USING ARRAY FILTER

// app.get ("/movies/:id", function(request, response){
//     const {id} = request.params
//     console.log(id);
//     const movie = movies.filter (n=> n.id ==id)
//     response.send(movie)
// })


// const mobiles =[{
//     "model": "OnePlus 9 5G",
//     "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     "company": "Oneplus"
//     },
//     {
//     "model": "Iphone 13 mini",
//     "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     "company": "Apple"
//     },
//     {
//     "model": "Samsung s21 ultra",
//     "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     "company": "Samsung"
//     },
//     {
//     "model": "Xiomi mi 11",
//     "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     "company": "Xiomi"
//     }
//     ]

// app.get("/mobiles", function(request, response){
//     response.send(mobiles)
// })

export { client };