var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
fruit.splice(0,1);
var index = fruit.indexOf('orange');
fruit.push(index);
var length = vegetables.length;
vegetables.push(length);

var food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();


//console.log("fruit: ", fruit);  
//console.log("vegetables: ", vegetables); 
//console.log(length);
//console.log(food);
console.log(food);
console.log(food.toString());