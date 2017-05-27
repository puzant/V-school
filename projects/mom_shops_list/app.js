function createList() {
    //get input val
    var inputval = document.getElementById("input").value;
    if(inputval === " ") {
        return " ";
    }
    var li = document.createElement("li");
    var textnode = document.createTextNode(inputval);
    var button = document.createElement("button");
    button.innerHTML = "X";
    li.appendChild(button);
    li.appendChild(textnode);

    
    //attach li to ul
    var ul = document.getElementById("list");
    ul.appendChild(li);
    
    button.addEventListener("click", function() {
        ul.removeChild(this.parentElement);
    });
}
