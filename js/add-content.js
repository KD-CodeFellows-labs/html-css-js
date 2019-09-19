// insert code here
var today = new Date();
var hourNow = today.getHours();
var greeting;

while(answer === ''){
    answer = prompt("do you like dogs yes/no");
}

while (answer !== 'yes' && answer !== 'no') {
    answer = prompt("do you like dogs, please answer yes or no");
}

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<div class="fun">' + greeting + '</div>');