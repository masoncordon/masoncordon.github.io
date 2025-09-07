

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