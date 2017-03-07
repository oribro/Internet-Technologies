/**
 * server
 */

const MAX_CONNECTIONS = 1000;
var net = require('net');
var Request = require('./request.js');
var RequestParser = require('./requestParser.js');
var Response = require('./response.js');
var commands = [];



//hujiwebserver.js:
module.exports = {
    use: function(c,mw){
    	if ( typeof mw != "undefined")
    	{
    		commands.push({command:c,middleware:mw});
    	}
    	else
    	{
    		commands.push({command:'/',middleware:c});
    	}
        return this;
    },
    start :function(port,callback){

		var connectionNum = 0;
		var getRequest = function (req, res, middles) {
				
				if ( middles.length > 0 )
				{
			    	try {
			    		var middle = middles.shift();
			    		req.params = parseParams(middle.command, req.path);
			    		var mw = middle.middleware;

                        mw(req, res, function () {
                            getRequest(req, res, middles);
                        });
                    }
                    catch (e) {
                        res.status(500);
                        res.send('SERVER_ERROR');
                    }
					
				}else {
					res.status(404);
                    res.send('REQUESTED_RESOURCE_NOT_FOUND');
				}
          };
          
          var server = net.createServer();
          
         console.log("SERVER CREATED");
         
         server.on('connection', function(socket) {
			
			if (connectionNum >= MAX_CONNECTIONS) {
                console.log("REACHED MAXIMUM CONNECTIONS LIMIT: " + connectionNum);
                socket.end();
                return;
            }
            connectionNum ++;
        	var httpRequest ="";
        	var timeoutMiddle;
			//initialize timer
			var connectTimer = setTimeout(function() {
                socket.end();
                console.log("CONNECTION TIMEOUT");
            }, 25000);

			socket.on ('data',function(data){
				httpRequest += data;
				var request = new RequestParser.parse(httpRequest);
				
                httpRequest = "";
                var response = new Response.Response(socket);
                
                var middles = getMiddleware (request.path, commands ) ; 
                
                timeoutMiddle = setTimeout(function () {
                    response.status(404);
                    response.send('MIDDLEWARE TIMEOUT');
                }, 10000);
                
                getRequest(request, response, middles);
                
			});
			
			socket.on('error', function(err){
        		socket.end();
   		 	});
   		 	socket.on('end', function(err){
   		 		connectionNum --;
        		console.log("socket ended");
        		clearTimeout(timeoutMiddle);
                clearTimeout(connectTimer);
   		 	});
        });
        
    
        var serverObj = {'port': port};
        
        //allow you stop listening 
        serverObj.stop = function(){
        	server.close();
    	};
		server.on('error', function(err){
			if (typeof(callback) === "function") {
				callback(err);
			};
		});
		server.listen(port, function() {
            if (typeof(callback) === "function") {
                callback();
            };
        });
		
		return serverObj;
	}
};
function isDefined(obj){
	//Coerces obj to boolean. If it was false (like 0, null, undefined, etc.), it will be false, otherwise, true.
	return !!obj;
}
function getMiddleware(reqCommand, commands) {
    var result = [];
    reqCommand = reqCommand.split("?")[0].split("/").filter(isDefined);
    commands.forEach(function(pair) {
        var command = pair.command.split("/").filter(isDefined);
        if (command.length > reqCommand.length) {
            return;
        }
        for (var i=0; i <= command.length; i++) {
            if (i === command.length) {
                result.push(pair);
                break;
            }
            if ((command[i]!==reqCommand[i]) && (!command[i].startsWith(":"))) {
                break;
            }
        }
    });
    return result;
}

function parseParams(command, path) {
    var params = {};
    path = path.split("?").filter(isDefined)[0].split("/").filter(isDefined);
    command = command.split("/").filter(isDefined);
    for (var i = 0; i < command.length; i++) {
        if (command[i].startsWith(':')) {
            params[command[i].substr(1)] = path[i];
        }
    }
    return params;
}
