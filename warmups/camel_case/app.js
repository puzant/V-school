// Make a function that accepts a str and turns it into camel case.
// The strings will be separated by spaces, dashes, underscores into camel case junctions.
function camelCaser(str) {
     //check if dashes or spaces or underscores
    if(str.indexOf("_") !== -1){
        var splitStr = str.split("_");
    } else if(str.indexOf("-") !== -1) {
        var splitStr = str.split("-");
    } else if(str.indexOf(" ") !== -1) {
        var splitStr = str.split(" ");
    } else {
        console.log("sorry we found no spaces, dashes, or underscores");
    }
    
    
    for(var i = 1; i < splitStr.length; i++) {
        var firstLetter = splitStr[i].charAt(0);
        splitStr[i] = splitStr[i].replace(firstLetter, firstLetter.toUpperCase());
    }
    
    var newStr = splitStr.join("");
    console.log(newStr);
    
    // give each word (after the first word) an upper case letter
}
camelCaser("puzant_goes_shopping_for_gucci popcorn");
