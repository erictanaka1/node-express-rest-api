// Currently in file src/index.js
const express = require('express');
const v1produtsRouter = require('./v1/routes/productRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1/products', v1produtsRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});