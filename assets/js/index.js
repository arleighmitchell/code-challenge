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

	




});