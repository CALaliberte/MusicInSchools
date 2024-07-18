var colors = ['#ffcccc', '#ffebcc', '#ffffcc', '#eaffcc', '#ccffcc', '#ccffeb', '#ccffff', '#cce6ff', '#ccccff', '#e6ccff'];
var currentIndex = 0;
var transitionDuration = 2000;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.transition = `background-color ${transitionDuration}ms ease`;
}

setInterval(changeBackgroundColor, transitionDuration); // Change the background color every 2 seconds