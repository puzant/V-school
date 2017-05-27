//the code for counting the quantity and displaying the result
var total = [];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

var result1;
var result1;
var result2;
var result3;


$('#btn').on('click' ,function cal() {
    var price = 11;
    var value = $('#input').val();
     result1 = price * value;
    $('#demo').append(result1);
})

$('#btn1').on('click' ,function cal2() {
    var price2 = 5;
    var value2 = $('#input2').val();
     result2 = price2 * value2;
    $('#demo2').append(result2);
})


$('#btn2').on('click' ,function cal3() {
    var price3 = 7;
    var value3 = $('#input3').val();
     result3 = price3 * value3;
    $('#demo3').append(result3);
})



$('#btn3').on('click' ,function calTotal() {
    var totalSum = result1 + result2 + result3;
    $('#totalSum').append(totalSum);
})




