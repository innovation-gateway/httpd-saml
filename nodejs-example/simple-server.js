var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('\n\n\n');
  res.write(req.headers['nameid']);
  res.write('\n\n\n');

  //res.write(JSON.stringify(req.headers['memberof']));

  // header 'memberof' is a list of groups deliminated by ';'
  membership = req.headers['memberof'];
  groups = membership.split(';');
  for (var i =0; i < groups.length; i++) {
    res.write(groups[i]);
    res.write('\n');
  }

  res.end('\n');
}).listen(18080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:18080/');
