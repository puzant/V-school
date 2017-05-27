function display() {
    $.get('http://swapi.co/api/people/', function (data) {
        console.log(data);
        var starwars = data.results;

        for (var i = 0; i < 10; i++) {
            $('#starwars').append('<p>' + starwars[i].name + '</p>');
        }
    })
}

function display2() {
    $.get('http://swapi.co/api/people/', function (data) {
                console.log(data);
                var starwars2 = data.results;
                for (var i = 0; i < 10; i++) {
                    $('#starwars2').append('<p>' + starwars2[i].homeworld + '</p>');

                }

            })
}
