const http = require("http")

const server =  http.createServer( (req, res)=> {
    // console.log(req)
    // res.writeHead(200)
    res.write("Hola mundo")

    res.end()

} )
.listen( 3000 );

console.log("escuchando el puerto", 3000)



