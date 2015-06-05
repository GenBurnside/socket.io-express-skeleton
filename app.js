var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.post('/userUpdate/:id', function (req, res) {
  console.log('POST: ' + req.url);

  //do user update here

  io.emit(req.params.id, 'UserUpdated');
  res.status(200).send({ message: 'User update accepted' });
});

app.post('/permissionUpdate/:id', function (req, res) {
  console.log('POST: ' + req.url);

  //do permission update here

  io.emit(req.params.id, 'PermissionUpdated');
  res.status(200).send({ message: 'Permission update accepted' });
});

io.on('connection', function(socket){
  console.log('socket.io connect');

  socket.on('disconnect', function () {
    console.log('socket.io disconnect');
  });
});


http.listen(3000, function () {
  console.log('Listening on port 3000');
});
