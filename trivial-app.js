const express = require('express');
const path = require('path');
const app = express();

//virtual prefix and an absolute path.
app.use('/files', express.static(path.join(__dirname, 'public')));

//Listening on root
app.get('/', function (req, res) {
  //serve 'index.html'
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname: resolves to  project folder.
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
