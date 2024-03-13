//Get your imports

import express from "express";


//Write the server application
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1> </br> <h2>Bon Jour</h2>"); //Send response
    console.log(req, rawHeaders); //Listen for computer access to the server
});

app.get("/about", (req, res) => { //localhost:3000/about
    res.send("<h1>About me</h1>"); //Send response
});

app.get("/contact", (req, res) => { //localhost:3000/contact
    res.send("<h1>email@gmail.com</h1>"); //Send response
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
})