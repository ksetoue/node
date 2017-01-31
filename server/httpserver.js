var http = require('http');

var server = http.createServer((request, response) => {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];

  request.on('error', function(err){
    console.error(err);
  }).on('data', function(chunk){
    body.push(chunk);
  }).on('end', function(){
    body = Buffer.concat(body).toString();

    response.on('error', function(err){
      console.console.error();(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    //JSON to specify the response format
    var responseBody ={
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.write(JSON.stringfy(responseBody));
    response.end();



  });
});
//activates server listening on port 8080
server.listen(8080);
