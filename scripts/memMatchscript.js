let map = [];
let shuffledArray = [];
let tile1 = null, tile2 = null;

const loadMap = (rows = 4, cols = 4) => {
    // set up array and check how many pairs we need
    // also check if grid is even
    let array = [];

    let maxValue = (rows * cols) / 2;
    if (rows * cols % 2 !== 0) {
        alert("Grid needs to be even!");
        return;
    }

    // fill array with pairs of numbers
    for (let i = 1; i <= maxValue; i++){
        array.push(i, i);
    }    

    // copy and shuffle into `array'
    shuffledArray = shuffle(array.slice(), rows, cols);

    console.log("Max value: " + maxValue);
    console.log("rows: " + rows);
    console.log("cols: " + cols);
    console.log("Pair count: " + maxValue);
    console.log("Number array: " + array);
    
}

const shuffle = (shuffledArray, rows, cols) => {
    //implementing Fisher-Yates shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        let temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }

    //check if it's actually shuffled
    console.log("Shuffled array: " + shuffledArray);
    sendTo2D(shuffledArray, rows, cols);
    return shuffledArray;

}

const sendTo2D = (shuffledArray, rows, cols) => {
    //transfer shuffled array to global variable as a 2D array
    if (shuffledArray.length !== rows * cols) {
        throw new Error('shuffledArray length does not equal rows * cols');
    }
    for (let i = 0; i < rows; i++){
        map[i] = [];
        for (let j = 0; j < cols; j++){
            map[i][j] = shuffledArray[i * cols + j];
        }
        
    }
    // check if the array is actually 2D
    console.log("2D array:", map);
    return map;
}