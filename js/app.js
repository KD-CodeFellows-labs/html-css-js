function addName() {
    var userName = prompt('Hi, What is your name?');
    if ((userName == null) ) {userName = 'Visitor';}
    return '<div class="fun">' + 'Hi ' + userName + ', ' + '</div>'
}

function askQuestion() {
    var answer = prompt('Do you like Soccer? yes/no');
    var message;
    if (answer === 'yes') {
        message = ' I love that! soccer is awesome!';
    } else if (answer === 'no') {
        message = ' ok fine... ';
    } else {
        message = ' soccer is cool!';
    }
    return '<div class="fun">' + message + '</div>';
}

function greetUser() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    return '<div class="fun">' + greeting + '</div>';
}