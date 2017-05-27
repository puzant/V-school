$('document').ready(function () {

    $('table').hide();
    $('select').hide();
    $('span').hide();

});
var trashTalk = ["you're a loser", "lame", "so freakin bad", "why are you even posting"];
var checkedbox = document.querySelector('#checked');
var talk;

function display() {
    var name = $('#name').val();
    var game = $('#game').val();
    var score = $('#score').val();
    var date = $('#date').val();


    if (name !== "" && game !== "" && score !== "" && date !== "") {
        if (checkedbox.checked === true) {
            talk = trashTalk[~~(Math.random() * trashTalk.length)];

        } else if (checkedbox.cheked !== true) {
            talk = "";
        }

        //web storage will store the last input of the user
        localStorage.setItem('name', name);
        localStorage.setItem('game', game);
        localStorage.setItem('score', score);
        localStorage.setItem('date', date);
        localStorage.setItem('trash talk', talk);

        //get the items from the local storage
        //        var string = localStorage.name;
        //        alert(string);

        $('select').fadeIn();
        $('span').fadeIn();
        $('table').fadeIn().append(`<tr><td>${name}</td><td>${game}</td><td>${date}</td><td>${score}</td><td>${talk}</td></tr>`);

    } else if (name === "" || game === "" || score === "" || date === "") {
        validate();
    }
}

function validate() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}