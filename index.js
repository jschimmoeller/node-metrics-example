var http  = require('http');
var stats = require('measured').createCollection();
var Measured = require('measured')
var activeUploads = new Measured.Counter();
var histogram = new Measured.Histogram();
var timer = new Measured.Timer();

http.createServer(function(req, res) {
  var stopwatch = timer.start();
  //stats.meter('requestsPerSecond').mark();
  //activeUploads.inc();
  req.on('end', function() {
    //activeUploads.dec();
    stopwatch.end();
  });
  // if (req.headers['content-length']) {
  //   console.log('aaaaa')
  //   histogram.update(parseInt(req.headers['content-length'], 10));
  // }else {
  //   histogram.update(parseInt(Math.random(), 10));
  // }
  res.end('Thanks');
}).listen(3000);

setInterval(function() {
  console.log('------------------------------------------------------------------------')
  //onsole.log(stats.toJSON());
  // var gauge = new Measured.Gauge(function() {
  //   return process.memoryUsage().rss;
  // });
  // console.log("Memory usage:" + gauge.toJSON())
  // console.log("Counter:" + activeUploads.toJSON())
  // console.log("Histogram:" + JSON.stringify(histogram.toJSON()))
  console.log("Timer:" + JSON.stringify(timer.toJSON()))

}, 5000);
