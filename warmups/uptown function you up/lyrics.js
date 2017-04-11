var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


function print(lyrics) {
    var song = "";
    for (var i = 0; i < lyrics.length; i++) {
        song = song + lyrics[i] + " ";
    }
    console.log(song);
}

function reverse(arr) {
  arr.reverse()
  console.log(arr);
}

function printOdd(arr) {
  for( var i=0; i<arr.length; i++) {
  if(i % 2 === 0) {
    console.log(arr[i]);
    }
  }
}
print(lyrics);
printOdd(lyrics);
reverse(lyrics);
