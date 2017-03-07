/**
 * parse the request
 */


const FIRST_LINE_REGEX = /^(GET|POST|PUT|DELETE|OPTIONS|TRACE)(\s+)(.*)+(\s+)HTTP\/1.1$/;
const SEPERATOR = "\r\n";
const B_SEPERATOR = SEPERATOR+SEPERATOR;
var request = require('./request.js');
var url = require('url');


exports.parse = function(data){
	 //parse to method, path, protocol, headers, body

	var body = null;
    var splitHeaderBody = data.split(B_SEPERATOR);
    var lineStr = splitHeaderBody[0].split(SEPERATOR, 1)[0];
    if ( !FIRST_LINE_REGEX.test(lineStr)){
    	consol.log ( " in requestParser");
    	throw({code: 500, debug: 'firstLineProtocol'});
    }
    
    var line = lineStr.split(" ");
    var method = line[0];
    var URLParse = url.parse(line[1], true);
    var query = URLParse.query;
    var path = URLParse.pathname;
    var headerLine =splitHeaderBody[0].substring(lineStr.length+2).split(SEPERATOR);
    var headers = {};
    var item ;
	for (var i = 0; i < headerLine.length; i++) {
		item = headerLine[i];
		var header = item.split(":");
        var key = header.shift();
        if (!header || !key) {
            throw({code: 500, debug: 'parseHeaders'});
        }
        headers[key] = header.join(":").trim(); 
	}
    
	if (splitHeaderBody[1]) {
		body = splitHeaderBody[1];
	}
	
    return new request.Request(query,method,path,body,headers) ;
};

