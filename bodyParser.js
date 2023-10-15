const bodyParser = require('body-parser')
function parser (app) {
    // parse application/x-www-form-urlencoded
    const bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
    app.use(bodyParser.json())
}

module.exports = parser;

