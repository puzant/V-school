//the code for counting the quantity and displaying the result
var total = [];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

function cal() {
    var price = 11;
    var c1 = document.getElementById("input");
    var inputVal = c1.value;
    var result = price * inputVal;
    var p = document.createElement("p");
    var txtNode = document.createTextNode(inputVal);
//    p.appendChild(txtNode);
    sum1 = result;
//    total.push(result);
    document.getElementById("demo").innerHTML = "the total is:" + " " + result;
        console.log(sum1);

}

function cal2() {
    var price2 = 5;
    var c2 = document.getElementById("input2");
    var inputVal2 = c2.value;
    var result2 = price2 * inputVal2;
    total.push(result2);
    //    console.log(result2); 
    document.getElementById("demo2").innerHTML = "the total is:" + " " + result2;
    sum2 = result2;
}


function cal3() {
    var price3 = 7;
    var c3 = document.getElementById("input3");
    var inputVal3 = c3.value;
    var result3 = price3 * inputVal3;
    total.push(result3);
    //    console.log(result3);
    document.getElementById("demo3").innerHTML = "the total is:" + " " + result3;
    sum3 = result3;
}


function calTotal() {
var totalSum = sum1 + sum2 + sum3;
    document.getElementById("totalSum").innerHTML = "the Total sum is: " + " " + totalSum;
}