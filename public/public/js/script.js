// Define arrays of images for each avatar component
const hairImages = [
    'hair1.svg',
    'hair2.svg'
];

const eyesImages = [
    'eyes1.svg',
    'eyes2.svg'
];

const noseImages = [
    'nose1.svg',
    'nose2.svg'
];

const mouthImages = [
    'mouth1.svg',
    'mouth2.svg'
];

const glassesImages = [
    'glasses1.svg',
    'glasses2.svg'
];

const eyebrowsImages = [
    'eyebrows1.svg',
    'eyebrows2.svg'
];

let currentHairIndex = 0;
let currentEyesIndex = 0;
let currentNoseIndex = 0;
let currentMouthIndex = 0;
let currentGlassesIndex = 0;
let currentEyebrowsIndex = 0; // Initialize for eyebrows

// Function to change the background image of the specified component
function changeBackgroundImage(component, imagesArray, currentIndex) {
    const componentDiv = document.getElementById(component);
    componentDiv.style.backgroundImage = `url(/images/${imagesArray[currentIndex]})`;
    
    // Increment the index or loop back to the beginning if the end is reached
    currentIndex = (currentIndex + 1) % imagesArray.length;
    return currentIndex;
}

// Add click event listeners to each button
document.getElementById('hairButton').addEventListener('click', function () {
    currentHairIndex = changeBackgroundImage('hairDiv', hairImages, currentHairIndex);
});

document.getElementById('eyesButton').addEventListener('click', function () {
    currentEyesIndex = changeBackgroundImage('eyesDiv', eyesImages, currentEyesIndex);
});

document.getElementById('noseButton').addEventListener('click', function () {
    currentNoseIndex = changeBackgroundImage('noseDiv', noseImages, currentNoseIndex);
});

document.getElementById('mouthButton').addEventListener('click', function () {
    currentMouthIndex = changeBackgroundImage('mouthDiv', mouthImages, currentMouthIndex);
});

document.getElementById('glassesButton').addEventListener('click', function () {
    currentGlassesIndex = changeBackgroundImage('glassesDiv', glassesImages, currentGlassesIndex);
});

// Add click event listener for the "eyebrows" button
document.getElementById('eyebrowsButton').addEventListener('click', function () {
    currentEyebrowsIndex = changeBackgroundImage('eyebrowsDiv', eyebrowsImages, currentEyebrowsIndex);
});

// Initial background image setup (optional)
changeBackgroundImage('hairDiv', hairImages, currentHairIndex);
