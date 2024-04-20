const functions = require('@google-cloud/functions-framework');




functions.http('myHttpFunction', (req, res) => {
     if (req.method == "GET") {

          res.send("Hello World from GCP!")

     }
   });