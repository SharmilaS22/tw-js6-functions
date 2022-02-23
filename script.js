// Let's understand the basics of JS and implement few higher order functions as a part of this exercise. You can read about what each of these function does and them try to write your logic for the same. Do not use inbuilt functions.
// 1. map
// 2. filter
// 3. reduce
// 4. forEach


// Each of the above function takes 2 parameters. A list of numbers and a callback function that gets executed on the list

const arr = [2, 34, 4, 5, 5];


// Map Function

const mapReplica = (arr) => {

    const newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const elem = arr[index];
        newArr.push(elem * 2);
    }
    return newArr;
}



const arrUsingMap = arr.map(elem => elem * 2)
const arrWithoutMap = mapReplica(arr);

console.log(arr, arrUsingMap, arrWithoutMap);


// Filter function

const filterReplica = (elem) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element > 3)
            newArr.push(element);
    }
    return newArr;
}

const arrUsingFilter = arr.filter(elem => elem > 3)
const arrWithoutFilter = filterReplica(arr);

console.log(arr, arrUsingFilter, arrWithoutFilter)


// Reduce Function

const initialValue = 0;

const useReduceToFindSum = (arr) => {
    const sum = arr.reduce(
        (prev, curr) => prev + curr,
        initialValue
    );
    return sum;
}

const reduceReplica = (arr) => {

    var curr;
    var prev = initialValue;

    for (let index = 0; index < arr.length; index++) {
        const curr = arr[index];
        prev = prev + curr;
    }
    return prev;
}
console.log("--- Reduce function ---");
console.log(useReduceToFindSum(arr), reduceReplica(arr))


// ForEach method

const forEachReplica = (array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}

const callForEach = (arr) => {
    arr.forEach(elem => {
        console.log(elem);
    })
}

console.log("--- ForEach method ---")
console.log("Original Array")
console.log(arr);

console.log("ForEach");
callForEach(arr);

console.log("Without using forEach inbuilt function")
forEachReplica(arr)