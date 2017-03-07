/**
 * make the request
 */


exports.Request = function(query,method,path,body,headers) {

		this.params = {};
		this.query = query;
		this.method = method;
		this.cookies = getCookies(headers);
		this.path = path;
		this.host = headers['Host'].split(":")[0];
		this.protocol = "http";
		this.body = body; 
		var headers = headers;
		
		this.get = function(header) {
			return headers[header];
		};
		
		this.param = function(p) {
			if (this.params[p]){
				return this.params[p];
			}else if ( this.query[p] ) {
				return this.query[p];
			}
			return undefined ;
		};
		
		this.is = function(type) {
	
			//var type = "application|audio|image|message|multipart|text|video|x-.*";
			var data = headers['Content-Type'];
			data = data.split(' ');
			var actualType = data[0];
			actualType = actualType.replace(';', '');
			if (type === actualType || type === actualType.substring(actualType.indexOf('/')+1)
				|| type === (actualType.substring(0, actualType.indexOf('/')) + '/*'))
				return true;
			else
				return false;
		
		};
};	


function isDefined(obj){
	//Coerces obj to boolean. If it was false (like 0, null, undefined, etc.), it will be false, otherwise, true.
	return !!obj;
}

function getCookies(headers) {

    var cookies = {};
    var item;
    var list;
    var pair;
    if (headers['Cookie']) {
    	list = headers['Cookie'].split(";").filter(isDefined);
		for (var i = 0; i < list.length; i++) {
		
			item = list[i];
    		pair = item.trim().split("=");
    		cookies[pair[0]] = pair[1];
    		
    	}
    }

    return cookies;
}



