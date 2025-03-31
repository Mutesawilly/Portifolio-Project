// Get elements for buttons
const Previous = document.getElementById("prev");
const Next = document.getElementById("next");
const PreviousHover = document.getElementById("prevHover");
const NextHover = document.getElementById("nextHover");

// Function to show the hover version of the Previous button
function showPreviousScrollButton() {
    PreviousHover.classList.remove("invisible");
    PreviousHover.classList.add("visible");
    Previous.classList.remove("visible");
    Previous.classList.add("invisible");
}

// Function to hide the hover version and show the normal Previous button
function hidePreviousScrollButton() {
    PreviousHover.classList.remove("visible");
    PreviousHover.classList.add("invisible");
    Previous.classList.remove("invisible");
    Previous.classList.add("visible");
}

// Function to show the hover version of the Next button
function showNextScrollButton() {
    NextHover.classList.remove("invisible");
    NextHover.classList.add("visible");
    Next.classList.remove("visible");
    Next.classList.add("invisible");
}

// Function to hide the hover version and show the normal Next button
function hideNextScrollButton() {
    NextHover.classList.remove("visible");
    NextHover.classList.add("invisible");
    Next.classList.remove("invisible");
    Next.classList.add("visible");
}

// Event listeners to trigger the hover effect
Previous.addEventListener("mouseover", showPreviousScrollButton);
Previous.addEventListener("mouseleave", hidePreviousScrollButton);
Next.addEventListener("mouseover", showNextScrollButton);
Next.addEventListener("mouseleave", hideNextScrollButton);



// The scroll cursor Logic developed here...
const scrollCursor = document.getElementById("scrollCircle");

document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    scrollCursor.style.left = mouseX + 'px';
    scrollCursor.style.top = mouseY + 'px';
});