document.getElementById("toggle-switch").addEventListener("click", function(){
    if (document.getElementById("toggle-switch").checked) {
    	console.log("Weather in Pacoima");
    	$.ajax({

    		url : 'http://api.openweathermap.org/data/2.5/forecast?id=5513307&APPID=9c8fd5e9295af747ca88dd12b9a7d930',
    		type : 'GET',
    		dataType:'json',
    		success : function(data) {              
        		var temp = 1.8 * (data.list[0].main.temp - 273) + 32;
        		temp = Number(Math.round(temp+'e2')+'e-2');
        		document.getElementById("temp").innerHTML = temp + "F";
    			document.getElementById("city").innerHTML = "Weather in Pacoima";

    		},
    	error : function(request,error)
    	{
        	alert("Request: "+JSON.stringify(request));
    	}
		});
    }
    else {
    	console.log("Weather in Northridge");
    	$.ajax({

    	url : 'http://api.openweathermap.org/data/2.5/forecast?id=4519950&APPID=9c8fd5e9295af747ca88dd12b9a7d930',
    	type : 'GET',
    	dataType:'json',
    	success : function(data) {              
        	var temp = 1.8 * (data.list[0].main.temp - 273) + 32;
        	temp = Number(Math.round(temp+'e2')+'e-2');
        	document.getElementById("temp").innerHTML = temp + "F";
    		document.getElementById("city").innerHTML = "Weather in Northridge";

    	},
    	error : function(request,error)
    	{
        alert("Request: "+JSON.stringify(request));
    	}
	});
    }
});

/* Northridge */
document.addEventListener("DOMContentLoaded", function(event) { 
  $.ajax({

    url : 'http://api.openweathermap.org/data/2.5/forecast?id=4519950&APPID=9c8fd5e9295af747ca88dd12b9a7d930',
    type : 'GET',
    dataType:'json',
    success : function(data) {              
        var temp = 1.8 * (data.list[0].main.temp - 273) + 32;
        temp = Number(Math.round(temp+'e2')+'e-2');
        document.getElementById("temp").innerHTML = temp + "F";
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});
});

/* make icons appear, depending on data.list[valuethatpertainstodatainAPI]
Example: data.list[somenumber] makes it cloudy.
data.list[someothernumber] makes it sunny.

*/



