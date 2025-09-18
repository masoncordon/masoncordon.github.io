

function DefaultMode() {
    document.getElementById('mainPage').style="background-color: #faf0dc;";
    document.getElementById('condition').innerHTML = "Default";
}
function DarkMode(){
    document.getElementById('mainPage').style="background-color: #000000ff;";
    document.getElementById('condition').innerHTML = "Dark Mode";
}
function LightMode(){
    document.getElementById('mainPage').style="background-color: white;";
    document.getElementById('condition').innerHTML = "Light Mode";
}

//Calculator math
//Pyramid
function pMath(){
    let sideA = parseFloat(document.getElementById('pSideA').value);
    let sideB = parseFloat(document.getElementById('pSideB').value);
    let height = parseFloat(document.getElementById('pHeight').value);
    console.log(sideA);
    console.log(sideB);
    console.log(height);

    let volume = 1/3*(sideA * sideB * height);

    document.getElementById('pVolume').innerHTML = volume;
}

//Triangle
function tMath(){
    let sideA = parseFloat(document.getElementById('tSideA').value);
    let sideB = parseFloat(document.getElementById('tSideB').value);
    let sideC = parseFloat(document.getElementById('tSideC').value);

    let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    let semiperimeter = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)) / 2;
    let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));


    document.getElementById('tPerimeter').innerHTML = perimeter;
    document.getElementById('tSemiPerimeter').innerHTML = semiperimeter;
    document.getElementById('tArea').innerHTML = area;
}