const express = require('express');
const routes = require('./src/routes');

require('./database/connection')

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);

