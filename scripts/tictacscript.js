let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function checkWin() {
    
}