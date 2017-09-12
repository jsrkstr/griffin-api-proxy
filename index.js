// const express = require('express')
// const app = express()

// app.all('/graphql', function (req, res) {
    

//     var http = require('http');

//     var options = {
//       host: 'example.com',
//       port: 80,
//       path: '/foo.html'
//     };

//     http.get(options, function(resp){
//       resp.on('data', function(chunk){
//         //do something with chunk
//         res.send(chunk);
//       });
//     }).on("error", function(e){
//       console.log("Got error: " + e.message);
//     });
// })

// app.listen(3004, function () {
//   console.log('Example app listening on port 3004!')
// })

var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy.createProxyServer({
    secure: false,
    target: 'https://dsp-api.nc.stage.bidmotion.com'
});

var port = process.env.PORT || 9002;

proxy.listen(port, function () {
  console.log('Proxy servery listening on port - ' + port);
}); // See (†)

proxy.on('proxyRes', function (proxyRes, req, res) {
    proxyRes.headers['access-control-allow-origin'] = '*';
    // proxyRes.setHeader('X-Special-Proxy-Header', 'foobar');
  // console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});


