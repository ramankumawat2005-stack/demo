// alert
alert('Hello, H3!');
// console.log
console.log('This is a message in the console.');
// document.write
document.write('Welcome to H3!');   
// prompt
var name = prompt('What is your name?');
alert('Hello, ' + name + '!');
// confirm
var isH3Fun = confirm('Do you think H3 is fun?');
if (isH3Fun) {
    alert('Great! H3 is indeed fun!');
}
else {
    alert('Oh no! Maybe you will find it fun later!');
}

// setTimeout
setTimeout(function() {
    alert('This message is displayed after 3 seconds!');
}, 3000);
// setInterval
var count = 0;
var intervalId = setInterval(function() {
    count++;
    console.log('Interval count: ' + count);
    if (count >= 5) {
        clearInterval(intervalId);
        console.log('Interval stopped after 5 counts.');
    }
}, 1000);


// Date
var currentDate = new Date();
console.log('Current date and time: ' + currentDate);
// Math
var randomNumber = Math.random();
console.log('Random number between 0 and 1: ' + randomNumber);
var roundedNumber = Math.round(randomNumber * 100);
console.log('Random number rounded to nearest integer: ' + roundedNumber);

// Array
var fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Fruits array: ' + fruits);