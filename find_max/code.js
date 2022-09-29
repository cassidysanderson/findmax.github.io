var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")

var a = Number(input1.value)
var b = Number(input2.value)
var c = Number(input3.value)

var btn = document.getElementById("btn1")
btn.addEventListener('click', myFunction);

function myFunction (a,b,c){
    var a = Number(input1.value)
    var b = Number(input2.value)
    var c = Number(input3.value)

    var d;
    d = a > b ? a : b;
    d = d > c ? d : c;
    var maximum = document.getElementById ("maximum")
    maximum.innerHTML = d


}