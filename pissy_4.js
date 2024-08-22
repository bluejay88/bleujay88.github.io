document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Check if the current document is pissy_4.html
            if (window.location.pathname.endsWith('pissy_4.html')) {
                // Prevent default behavior if the current document is pissy_4.html
                event.preventDefault();
                
                // Extract the target ID from the href attribute
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
    
                // Smooth scroll to the target section if it exists
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not pissy_4.html, do not prevent the default behavior
                // This allows the browser to handle the navigation
            }
        });
    });
    

    const contactLink = document.querySelector('nav a[href="#section4"]');

    //contactLink.addEventListener('click', function(event) {
    //    event.preventDefault();
    //    window.location.href = 'mailto:contact@AnchorWebDesigns.com?subject=Hi I am contacting you from AnchorWebDesigns.com about services';
    //});

    // Add horizontal scrolling with mouse wheel
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

    // Arrow click navigation
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const direction = this.classList.contains('previous') ? -1 : 1;
            horizontalScroll.scrollBy({
                left: direction * window.innerWidth,
                behavior: 'smooth'
            });
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
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
});



const pageHeadingsAnimation = (words, id, colors) => {
    // Get the target element
    const targetElement = document.getElementById(id);
    if (!targetElement) return;
    

    // Create the HTML structure for the animation
    targetElement.innerHTML = `
        <span id="${id}-text"></span>
        <div class="console-underscore" id="${id}-console">&#95;</div>
    `;

    // Set the initial styles for the target element
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css?family=Khula:700');

        #${id}-text {
            font-family: Khula, sans-serif;
            font-size: 2.5em;
            color: ${colors[0]};
            display: flex;
        }

        .console-underscore {
            display: flex;
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

    // The consoleText function for the typing animation
    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
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
document.addEventListener('DOMContentLoaded', function() {
    pageHeadingsAnimation(['Anchor Web Design'], 'landing-page-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Services'], 'services-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['About Us'], 'about-us-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Contact Us'], 'contact-us-heading', ['tomato', 'rebeccapurple', 'lightblue']);
    pageHeadingsAnimation(['Port<br>folio'], 'portfolio-heading', ['tomato', 'rebeccapurple', 'lightblue']);
});
// Hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('show');
  }

// Design Card for Services
 // Change The Picture, Text, Description, and Associated Element Color when Theme Options Are Clicked.
 $(".product-colors span").click(function () {
    var id = $(this).attr('id').split('-')[1];
    var colorPrimary = $(this).attr("data-color-primary");
    var colorSecondary = $(this).attr("data-color-sec");
    var imagePath = $(this).attr("data-pic");
    var hoverImagePath = $(this).attr("data-hover-pic");
    var text = $(this).attr("data-text");
    var desc = $(this).attr("data-desc");

    $(".product-colors span").removeClass("active");
    $(this).addClass("active");

    $("#product-title" + id).css("color", colorSecondary);
    $("#product-price" + id).css("color", colorSecondary);
    $("#imgBx" + id).css("background", colorSecondary);
    $("#contact-button" + id).css("background", colorSecondary);
    $("#product-image" + id).attr('src', imagePath);
    $("#product-title" + id).text(text);

    $(".product-description").hide();
    $(desc).show();

    $(".product-image").hover(
        function () {
            $(this).attr('src', hoverImagePath);
        }, function () {
            $(this).attr('src', imagePath);
        }
    );
});

// Initial hover effect
$(".product-image").hover(
    function () {
        $(this).attr('src', '25.png');
    }, function () {
        $(this).attr('src', '24.png');
    }
);
