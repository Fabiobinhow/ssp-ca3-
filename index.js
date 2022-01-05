const   // we use the const and we dont need to change the value
        http = require('http'), //The module http, give to us HTTP server functionalities
        path = require('path'), //with the path module we are able to working with file and paths directory
        express = require('express'), //The framework express module allows to app able to respond to HTTP requests, defines the routing and renders back the required content
        fs = require('fs'), //This module allows to work with the file system: read and write files back
        xmlParse = require('xslt-processor').xmlParse, //we can work with XML files
        xsltProcess = require('xslt-processor').xsltProcess, //The same module allows us to uitlise XSL Transformations
        xml2js = require('xml2js'); //This module does XML at JSON conversion

         //I used the code used in class :22/11/2021