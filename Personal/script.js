// Array of couch images and descriptions
const couches = [
    { src: 'Images/couch_1.jpg', description: 'This is a sectional couch that can seat several people comfortably. Its modern design includes soft, plush cushions and a sleek silhouette, making it perfect for contemporary living spaces.' },
    { src: 'Images/couch_2.jpg', description: 'This is a mid-century modern couch, characterized by its clean lines and vibrant colors. Its retro charm and sturdy wooden legs bring a touch of nostalgia to any room.' },
    { src: 'Images/couch_3.jpg', description: 'This is a traditional leather couch that offers both style and durability. Its deep seating and classic design make it a timeless addition to any home.' },
    { src: 'Images/couch_4.jpg', description: 'This is a cozy loveseat, ideal for small spaces. It features soft fabric upholstery and a compact design, perfect for reading nooks or apartment living.' },
];

// Array of table images and descriptions
const tables = [
    { src: 'Images/table_1.jpg', description: 'This is a rustic farmhouse table made of reclaimed wood. Its sturdy construction and natural finish make it a great centerpiece for family gatherings.' },
    { src: 'Images/table_2.jpg', description: 'This is a modern glass-top dining table with a sleek metal base. Its minimalist design creates an open and airy feel, perfect for contemporary dining rooms.' },
    { src: 'Images/table_3.jpg', description: 'This is a classic round table that provides an inviting atmosphere for meals. Its versatile design allows it to fit seamlessly in various decor styles.' },
    { src: 'Images/table_4.jpg', description: 'This is a space-saving extendable table, great for accommodating guests. Its clean lines and neutral finish make it suitable for any dining area.' },
];

// Array of window images and descriptions
const windows = [
    { src: 'Images/window_1.jpg', description: 'This is a Palladian window! It has three sections, with an arched window above the middle one. The two windows on the side provide a balanced look. This window type is often seen in classic architecture.' },
    { src: 'Images/window_2.jpg', description: 'This is a bay window! It extends outward from the building’s exterior. It has three panels and often provides seating or storage. The middle window is usually fixed, while the two side windows frequently open. They are seen in many different styles.' },
    { src: 'Images/window_3.jpg', description: 'This is a single hung window! It opens vertically. The bottom sash moves up when the window is opened, while the top sash stays stationary. They provide good insulation because they have fewer moving parts than a double hung window.' },
    { src: 'Images/window_4.jpg', description: 'This is a Gilding sash window! It opens horizontally, it’s a very common window because it saves space because no extra room is needed for it to open. It is most commonly long and rectangular.' },
];

// Array of door images and descriptions
const doors = [
    { src: 'Images/door_1.jpg', description: 'This is Door 1 description.' },
    { src: 'Images/door_2.jpg', description: 'This is Door 2 description.' },
    { src: 'Images/door_3.jpg', description: 'This is Door 3 description.' },
    { src: 'Images/door_4.jpg', description: 'This is Door 4 description.' },
];

// DOM elements for couches
const couchImage = document.getElementById('couchImage');
const couchDescription = document.getElementById('couchDescription');
const randomCouchButton = document.getElementById('randomCouchButton');

// DOM elements for tables
const tableImage = document.getElementById('tableImage');
const tableDescription = document.getElementById('tableDescription');
const randomTableButton = document.getElementById('randomTableButton');

// DOM elements for windows
const windowImage = document.getElementById('windowImage');
const windowDescription = document.getElementById('windowDescription');
const randomWindowButton = document.getElementById('randomWindowButton');

// DOM elements for doors
const doorImage = document.getElementById('doorImage');
const doorDescription = document.getElementById('doorDescription');
const randomDoorButton = document.getElementById('randomDoorButton');

// Function to select a random couch
function showRandomCouch() {
    const randomCouch = couches[Math.floor(Math.random() * couches.length)];
    couchImage.src = randomCouch.src;
    couchDescription.textContent = randomCouch.description;
}

// Function to select a random table
function showRandomTable() {
    const randomTable = tables[Math.floor(Math.random() * tables.length)];
    tableImage.src = randomTable.src;
    tableDescription.textContent = randomTable.description;
}

// Function to select a random window
function showRandomWindow() {
    const randomWindow = windows[Math.floor(Math.random() * windows.length)];
    windowImage.src = randomWindow.src;
    windowDescription.textContent = randomWindow.description;
}

// Function to select a random door
function showRandomDoor() {
    const randomDoor = doors[Math.floor(Math.random() * doors.length)];
    doorImage.src = randomDoor.src;
    doorDescription.textContent = randomDoor.description;
}

// Wrap event listener setup in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for Child 1
    randomCouchButton.addEventListener('click', showRandomCouch);
    randomTableButton.addEventListener('click', showRandomTable);

    // Event listeners for Child 2
    randomWindowButton.addEventListener('click', showRandomWindow);
    randomDoorButton.addEventListener('click', showRandomDoor);
});

