exports.print = function(data){
	if(data.errNum == 0){
		printToday(data.retData.today,data.retData.city);
		// printForecast(data.retData.forecast);
	}else{
		console.log(data);
	}
};

function printToday(today,city){
	var todayStr = "\n"+city+"天气"+today.type+"\n";
	todayStr += "当前温度： "+today.curTemp;
	todayStr +=" 今日最高: "+today.hightemp;
	todayStr +=" 今日最低: "+today.lowtemp;
	todayStr +=" PM: "+today.aqi;
	todayStr +="\n";
	console.log(todayStr);
}


