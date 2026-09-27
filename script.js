const startButton = document.getElementById("startButton");
const openingScreen = document.getElementById("openingScreen");
const birthdayContent = document.getElementById("birthdayContent");

const messageButton = document.getElementById("messageButton");
const hiddenMessage = document.getElementById("hiddenMessage");

const petalsContainer = document.getElementById("petals");


// =====================================
// TAP TO OPEN
// =====================================

startButton.addEventListener("click", function () {

    // Create the flower petal explosion
    createPetalExplosion();

    // Show the birthday page underneath
    birthdayContent.classList.add("show");

    // Give the petals time to explode
    setTimeout(function () {

        // Fade away the opening screen
        openingScreen.classList.add("open");

    }, 250);

});


// =====================================
// PETAL EXPLOSION
// =====================================

function createPetalExplosion() {

    const isMobile = window.innerWidth <= 600;

    const numberOfPetals = isMobile ? 45 : 70;

    for (let i = 0; i < numberOfPetals; i++) {

        const petal = document.createElement("span");

        petal.classList.add("petal");

        // Random direction
        const angle = Math.random() * Math.PI * 2;

        // Random distance
        const distance =
            120 +
            Math.random() *
            (isMobile ? 260 : 450);

        // Calculate final position
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        // Random rotation
        const rotation =
            Math.random() * 720 - 360;

        // Apply movement values
        petal.style.setProperty(
            "--x",
            `${x}px`
        );

        petal.style.setProperty(
            "--y",
            `${y}px`
        );

        petal.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        // Slightly randomize timing
        petal.style.animationDelay =
            `${Math.random() * 0.15}s`;

        petalsContainer.appendChild(petal);


        // Remove after animation
        setTimeout(function () {

            petal.remove();

        }, 2200);
    }
}


// =====================================
// OPEN YOUR MESSAGE
// =====================================

messageButton.addEventListener("click", function () {

    hiddenMessage.classList.toggle("show");


    if (hiddenMessage.classList.contains("show")) {

        messageButton.textContent =
            "Close your message ♡";

    } else {

        messageButton.textContent =
            "Open your message ♡";

    }

});