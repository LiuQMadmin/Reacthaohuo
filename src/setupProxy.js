const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api', { 
      target: 'http://cmsjapi.dataoke.com',
      changeOrigin: true
    }))
  }