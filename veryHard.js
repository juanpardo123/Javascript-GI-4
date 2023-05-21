// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

let nums =  [1,2,5,7,6,5,4,5,67];
let nums2 = [2];

function coinBination(coinsArr, value){

    let sorted = reverse(sort(coinsArr));
    let currentCount = 0;
    let currentValue = 0;



    sorted.forEach(e => {
        let tempValue = value - currentValue;
        if(e <= tempValue){
            currentCount += (Math.floor(value / e));
            currentValue += currentCount * e;
            
        }
    })

    return currentCount;

    
}

function sort(arr){
    //selection sort
    let sortedArr = arr;
    let bounds = arr.length-1;
   
    while(bounds > 0){
   for (let i = 0; i < bounds ; i++){
        let temp = 0;
        if(sortedArr[i] > sortedArr[i+1]){
            temp = sortedArr[i+1];
            sortedArr[i+1] = sortedArr[i];
            sortedArr[i] = temp;
        }
     }
     bounds--;
    }
    return sortedArr;
}

function reverse(arr){
    let newArr = []
    for(let i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}


console.log(`${coinBination(nums, 11)} <<<<<<_`);
console.log(`${coinBination(nums2, 3)} <<<<<<_`);