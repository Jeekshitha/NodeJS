var http = require("http");
var dt = require("./myModule");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' :'text/html'});
    res.write("The data is currently in :"+dt.myDataTime());
    res.end();
}).listen(8000);