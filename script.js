// Part 2: Animate Box on Button Click
// This function triggers the box animation when the button is clicked.
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');

animateButton.addEventListener('click', function() {
    // Add the 'animate' class to trigger the CSS animation
    animatedBox.classList.add('animate');

    // Remove the class after the animation ends for future re-triggering
    setTimeout(() => {
        animatedBox.classList.remove('animate');
    }, 500);
});

// Part 3: Card Flip Animation
// This function flips the card when clicked.
const card = document.getElementById('card');

card.addEventListener('click', function() {
    card.classList.toggle('flip');
});

// Part 4: Loading Spinner
// This function starts and stops the loading spinner when the button is clicked.
const loadingButton = document.getElementById('loadingButton');
const loadingSpinner = document.getElementById('loadingSpinner');

loadingButton.addEventListener('click', function() {
    // Start the spinner
    loadingSpinner.style.display = 'inline-block';

    // Stop the spinner after 3 seconds
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
    }, 3000);
});
