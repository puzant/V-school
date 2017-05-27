function checkStr(phrase) {
  var newArr = [];
  var phraseArr = phrase.split(' ');
  var num = 0;
  for(var i=0; i<phraseArr.length; i++) {
    if(phraseArr[i].length > num) {
      num = phraseArr[i].length;
      newArr.push(phraseArr[i]);
    }
  }
  return newArr.slice(-1).pop();
}

checkStr("hello therelllllkkk this is a text sjdhadasdfjsdhgf");