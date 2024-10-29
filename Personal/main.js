// main.js

// Import data from info.js
import { couches, tables, windows, doors } from './info.js';

// DOM Elements for Couches
const couchImage = document.getElementById('couchImage');
const couchDescription = document.getElementById('couchDescription');
const randomCouchButton = document.getElementById('randomCouchButton');

// DOM Elements for Tables
const tableImage = document.getElementById('tableImage');
const tableDescription = document.getElementById('tableDescription');
const randomTableButton = document.getElementById('randomTableButton');

// DOM Elements for Windows
const windowImage = document.getElementById('windowImage');
const windowDescription = document.getElementById('windowDescription');
const randomWindowButton = document.getElementById('randomWindowButton');

// DOM Elements for Doors
const doorImage = document.getElementById('doorImage');
const doorDescription = document.getElementById('doorDescription');
const randomDoorButton = document.getElementById('randomDoorButton');

// Track last selected indices for each type
let lastCouchIndex = -1;
let lastTableIndex = -1;
let lastWindowIndex = -1;
let lastDoorIndex = -1;

// Function to show a random couch
function showRandomCouch() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * couches.length);
    } while (randomIndex === lastCouchIndex);

    lastCouchIndex = randomIndex;
    const randomCouch = couches[randomIndex];
    couchImage.src = randomCouch.src;
    couchDescription.textContent = randomCouch.description;
}

// Function to show a random table
function showRandomTable() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * tables.length);
    } while (randomIndex === lastTableIndex);

    lastTableIndex = randomIndex;
    const randomTable = tables[randomIndex];
    tableImage.src = randomTable.src;
    tableDescription.textContent = randomTable.description;
}

// Function to show a random window
function showRandomWindow() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * windows.length);
    } while (randomIndex === lastWindowIndex);

    lastWindowIndex = randomIndex;
    const randomWindow = windows[randomIndex];
    windowImage.src = randomWindow.src;
    windowDescription.textContent = randomWindow.description;
}

// Function to show a random door
function showRandomDoor() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * doors.length);
    } while (randomIndex === lastDoorIndex);

    lastDoorIndex = randomIndex;
    const randomDoor = doors[randomIndex];
    doorImage.src = randomDoor.src;
    doorDescription.textContent = randomDoor.description;
}

// Setup Event Listeners After DOM Content Loads
document.addEventListener('DOMContentLoaded', () => {
    randomCouchButton.addEventListener('click', showRandomCouch);
    randomTableButton.addEventListener('click', showRandomTable);
});

randomWindowButton.addEventListener('click', showRandomWindow);
randomDoorButton.addEventListener('click', showRandomDoor);
