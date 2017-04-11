//function that takes tow arguments
//arguemnts are weather and tempreturre

function weatherChecker(weather, temp) {

    if (weather === "rainy" && temp > 15) {
        console.log("bring an unmberlla");
        
    } else if (weather === "rainy" && temp < 15) {
        console.log("bring an umberlla and a jacket");
        
    }else if (weather === "sunny" && temp > 15) {
        console.log("wear a t-shitr");

    }else if (weather === "sunny" || weather === "rainy" && temp > 19) {
        console.log("tempreture is greater than 19, wear a t-shirt");
    }
}


weatherChecker("sunny", 19)