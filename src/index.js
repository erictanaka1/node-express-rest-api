// Currently in file src/index.js
const express = require('express');
const router = require('./v1/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', router);

app.listen(port, () => {
        console.log(`App listening on port ${port}`);
        console.log(`http://localhost:${port}`);
    }
);