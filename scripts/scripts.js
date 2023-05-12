
function changeColor() {
    var currentColor = document.getElementById("helloworld").style.color;
    var newColor = selectNewColor(currentColor);
    document.getElementById("helloworld").style.color = newColor;
}
function selectNewColor(currentColor) {
    var newColor = "";

    if (currentColor === "") {
        newColor = "newColor";
    } else if (currentColor === "red") {
        newColor = "orange"
    } else if (currentColor === "orange") {
        newColor = "yellow"
    } else if (currentColor === "yellow") {
        newColor = "green"
    } else if (currentColor === "green") {
        newColor = "blue"
    } else if (currentColor === "blue") {
        newColor = "purple"
    } else if (currentColor === "purple") {
        newColor = "pink"
    } else if (currentColor === "pink") {
        newColor = "red"
    }
    
    return newColor;

}



