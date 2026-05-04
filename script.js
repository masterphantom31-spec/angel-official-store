// --- 1. Hamburger Menu Logic ---
const hamburgerIcon = document.getElementById('hamburger-icon');
const sideMenu = document.getElementById('side-menu');

hamburgerIcon.addEventListener('click', () => {
    // Toggles the 'active' class which slides the menu in and out via CSS
    sideMenu.classList.toggle('active');
});

// Close the menu if the user clicks outside of it
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
    // Check if we have slides to prevent errors if images aren't loaded yet
    if (totalSlides > 0) {
        currentIndex++;
        // If we reach the end, loop back to the first poster
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        // Move the container to the left by 100% per slide
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Run the moveSlide function every 1500 milliseconds (1.5 seconds)
setInterval(moveSlide, 1500);


// --- 3. Fake Live Purchase Logic ---
const buyerNameElement = document.getElementById('buyer-name');
const itemBoughtElement = document.getElementById('item-bought');

// Lists of fake names and items to cycle through
const fakeNames = ["Rahul99", "ProGamer_X", "Aman_007", "DarkKnight", "Priya_Plays", "ShadowHunter"];
const fakeItems = ["Weekly Diamond Pass", "Twilight Pass", "500 Diamonds", "Premium Starlight", "1000 Followers", "Netflix 1 Month"];

function generateFakePurchase() {
    // Pick a random name and item from the arrays
    const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const randomItem = fakeItems[Math.floor(Math.random() * fakeItems.length)];

    // Update the text on the website
    buyerNameElement.textContent = randomName;
    itemBoughtElement.textContent = randomItem;
}

// Change the fake purchase notification every 4 seconds
setInterval(generateFakePurchase, 4000);
