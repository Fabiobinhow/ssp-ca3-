const   // we use the const and we dont need to change the value
        http = require('http'), //The module http, give to us HTTP server functionalities
        path = require('path'), //with the path module we are able to working with file and paths directory
        express = require('express'), //The framework express module allows to app able to respond to HTTP requests, defines the routing and renders back the required content
        fs = require('fs'), //This module allows to work with the file system: read and write files back
        xmlParse = require('xslt-processor').xmlParse, //we can work with XML files
        xsltProcess = require('xslt-processor').xsltProcess, //The same module allows us to uitlise XSL Transformations
        xml2js = require('xml2js'); //This module does XML at JSON conversion

         //I used the code used in class :22/11/2021

const   router = express(), 
         server = http.createServer(router);
 
 
 router.use(express.static(path.resolve(__dirname,'views'))); //We serve static content from "views" folder
 router.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be encoded in a URL targeting our end point
 router.use(express.json()); //We include support for JSON
 
 
 router.get('/get/html', function(req, res) {
 
     res.writeHead(200, {'Content-Type' : 'text/html'}); // this will tell to the broser for the content
 
     let xml = fs.readFileSync('Motor.xml', 'utf8'),
         xsl = fs.readFileSync('Motor.xsl', 'utf8');
 
     console.log(xml);
     console.log(xsl);
 
     let doc = xmlParse(xml),
         stylesheet = xmlParse(xsl);
 
     console.log(doc);
     console.log(stylesheet);
 
     let result = xsltProcess(doc, stylesheet);
 
     console.log(result);
 
     res.end(result.toString());
 
 });
 
 
 server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() 
 {
     const addr = server.address();
     console.log("Server listening at", addr.address + ":" + addr.port)
 });
 
    

