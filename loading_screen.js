const strings = ["Website Design", "Digital Marketing", "Ecommerce", "Logo Design", "Small Business Owners", "Anchor Web Design Studio"];
const container = document.getElementById('text-container');
let currentIndex = 0;

function showText() {
    if (currentIndex < strings.length) {
        container.textContent = strings[currentIndex];
        container.className = ''; // Reset class

        // Apply different classes for bounce direction
        switch (currentIndex % 4) {
            case 0:
                container.classList.add('bounce-left');
                break;
            case 1:
                container.classList.add('bounce-right');
                break;
            case 2:
                container.classList.add('bounce-up');
                break;
            case 3:
                container.classList.add('bounce-down');
                break;
        }

        // Remove and re-add the class to restart the animation
        container.style.animation = 'none';
        container.offsetHeight; // Trigger a reflow, flushing the CSS changes
        container.style.animation = '';

        currentIndex++;
        setTimeout(showText, 2000); // Wait for animation to complete before showing next text
    } else {
        // Redirect to a predetermined HTML page after 2 seconds
        setTimeout(function() {
            // Retrieve the target URL from query parameters
            const urlParams = new URLSearchParams(window.location.search);
            const target = urlParams.get('target') || 'default.html'; // Fallback URL if no target specified
            window.location.href = target;
        }, 2000);
    }
}

window.onload = function() {
    showText();
};
