// Q1. Given a rating, display a star for each full rating and a a full-stop for each half rating.
// *--initialize an empty string
// *--loop through the rounded down rating
// *--add a star for every iteration
// *--if its not the last iteration, add a space
// *--if the number is not an integer, add a full stop
// *--return it 
// --------------------

function showRating(rating) {
    let ratings = "";
   for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*"; 
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";  
    }
}
if (!Number.isInteger(rating)) {
    ratings += " .";
}
return ratings;
}

console.log(showRating(3));
console.log(showRating(3.5));
console.log(showRating(0.5));

// Q2. Sort by lowest to highest price.
// Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

// Q3. Given a array of objects, return the prices sorted by hight to low.

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
]));

// Q4. Promises - see video
// https://app.fesinstitute.com/dashboard/fes/program/38/unit/179/lessons
