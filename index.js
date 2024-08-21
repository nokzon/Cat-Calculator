// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearImage(){
    var imgContainer = document.getElementsByClassName("img-container");
    for (var i = 0; i < imgContainer.length; i++) {
        imgContainer[i].innerHTML = "";
    }
}

function clearDisplay(){

    display.value = "";

    clearImage();
}

function calculate(){
    try{
        var result = eval(display.value);
        display.value = result;

        var imgContainer = document.getElementsByClassName("img-container");
        for (var i = 0; i < imgContainer.length; i++) {
            for (var j = 0; j < result; j++) {
                var img = document.createElement("img");
                img.src = "cat-yawn.png";
                img.alt = "cat";
                imgContainer[i].appendChild(img);
            }
        }
        
    }

    catch{
        display.value = "error";

        clearImage();
    }
}