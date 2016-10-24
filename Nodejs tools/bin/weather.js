#!/usr/bin/env node

var args = process.argv.slice(2);



var request = require('request');
var config = require('../lib/config');
var output = require('./output');


var run = function(obj){
	if(!obj[0]){
		request.get(config.ip.url,function(error,response,body){
			var ipResult = JSON.parse(body);
			var opts = {
				url:config.ipToCity.url+ipResult.ip,
				headers:{
					"apikey":config.ipToCity.key
				}
			};
			request.get(opts,function(error,response,body){
				var cityNameResult = JSON.parse(body);
				getDataByCityName(cityNameResult.retData.city);
			});
		});
	}else{
		getDataByCityName(obj[0]);

	}
};



function getDataByCityName(str){
	str =  encodeURIComponent(str);
	var opts = {
		url:config.weather.url+str,
		headers:{
			"apikey":config.weather.key
		}
	};
	request.get(opts,function(error,response,body){
		if(!error && response.statusCode == 200){
			output.print(JSON.parse(body));
		}
	});
}

run(args);