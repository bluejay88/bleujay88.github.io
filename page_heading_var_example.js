const pageHeadingsAnimation = (words, id, colors) => {
    // Create the HTML structure for each animation
    const animationContainer = document.createElement('div');
    animationContainer.className = 'console-container';
    animationContainer.innerHTML = `
        <span id="${id}-text"></span>
        <div class="console-underscore" id="${id}-console">&#95;</div>
    `;

    // Insert the container into the target element
    const targetElement = document.getElementById(id);
    targetElement.innerHTML = ''; // Clear existing content
    targetElement.appendChild(animationContainer);

    // Create and inject the CSS styles (only done once)
    if (!document.getElementById('console-animation-style')) {
        const style = document.createElement('style');
        style.id = 'console-animation-style';
        style.innerHTML = `
            @import url(https://fonts.googleapis.com/css?family=Khula:700);

            .hidden {
                opacity: 0;
            }

            .console-container {
                font-family: Khula;
                font-size: 1.5em; /* Smaller font size */
                text-align: center;
                height: 100px;
                width: 300px;
                display: inline-block;
                color: black;
                margin: 20px auto; /* Center the animation within its section */
            }

            .console-underscore {
                display: inline-block;
                position: relative;
                top: -0.14em;
                left: 5px;
            }
        `;
        document.head.appendChild(style);
    }

    // The consoleText function for the typing animation
    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#000'];
        let visible = true;
        const con = document.getElementById(`${id}-console`);
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        const target = document.getElementById(`${id}-text`);
        target.setAttribute('style', 'color:' + colors[0]);

        window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function () {
                    const usedColor = colors.shift();
                    colors.push(usedColor);
                    const usedWord = words.shift();
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

    // Start the animation
    consoleText(words, id, colors);
};

// Initialize animations for different sections
pageHeadingsAnimation(['About Us'], 'about-us-heading', ['tomato', 'rebeccapurple', 'lightblue']);
pageHeadingsAnimation(['Our Services'], 'services-heading', ['tomato', 'rebeccapurple', 'lightblue']);


