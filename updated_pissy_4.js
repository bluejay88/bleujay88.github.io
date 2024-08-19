// Function to display the loading screen and initiate the text animation
function showLoadingScreen() {
    // Inject the loading screen HTML into the body
    document.body.innerHTML = `
    <div id="loading-screen" style="display: flex; justify-content: center; align-items: center; height: 100vh; background: black; color: white;">
        <div>
            <span id="text"></span>
            <div class="console-underscore" id="console">&#95;</div>
        </div>
    </div>
    `;

    // Call the text animation function
    consoleText(['Loading...'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
}

// Function to handle the navigation from any page to `pissy_4.html`
function navigateToPissy4() {
    showLoadingScreen(); // Show loading screen

    // Wait for the text animation to complete before redirecting
    setTimeout(function () {
        window.location.href = 'updated_pissy_4.html'; // Redirect to `pissy_4.html`
    }, 5000); // Adjust this timeout based on how long your animation takes
}

// Function to animate the console text
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}

// Event listener for the navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navigateToPissy4(); // Navigate to `pissy_4.html` with loading screen
        });
    });

    // Other existing functionalities
    const horizontalScroll = document.querySelector('.horizontal-scroll');
    horizontalScroll.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            this.scrollBy({
                left: event.deltaY < 0 ? -window.innerWidth : window.innerWidth,
                behavior: 'smooth'
            });
        }
    });

    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const direction = this.classList.contains('arrow-left') ? -1 : 1;
            horizontalScroll.scrollBy({
                left: direction * window.innerWidth,
                behavior: 'smooth'
            });
        });
    });

    const imageSides = document.querySelectorAll('.image-side');
    imageSides.forEach(imageSide => {
        const textSide = imageSide.nextElementSibling;
        imageSide.addEventListener('mouseover', () => {
            textSide.classList.add('resized');
        });
        imageSide.addEventListener('mouseout', () => {
            textSide.classList.remove('resized');
        });
    });

    const pageHeadingsAnimation = (words, id, colors) => {
        const targetElement = document.getElementById(id);
        if (!targetElement) return;
        targetElement.innerHTML = `
            <span id="${id}-text"></span>
            <div class="console-underscore" id="${id}-console">&#95;</div>
        `;
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css?family=Khula:700');
            #${id}-text {
                font-family: Khula, sans-serif;
                font-size: 2.5em;
                color: ${colors[0]};
                display: inline;
            }
            .console-underscore {
                display: inline-block;
                position: relative;
                top: -0.14em;
                left: 5px;
                font-size: 2.5em;
                font-family: Khula, sans-serif;
                color: ${colors[0]};
            }
            .hidden {
                opacity: 0;
            }
        `;
        document.head.appendChild(style);
        consoleText(words, id, colors);
    };

    pageHeadingsAnimation(['Anchor Web Design'], 'landing-page-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Services'], 'services-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['About Us'], 'about-us-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Contact Us'], 'contact-us-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Portfolio'], 'portfolio-heading', ['tomato', 'rebeccapurple', 'lightblue']);
});
