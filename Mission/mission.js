const selectElement = document.getElementById('mySelect');

function changeTheme() 
{
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;

    const body = document.body;
    const logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}
document.getElementById('theme-selector').addEventListener('change', changeTheme);
