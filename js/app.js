function addName() {
    var userName = prompt('Hi, What is your name?');
    if ((userName == null) ) {userName = 'Visitor';}
    return '<h3 class="fun">' + 'Hi ' + userName + ', ' + '</h3>'
}

function askQuestion() {
    var answer = confirm('Are you a Ball Hog?');
    var message;
    if (answer === true) {
        message = ' Great, you are a Ball Hogs also, soccer is awesome!';
    } else if (answer === false) {
        message = " Well ok, you're not a Ball Hog, nobody is perfect!";
    } else {
        message = ' Soccer is cool!';
    }
    return '<h3 class="fun">' + message + '</h3>';
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
    return '<h3 class="fun">' + greeting + '</h3>';
}
