var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];


function attempCall(names, call, dontCall, sendText) {
    for (var i = 0; i < names.length; i++) {
        if (names[i].indexOf('a') >= 2 || names[i].indexOf('A') >= 2) {
            console.log(names[i]);
            sendText();
        } else if (names[i].length % 2 !== 0) {
            console.log(names[i]);
            dontCall();
        } else if (names[i].length % 2 === 0) {
            console.log(names[i]);
            call();
        }
    }
}

function call() {
    console.log("was called");
}

function dontCall() {
    console.log("wasn't called");
}

function sendText() {
    console.log('send text');
}


attempCall(names, call, dontCall, sendText);