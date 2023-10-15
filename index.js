const express = require('express')
const routes = require("./routes");
const parser = require("./bodyParser");
const app = express()
const port = 9000

routes(app);
parser(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})