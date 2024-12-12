// 1. Function to calculate the difference between two numbers
function calculateDifference(arg1, arg2) {
    return arg1 - arg2;
}

// 2. Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3. Function to find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str[0].toLowerCase() + str.slice(1);
}

// 7. Function to find the average of an array of numbers
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
console.log(calculateDifference(10, 5)); // Outputs: 5
console.log(isOdd(3)); // Outputs: true
console.log(findMin([3, 1, 4, 1, 5, 9])); // Outputs: 1
console.log(filterEvenNumbers([3, 1, 4, 1, 5, 9])); // Outputs: [4]
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); // Outputs: [9, 5, 4, 3, 1, 1]
console.log(lowercaseFirstLetter("Hello")); // Outputs: "hello"
console.log(findAverage([3, 1, 4, 1, 5, 9])); // Outputs: 3.8333333333333335
console.log(isLeapYear(2024)); // Outputs: true
console.log(isLeapYear(1900)); // Outputs: false