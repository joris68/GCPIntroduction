/**
 * Responds to a HTTP request from the API Gateway that gets rerouted
 */


const functions = require('@google-cloud/functions-framework');

const myHttpFunction = (req, res) => {

     switch (req.method){
          case 'GET':
               res.status(200).send("Hello World from GCP!");
               break;
          case 'POST':
               if (req.body.message === "MAKE LOVE"){
                    res.status(200).send("NOT WAR");
               }else{
                    res.status(200).send("WHAT DO YOU WANT?");
               }
     }
};

functions.http('myHttpFunction', myHttpFunction);

module.exports = myHttpFunction;
