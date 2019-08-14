
function insert(){
 	var person = prompt("please enter your name");
 	if (person != null) {
 		document.getElementById("insert").innerHTML = "Hello " + person + ", nice work! Let's start"
 	}
 }

 ///Fahrenheit to Celsius
 function Convert(){
	var a = parseInt(document.getElementById("Fahrenheit").value);
	var base;
	base = (a - 32) * 5/9
	document.getElementById("resultOfConvert").innerHTML = base;
}




/// Asking Question 
function CheckOfQuestion1(){
	if (document.getElementById("optionA").checked) {
		alert("Correct!");
	} else {
		alert("Wrong");
	}
}



/// Secend part of question 3

function checkOfQuestion2(){
	if (document.getElementById("numA").checked) {
		alert("Correct!");
	} else {
		alert("wrong");
	}

}


/// Check your Age
function Age(){
	var a = parseInt(document.getElementById("age").value)
	if (a<0) {
		alert("you’re kidding, right?");
	}else if (a==0) {
		alert("oh Baby, how can you work with computer that early in life");
	} else if (a>=100) {
		alert("you are too old to play!");
	}else
	alert("ok let's play!")
	


}




//// Even or Odd numbers
function Number(){
	var b = parseInt(document.getElementById("numbers").value)
if (b%2==0) {
	alert("Even number");}
	else{
		alert("Odd number")
	}

}


