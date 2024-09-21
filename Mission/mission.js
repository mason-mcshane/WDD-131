const selectElement = document.getElementById('mySelect');

// Function to change the theme
function changeTheme() 
{
    // Get the selected option from the theme selector
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;

    // Get the body element and logo image element
    const body = document.body;
    const logo = document.getElementById('logo');

    // Check the selected theme and apply changes accordingly
    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_blue.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}
document.getElementById('theme-selector').addEventListener('change', changeTheme);
