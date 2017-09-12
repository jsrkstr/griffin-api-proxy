var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

console.log('Running Index...');

setInterval(function(){ 
    console.log('Running Index...');
}, 10000);

// var http = require('http'),
//     httpProxy = require('http-proxy');
// //
// // Create your proxy server and set the target in the options.
// //
// var proxy = httpProxy.createProxyServer({
//     secure: false,
//     target: 'https://dsp-api.nc.stage.bidmotion.com'
// });

// var port = process.env.PORT || 9002;

// proxy.listen(port, function () {
//   console.log('Proxy servery listening on port - ' + port);
// }); // See (†)

// proxy.on('proxyRes', function (proxyRes, req, res) {
//     proxyRes.headers['access-control-allow-origin'] = '*';
//     // proxyRes.setHeader('X-Special-Proxy-Header', 'foobar');
//   // console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
// });


