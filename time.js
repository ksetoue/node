var request = require('request');
var iconv = require('iconv-lite');
var xmlParser = require('xml2js').parseString;
var encoding = 'iso-8859-1';
var startDate = new Date();
request({ url: 'http://www.ipmet.unesp.br/tempo/cidades.xml', encoding: null }, function(error, response, body) {
  	var endDate = new Date();
    var diffTime = endDate - startDate;
    console.log("request time = " + diffTime);
  if (!error && response.statusCode == 200) {
    body = iconv.decode(body,encoding);
    xmlParser(body, function(err, res){
        console.log(res);
    })

  } else {
    console.warn(error);
  }
});
