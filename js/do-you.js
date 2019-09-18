var answer = prompt('Do you like Soccer? yes/no');
if (answer === 'yes') {
    message = ' I love that! soccer is awesome!';
} else if (answer === 'no') {
    message = ' ok fine... ';
} else {
    message = ' soccer is cool!';
}
document.write('<div class="fun">' + message + '</div>');