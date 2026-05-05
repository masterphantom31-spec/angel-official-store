// --- 1. Hamburger Menu Logic ---
const hamburgerIcon = document.getElementById('hamburger-icon');
const sideMenu = document.getElementById('side-menu');

// Opens the menu
hamburgerIcon.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

// Closes the menu if the user taps anywhere outside of it
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && event.target !== hamburgerIcon) {
        sideMenu.classList.remove('active');
    }
});


// --- 2. Moving Poster Slider (Every 1.5 Seconds) ---
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function moveSlide() {
    if (totalSlides > 0) {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Runs the slider every 1500 milliseconds (1.5 seconds)
setInterval(moveSlide, 1500);


// --- 3. Fake Live Purchase Logic (Every 2.5 Seconds) ---
const buyerNameElement = document.getElementById('buyer-name');
const itemBoughtElement = document.getElementById('item-bought');

// Base names and tags to generate endless unique combinations
const baseNames = ["Rahul", "Priya", "Aman", "Rohan", "Sneha", "Vikram", "DarkKnight", "ProGamer", "Shadow", "Ninja", "Karan", "Anjali", "Suresh", "Aditya", "Neha", "Phantom", "GamerX", "Viper", "Ghost", "Sam"];
const nameTags = ["_YT", "007", "99", "_Pro", "X", "Plays", "123", "_Official", "Gaming"];

// Store items matching your inventory
const fakeItems = [
    "Weekly Diamond Pass",
    "86 Diamonds",
    "172 Diamonds",
    "Netflix 1 Month 4K",
    "1000 Instagram Followers",
    "Spotify Premium 3 Months",
    "500 Telegram Members",
    "BGMI 60 UC",
    "Twilight Pass"
];

function generateFakePurchase() {
    // 1. Pick a random base name
    const randomBase = baseNames[Math.floor(Math.random() * baseNames.length)];
    // 2. Pick a random tag
    const randomTag = nameTags[Math.floor(Math.random() * nameTags.length)];
    // 3. Pick a random number between 0 and 999
    const randomNumber = Math.floor(Math.random() * 999); 
    
    // Combine them perfectly (Example output: "Phantom_YT245" or "Rahul00789")
    const finalName = `${randomBase}${randomTag}${randomNumber}`;
    
    // Pick a random store item
    const randomItem = fakeItems[Math.floor(Math.random() * fakeItems.length)];

    // Update the HTML text on the screen
    buyerNameElement.textContent = finalName;
    itemBoughtElement.textContent = randomItem;
}

// Runs the fake purchase generator every 2500 milliseconds (2.5 seconds)
setInterval(generateFakePurchase, 2500);

const menuBtn = document.querySelector('.menu-toggle'); 
const nav = document.querySelector('nav');
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });
});
