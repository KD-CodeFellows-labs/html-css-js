function addName() {
    var userName = prompt('Hi, What is your name?');
    if ((userName == null) || (userName == '') ) {userName = 'Visitor';}
    return '<h3 class="fun">' + 'Hi ' + userName + ', ' + '</h3>';
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

function howMany(){
    var count = prompt('How many balls do you want to order?');
    while(count === '' || isNaN(count)){
      count = prompt('Please enter a number.  How many do you want to order?');
    }
    return Number(count);
}

function getItem(){
    var order = '';
    var item;
  
    while(order === ''){
      order = prompt('What size ball would you like to order, 4 or 6?');
    }
    
    if (order === '4'){
      item = ' size' + order + ' <img class="size4"';
    } else if (order === '6'){
      item = ' size' + order + ' <img class="size6"';
    } 
    else {
      item = '<strong>No items ordered</strong>';
    }
    return item;   
}

function showOrder(){
    var item = getItem();
    var total = howMany();
    var result = '';
  
    for(var i = 0; i < total; i++){
      var realCount = i + 1;
      result = result + '<div class="loop">' + ' Ball#' + realCount + item + ' src="images/ball.png" ' + '</div>'
    }
    return result;
}