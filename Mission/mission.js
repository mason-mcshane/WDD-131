// Select the dropdown element with the ID 'mySelect'
const selectElement = document.getElementById('mySelect');

// Function to change the theme based on the selected value from the dropdown
function changeTheme() {
    // Get the theme selector dropdown element
    const themeSelector = document.getElementById('theme-selector');

    // Get the value of the selected option (either 'dark' or another theme)
    const selectedTheme = themeSelector.value;

    // Get the body element and the logo element from the DOM
    const body = document.body;
    const logo = document.getElementById('logo');

    // If the selected theme is 'dark', apply dark mode styles
    if (selectedTheme === 'dark') {
        body.classList.add('dark'); // Add the 'dark' class to the body to apply dark mode styles
        logo.src = 'byui-logo_white.png'; // Change the logo source to a white version for dark mode
    } else {
        // If another theme is selected, remove dark mode styles
        body.classList.remove('dark'); // Remove the 'dark' class from the body
        logo.src = 'byui-logo_blue.webp'; // Change the logo source back to the default blue version
    }
}

// Add an event listener to the theme selector dropdown to call changeTheme when the selected option changes
document.getElementById('theme-selector').addEventListener('change', changeTheme);

