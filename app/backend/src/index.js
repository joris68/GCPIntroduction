/**
 * Responds to a HTTP request from the API Gateway that gets rerouted
 */


const functions = require('@google-cloud/functions-framework');

const myHttpFunction = (req, res) => {
    if (req.method === "GET") {
        res.send("Hello World from GCP!");
    } else if (req.method === "POST") {
        let body = JSON.parse(req.body);
        if (body.message === "MAKE LOVE") {
            res.send("NOT WAR");
        } else {
            res.send("WHAT DO YOU WANT?");
        }
    } else {
        res.send("WEIRD REQUEST BRO");
    }
};

functions.http('myHttpFunction', myHttpFunction);

module.exports = myHttpFunction;
