//Get your imports

import express from "express";


//Write the server application
const app = express();

app.get("/", (req, res) => {
    res.send("Made it.");
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
})