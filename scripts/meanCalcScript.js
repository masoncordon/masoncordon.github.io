let inputArray = [];

function removeVar() {
    let Cinput = document.getElementById("calcInput").value;
    Cinput = Number(Cinput);
    inputArray.pop(Cinput);
    for(let i = 0; i < inputArray; i++){
        document.getElementById("dataset").innerHTML = inputArray[i];
    }
    console.log(inputArray);

    mMath();
}

function addVar() {
    let Cinput = document.getElementById("calcInput").value;

    if(isNaN(Cinput)){
        alert("invalid number");
        return;
    }

    
    inputArray.push(Cinput);
    for(let i = 0; i < inputArray; i++){
        document.getElementById("dataset").innerHTML = inputArray[i];
    }
    console.log(inputArray);

    mMath();
}

function mMath() {

    //add everything together
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++){
        sum += parseFloat(inputArray[i]);
    }

    //divide sum by the size of the array
    let result = sum / inputArray.length;

    //output the result
    document.getElementById("meanOut").innerHTML = result;
    console.log(result);
}