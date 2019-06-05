
//Show and hide size when click the size buttons
function show(size) {
    var showedValue = document.getElementById("chosenSize").innerHTML;
    switch (size) {
        case "s":
            //If already chosen, clear the size and border
            if (showedValue == "S") {
                document.getElementById("chosenSize").innerHTML = "";
                document.getElementById("buttonS").style.border = "1px solid #CCCCCC";
            }
            else {
                document.getElementById("chosenSize").innerHTML = "S";
                document.getElementById("buttonS").style.border = "2px solid #222222";
                //clear other button border
                document.getElementById("buttonM").style.border = "1px solid #CCCCCC";
                document.getElementById("buttonL").style.border = "1px solid #CCCCCC";
            }
            break;
        case "m":
            //If already chosen, clear the size and border
            if (showedValue == "M") {
                document.getElementById("chosenSize").innerHTML = "";
                document.getElementById("buttonM").style.border = "1px solid #CCCCCC";
            }
            else {
                document.getElementById("chosenSize").innerHTML = "M";
                document.getElementById("buttonM").style.border = "2px solid #222222";
                //clear other button border
                document.getElementById("buttonS").style.border = "1px solid #CCCCCC";
                document.getElementById("buttonL").style.border = "1px solid #CCCCCC";
            }
            break;
        case "l":
            //If already chosen, clear the size and border
            if (showedValue == "L") {
                document.getElementById("chosenSize").innerHTML = "";
                document.getElementById("buttonL").style.border = "1px solid #CCCCCC";
            }
            else {
                document.getElementById("chosenSize").innerHTML = "L";
                document.getElementById("buttonL").style.border = "2px solid #222222";
                //clear other button border
                document.getElementById("buttonM").style.border = "1px solid #CCCCCC";
                document.getElementById("buttonS").style.border = "1px solid #CCCCCC";
            }
            break;
        default:
            document.getElementById("chosenSize").innerHTML = "";
            document.getElementById("buttonS").style.border = "1px solid #CCCCCC";
            document.getElementById("buttonM").style.border = "1px solid #CCCCCC";
            document.getElementById("buttonL").style.border = "1px solid #CCCCCC";
    }
};


function showCart() {
    document.getElementById("popup").style.display = "block";
};

function hideCart() {
    document.getElementById("popup").style.display = "none";
};

function addToCart() {
    var showedValue = document.getElementById("chosenSize").innerHTML;
    if (showedValue == "")
        document.getElementById("errorMesg").innerHTML = "Please choose a size.";
    else {
        if (document.getElementById("errorMesg").innerHTML != "")
            document.getElementById("errorMesg").innerHTML = "";
        else {

            /*
            Functions that add order to the cart...
            */

        }

    }

};


