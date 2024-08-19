// Initialize the console text animation and event handling
function initializeConsoleTextAnimation() {
    // Initial function to run when the webpage first loads
    console.log("Webpage has loaded. Starting text animation.");
    consoleText(['Services'], 'text', ['tomato', 'rebeccapurple', 'lightblue', 'tomato', 'rebeccapurple', 'white']);
}

// Function to display animated text and handle color changes
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff']; // Default color if none provided
    var visible = true; // Visibility toggle for the underscore
    var con = document.getElementById('console'); // Element for the blinking underscore
    var letterCount = 1; // Tracks the current letter position
    var x = 1; // Increments or decrements the letter count
    var waiting = false; // Controls the timing between word transitions
    var target = document.getElementById(id); // Target element to display the text
    target.setAttribute('style', 'color:' + colors[0]); // Set initial text color

    // Interval function to animate the text
    var textAnimationInterval = window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function() {
                var usedColor = colors.shift(); // Rotate color array
                colors.push(usedColor);
                var usedWord = words.shift(); // Rotate word array
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1; // Start deleting the word
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }

        // Check if the full word has been displayed and then deleted
        if (letterCount === 0 && words[0].length > 0) {
            clearInterval(textAnimationInterval); // Stop the text animation
            setTimeout(function() {
                window.location.href = "pissy_4.html"; // Redirect to another page after 2 seconds
            }, 2000);
        }
    }, 120);

    // Interval function to blink the underscore
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}

// Event listener for when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeConsoleTextAnimation();
});
