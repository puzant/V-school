var form = document.querySelector('form');
var checkedValue = null;

function checkBox() {
    for(var i=0; i<form.diet.length; i++) {
        if(form.diet[i].checked) {
            checkedValue = form.diet[i].value;
            break;
        }
    }
}



function display() {
    checkBox();
    alert(
    'first name: ' + form.fname.value + '\n ' +  
    'last name: ' + form.lname.value + '\n' + 
        'age: ' + form.age.value + '\n' + 
        'gender: ' + form.gender.value + '\n' + 
        'location: ' + form.location.value + '\n' + 
        'dietary restrictions: ' + checkedValue
    );
}