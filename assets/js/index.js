$(document).ready(function() {

//question one
	
	function alternateString(size){
	    var num = ""

	    for (var i = 0; i < size; i++){
	        
	        if (num.slice(-1) === "1"){
	            num = num.concat("0");
	        } else {
	            num = num.concat("1");
	        };
	    };
	    return num;
	};
	console.log(alternateString(5));

//question two

	function order(num) {
		var arrayOne = (""+num).split('');
		var arrayTwo = [];
		
		for (i = arrayOne.length - 1; i >= 0; i--){
			arrayTwo[i] = parseInt(arrayOne.shift(), 10);
		};
		return arrayTwo;
	};

	console.log(order(12345));


});