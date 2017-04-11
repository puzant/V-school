function addCandy() {
    var input = document.getElementById("input");
    var txt = document.createTextNode(input.value);
    var li = document.createElement("li");
    li.appendChild(txt);
    document.getElementById("candy-list").appendChild(li);
}