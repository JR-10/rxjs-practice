const path = require('path');


// Objeto de configuracion 
module.exports = {
    entry: './src/index.js', // archivo de entrada
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development'
}