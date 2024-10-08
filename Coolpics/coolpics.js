// Select the menu button and the gallery elements from the DOM
const menuButton = document.querySelector('.menu-button');
const gallery = document.querySelector('.gallery');

// Function to toggle the "open" class on the navigation and hamburger button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open"); // Toggle the "open" class on the primary navigation
    document.getElementById("hamburgerBtn").classList.toggle("open"); // Toggle the "open" class on the hamburger button
}

// Function to handle window resize and show/hide the menu based on screen width
function handleResize() {
    const menu = document.querySelector('.menu'); // Select the menu element
    if (window.innerWidth > 1000) { 
        menu.classList.remove('hide'); // Show the menu when the window width is larger than 1000px
    } else {
        menu.classList.add('hide'); // Hide the menu when the window width is 1000px or smaller
    }
}

// Function to close the image viewer by removing it from the DOM
function closeViewer() {
    document.querySelector('.viewer')?.remove(); // Remove the viewer element from the DOM if it exists
}

// Function to handle image clicks in the gallery and display them in full view
function viewHandler(event) {
    const target = event.target; // Get the target element of the click event
    console.dir(target); // Log the details of the target element to the console

    // If the clicked target is not an image, return early
    if(target.tagName /= 'IMG') {
        return;
    }

    // Extract the image source, modify it to load the full-size version
    const imgSrc = event.target.src.split('-'); // Split the image source by '-' (assuming it's a naming convention)
    const newSrc = imgSrc[0] + '-full.jpeg'; // Create the new full image source by appending '-full.jpeg'

    // Insert the image viewer into the body with the new source and alt text
    document.body.insertAdjacentHTML(
        'afterbegin', 
        viewerTemplate(newSrc, target.alt) // Use the viewerTemplate to create the full image viewer element
    );

    // Add an event listener to the close button inside the viewer to call closeViewer
    document
        .querySelector('.close-viewer')
        .addEventListener('click', closeViewer);
}

// Add event listener to the menu button to toggle the menu when clicked
menuButton.addEventListener('click', toggleMenu);

// Add event listener to the gallery to handle image clicks and show the full view
gallery.addEventListener('click', viewHandler);

// Add event listener to the window to handle resizing and show/hide the menu
window.addEventListener('resize', handleResize);
