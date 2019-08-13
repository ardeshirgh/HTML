 function Hello(){
 	alert("Hello,World");
 	console.log("Test");
 }
 function GoodMorning(){
 	alert("GoodMorningEveryOne");

 }


 function insert() {
 	var person = prompt("please enter your name", "Harry Potter");
 	if (person != null) {
 		document.getElementById("insert").innerHTML = "Hello " + person + "! How are you today?"
 	}
 }






function sum(){
	var a = parseInt(document.getElementById('numA').value)
	var b = parseInt(document.getElementById('numB').value)
	var c = parseInt(document.getElementById('numC').value)
	var sum;
	sum = a+b+c;

	document.getElementById("result").innerHTML = sum; 
}



function Check(){
	if (document.getElementById("optionA").checked) {
		alert("Correct!");
	} else {
		alert("Wrong");
	}
}



function toUpper(){
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}






//Triangle

function area(){
	var a = parseInt(document.getElementById("numD").value)
	var b = parseInt(document.getElementById("numE").value)
	var area;
	area = (a*b)/2
	document.getElementById("resultOfTriangle").innerHTML = area;


}








//CONVERSION

function conversion(){
	var a = parseInt(document.getElementById("celcius").value);
	var base;
	base = a + 273.15
	document.getElementById("resultOfConversion").innerHTML = base;
}













