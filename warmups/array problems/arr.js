var arr = [1,5,8,9,14,54];
arr.reverse();


console.log(arr);


for(var i=0; i<arr.length; i++) {
    if(arr[i] % 2 !== 0) {
    arr[i] += 1;
  }
}

console.log(arr);


check(arr);


function check(arr) {
    var num=0;
    for(var i=0; i<arr.length; i++) {
      if(arr[i] > num) {
          num = arr[i];
      }
    }
    console.log(num);
}