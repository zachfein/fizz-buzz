// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:

let smallest = array[0];

for(let i=1; i<array.length; i++){
    if(array[i] < smallest){
        smallest = array[i];
    }
}

console.log(smallest);

