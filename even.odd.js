const number = 5;

reminder = number % 2;

if(reminder == 0){
    console.log('This number is even');
}
else{
    console.log('This number is odd');
}

// // Using Function determine  the even and odd numbers 

function evenOdd(number){
    var reminder = number % 2;
    if(reminder == 0){
        return reminder;
    }
else{
    return reminder;
    }
}
var result = evenOdd(8);

if(result == 0){
    console.log('This number is Even');
}
else{
    console.log('This  number is odd');
}

// ----------->>>>>>> other way to determine the odd and even number 

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1541;
var IsMyNumberEven = isEven(myNumber);
console.log('Is number is even: ', IsMyNumberEven);