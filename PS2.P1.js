function* first(n , current=0, next=1){
    if (n === 0){
        // returns if 0 is the n
        return current;
    }
    // returns current if n is not zero
    yield current;
    yield *first(n-1,next, current+next);
}

function* second(current ,num){
    //using the first() to find the num even numbers in the fibonacci sequence
    if (num === 0){
        // stops the function, when num even number have been found.
        return num;
    }
    // using the first() generator to find current number of fibonacci numbers
    let arr =[...first(current)];
    // checking if the last value from the arr if even or odd
    if (arr[arr.length-1] %2 === 0 ) {
        // returns the even number
        yield arr[arr.length - 1];
        // continues the generator while incrementing the current and decrementing the num
        yield *second(current + 1, num-1);
    }
    else{
        // continue the generator while incrementing the current, and not modifying the num
        // the num is only decremented if the last value of fibonacci sequence is even.
        yield *second(current+1, num);
    }
}
let arrSec=[...second(current=0,6)];
console.log(arrSec);

