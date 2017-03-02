var path = require('path');

module.exports = {
  // click on the name of the option to get to the detailed documentation
  // click on the items with arrows to show more examples / advanced options
  
  entry: "./app/entry", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  
  output: {
    // options related to how webpack emits results
  
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
  
    filename: "bundle.js", // string
    // the filename template for entry chunks
  
    publicPath: "/assets/", // string
  
  }
};