/**
 * response object
 */

const RESPONSE_CODES = { 
    200: "OK",
    301: "Moved Permanently",
    302: "Moved Temporarily",
    303: "See Other",
    400: "Bad Request",
    404: "Not Found",
    500: "Internal Server Error"
}
exports.Response = function(socket) {
		var status = 200;
		var headers = {};
		var cookies={};
		var resBody = null;
		var resSocket = socket;
		var protocol = "HTTP/1.1";
		
		var responseAsString = function () {
			var toReturn = "";
			var firstLine = protocol + " " + status + " " + RESPONSE_CODES[status]+ '\r\n';
			var headersLines = "";
            for (var val in headers) {
                headersLines = headersLines + val + ": " + headers[val] + '\r\n';
            }
            toReturn = firstLine + headersLines + '\r\n';
            if (resBody) {
            	toReturn = toReturn + resBody;
            } 
            return toReturn;
            
            
		};
		
		
		this.set = function (field , value){	
		
			if (typeof field === 'string'){
				headers[field] = value;
			}else if ( typeof field === 'object'){
				for(var elem in field){
					if ( field.hasOwnProperty(elem)){
						headers[elem] = field[elem];
					}
				}
			}
			return;
		};
		
		this.status = function(statNum){
	
			status = statNum;
			return this;
		};
		this.get = function(field){
			return headers[field];
	
		};
		this.cookie = function(name, value){
		    cookies[name] = value;
		    
		    var cookieHeader = "";
		    if(headers['Set-Cookie'])
		    	 cookieHeader = headers['Set-Cookie'] ;
		    	 
		    var cookieslist = cookieHeader.split("; ");
		    cookieslist.push(name + ": " + value);
		    headers['Set-Cookie'] = cookieslist.join("; ");
		};
		
		this.send = function(body){
			
			if ( body) {
				if ( typeof body === 'string'){
					resBody = body;
					this.set('Content-Type', 'text/html');
				}else if ( body instanceof Buffer ) {
					resBody = body;
					this.set('Content-Type', 'application/octet-stream');
				}else if ( typeof body === 'object') {
					resBody = JSON.stringify(body);
					this.set('Content-Type', 'application/octet-stream');
				}
				else {
						resBody = JSON.stringify(body);
						this.set('Content-Type', 'application/json');
				}

			}
			var toSend = responseAsString();
            resSocket.write(toSend);
            resSocket.end();
            
		};
	
		this.json = function (param){
			if (param ) {
				resBody = JSON.stringify(param)
		        this.set('Content-Type', 'application/json');
		        this.send(JSON.stringify(param));
			}	
		};
		
};

