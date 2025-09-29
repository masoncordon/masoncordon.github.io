let inputArray = [];

function removeVar() {
    let cInput = document.getElementById("calcInput").value;
    cInput = Number(cInput);
    inputArray.pop(cInput);
    for(let i = 0; i < inputArray.length; i++){
        document.getElementById("dataset").innerHTML = inputArray[i];
    }
    //console.log(inputArray);

    mMath();
}

function addVar() {
    let cInput = document.getElementById("calcInput").value;

    if(isNaN(cInput)){
        alert("invalid number");
        return;
    }

    
    inputArray.push(cInput);
    document.getElementById("dataset").innerHTML = inputArray.join(", ");
    //console.log(inputArray);

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
    //console.log(result);
}