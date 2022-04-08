const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');

mongoose
  .connect('mongodb://127.0.0.1:27017/fieldApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Mongo database');
  })
  .catch((err) => {
    console.log(err, 'Caught an error');
  });
app.use(express.urlencoded({ extended: true })); //post request pass through express
app.use(express.json()); //post json request pass through express
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send('Hello! World');
// });
// app.get('/welcome', (req, res) => {
//   res.render('welcome', { title: 'welcome Blog' });
// });

app.get('/', (req, res) => {
  res.render('products/welcome', { title: 'Welcome' });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.send(`hi user your details are successfully saved`);
});

app.get('/products', async (req, res) => {
  const products = await Product.find({}); // find the data stored in database and give its value to variable products
  res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/`);
});
