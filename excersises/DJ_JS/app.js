var x = document.getElementById("square");

x.addEventListener("mouseenter", myfunc);

function myfunc() {
    console.log("myfunc ran");
    x.style.backgroundColor = "#227aad";
}

function func2() {
    document.getElementById("square").style.backgroundColor = "red";
}

function func3() {
    console.log("func3 ran");
    document.getElementById("square").style.backgroundColor = "yellow";
}