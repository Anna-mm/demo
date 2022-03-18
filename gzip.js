const {gzip, ungzip} = require('node-gzip');

// gzip('Hello World')
//   .then((compressed) => {
//     console.log(compressed.toString());
//     return ungzip(compressed);
//   })
//   .then((decompressed) => {
//     console.log(decompressed.toString());     //Hello World
//   });

ungzip('�H����/�IV�J')
  .then((compressed) => {
    console.log(compressed.toString());
    // return ungzip(compressed);
  })


