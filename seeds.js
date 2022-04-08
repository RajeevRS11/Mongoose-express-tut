// const mongoose = require('mongoose');
// const Product = require('./models/product');

// mongoose
//   .connect('mongodb://127.0.0.1:27017/fieldApp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to Mongo database');
//   })
//   .catch((err) => {
//     console.log(err, 'Caught an error');
//   });

// const p = new Product({
//   name: 'grapefruit',
//   price: 199,
//   category: 'fruit',
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p = [
//   { name: ' susheelSoni', price: 210, category: 'vegetable' },
//   { name: 'rahulVerma ', price: 205, category: 'dairy' },
//   { name: 'mayankSingh', price: 215, category: 'fruit' },
// ];
// Product.insertMany(p)
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err, 'Caught an error');
//   });
