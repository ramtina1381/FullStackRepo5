// Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirstLetter(sentence){
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

let sentence1 = "the quick brown fox"
let capitalizedSentence = capitalizeFirstLetter(sentence1)
console.log(capitalizedSentence)

// Write a JavaScript program to find the largest of three given integers.

// 

// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three.

function swapLetters(s){
    if (s.length >= 3){
        lastThree = s.slice(-3)
        rest = s.slice(0, -3)
        return lastThree + rest
    }
    else{
        return s
    }
}
let swapped = swapLetters("python")
console.log(swapped)


// Write a JavaScript program to find the types of a given angle.
function angleType(n){
    if (n>0 && n<90){
        return "Acute Angle"
    }
    else if(n==90){
        return "Right angle"
    }
    else if(n > 90 && n <180){
        return "Obtuse angle"
    }
    else if(n == 180){
        return "Straight angle"
    }
    else{
        return "N/A"
    }
}
console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
// console.log(angleType(180))

function array_max_sum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    // Slide the window across the array and update the sum
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];  // Add the next element and remove the first one of the previous window
        maxSum = Math.max(maxSum, currentSum);  // Update maxSum if the new sum is larger
    }

    return maxSum;
}

// Example usage
console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))


