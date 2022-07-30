// Currently in file src/index.js
const express = require('express');
const v1productsRouter = require('./v1/routes/productRoutes');

const app = express();

// Server port
const port = process.env.PORT || 3000;

// Use json parsing
app.use(express.json());

// Products Router
app.use('/api/v1/products', v1productsRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});