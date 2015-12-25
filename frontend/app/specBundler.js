// webpack trick to include all spec files
var context = require.context('.', true, /\.spec\.jsx?$/);
context.keys().forEach(context);
