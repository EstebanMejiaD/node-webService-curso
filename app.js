const express = require("express");
const hbs = require("hbs")
require("dotenv").config()


const app = express();
const port = process.env.PORT



app.set("view engine", "hbs")
hbs.registerPartials(__dirname + '/views/partials')




//Servir contenido estático
app.use( express.static("public") )


app.get("/home", (req, res) => {
    res.render("home", {
        nombre: "esteban",
        titulo: "curso node"
    })
});



app.get("/generic", (req, res) => {
 
    res.render("generic", {
        nombre: "esteban",
        titulo: "curso node"
    })


});

app.get("/elements", (req, res) => {
 
    res.render("elements", {
        nombre: "esteban",
        titulo: "curso node"
    })


});



app.get("*", (req, res) => {
  res.sendFile(__dirname+"/public/404.html")
});

app.listen(port, () => {
  console.log("Server active on port: ", port);
});
