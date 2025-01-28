const express = require('express');
const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const credentials = require('./middleware/credentials');
const errorHandler = require('./middleware/errorHandler');
const notExistHandler = require('./middleware/notExistHandler');
require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json({limit: '200mb'}));

app.use("/catalog",require("./routes/catalogRoute"));

app.use(notExistHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})