
// Get HTML elements
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const letterBox = document.getElementById("letterBox");
const loveMessage = document.getElementById("loveMessage");
const hearts = document.getElementById("hearts");

// Your personal love letter
const message = `I just want you to know how special you are to me and you are loved by me.

Im sorry if there's a time na u asked yourself if i really love you and for this month we  had too many conflicts 
but if you know lang your smile makes my day brighter, and your presence
makes everything feel a little more beautiful.

I may not always have the perfect words to say,
but I hope you know how much you mean to me always.

Thank you for being you and for staying with me.

No Special Day, just appreciation letter! 💗
I love you`;

// Open Letter
openButton.addEventListener("click", function() {

    envelope.classList.add("open");

    openButton.style.display = "none";

    setTimeout(function() {

        letterBox.style.display = "block";

        typeWriter();

    }, 1000);

});

// Typewriter Effect
function typeWriter() {

    let index = 0;

    loveMessage.textContent = "";

    function write() {

        if (index < message.length) {

            loveMessage.textContent += message.charAt(index);

            index++;

            setTimeout(write, 35);

        }

    }

    write();
}

// Close Letter
closeButton.addEventListener("click", function() {

    letterBox.style.display = "none";

    envelope.classList.remove("open");

    openButton.style.display = "inline-block";

});

// Floating Hearts Generator
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    hearts.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 7000);

}

// Generate a heart every 500 milliseconds
setInterval(createHeart, 500);
