const hmr = require('node-hmr');

hmr(() => {
    require('./app');
});
