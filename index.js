var http = require('http');
var hm= require('./homemodule');
var lg= require('./loginmodule');
var ct= require('./contatomodule');
var cs= require('./consultasmodule');
var co= require('./cadastromodule');



http.createServer( function (req,res ){
res.writeHead(200, {'Content-TYpe': 'text/html'});
res.write("<h1>SP-Medical Group</h1>");
res.write("<br>"+hm.myDAteTime());
res.write("<br><br><br><br>"+lg.myDAteTime());
res.write("<br><br><br><br><br>"+co.myDAteTime());
res.write("<br><br><br><br><br><br>"+cs.myDAteTime());
res.write("<br><br><br><br><br><br><br>"+ct.myDAteTime());
res.end();
}).listen(5019);

