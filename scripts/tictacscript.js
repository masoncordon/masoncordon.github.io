let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;
    let displayTurn = document.getElementById("tictacTurn").innerHTML;
    let colorChange = document.getElementById(buttonId);

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById("tictacTurn").innerHTML = "O";
            colorChange.style.color = "red";
            colorChange.style.fontSize = "1.5rem";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById("tictacTurn").innerHTML = "X";
            colorChange.style.color = "blue";
            colorChange.style.fontSize = "1.5rem";
        }
    
        xTurn = !xTurn;
        checkWin();
    }
}

function checkWin() {
    //get inputs from the grid (i feel like this could be more efficient but i don't know how </3)
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;

    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;

    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    //employ logic using the Undertale Method(TM)
    //there's totally a better way for this. trying to read anything in this function
    //makes my eyes glaze over and my brain lose all function.

    //horizontal logic
    if (a1 == b1 && b1 == c1 && a1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } else if (a2 == b2 && b2 == c2 && a2 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } else if (a3 == b3 && b3 == c3 && a3 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } 
    //vertical logic
    else if (a1 == a2 && a2 == a3 && a1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (a1 == a2 && a2 == a3 && a1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } else if (b1 == b2 && b2 == b3 && b1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (b1 == b2 && b2 == b3 && b1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } else if (c1 == c2 && c2 == c3 && c1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (c1 == c2 && c2 == c3 && c1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } 
    //diagonal logic
    else if (a1 == b2 && b2 == c3 && a1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } else if (c1 == b2 && b2 == a3 && c1 == "X") {
        document.getElementById("switchForWin").innerHTML = "X wins!!!";
    } else if (c1 == b2 && b2 == a3 && c1 == "O") {
        document.getElementById("switchForWin").innerHTML = "O wins!!!";
    } 
    
}

//resets the buttons per instructions (also sets xTurn back to true and the turn condition back to default),
//but does not actually let the player... play again without reloading the page. I cannot think of any way to fix this,
//but I'm going to assume it's okay since the instructions do not include that part, I don't remember that being
//mentioned in any of the lectures, and the example code provided is written like this.

function resetGame() {
    document.getElementById("switchForWin").innerHTML = "Current turn: X";
    xTurn = true;

    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";

    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

}