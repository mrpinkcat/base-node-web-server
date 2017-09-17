const _PORT = process.env.PORT || 3000;

const express = require('express'), // express
  app = require('express')(),
  server = require('http').createServer(app),
  io = require('socket.io')(server);
    
server.listen(_PORT, function() {
  console.log('Server up on :' + _PORT);
});

app.use('/css', express.static(__dirname + '/web/css/'));
app.use('/js', express.static(__dirname + '/web/js/'));
app.use('/img', express.static(__dirname + '/web/img/'));

app.get('/', (req, res) => {
  res.sendFile('web/index.html', {
    root: __dirname
  });
});

io.on('connection', function(socket) {
  console.log('test');
});
