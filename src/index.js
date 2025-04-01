// // Get elements for buttons
// const Previous = document.getElementById("prev");
// const Next = document.getElementById("next");
// const PreviousHover = document.getElementById("prevHover");
// const NextHover = document.getElementById("nextHover");

// // Function to show the hover version of the Previous button
// function showPreviousScrollButton() {
//     PreviousHover.style.display = "flex";
//     Previous.style.display = "none";
// }
// function hidePreviousScrollButton() {
//     PreviousHover.style.display = "none";
//     Previous.style.display = "flex";
// }

// function showNextScrollButton() {
//     NextHover.style.display = "flex";
//     Next.style.display = "none";
// }
// function hideNextScrollButton() {
//     NextHover.style.display = "none";
//     Next.style.display = "flex";
// }
// // Event listeners to trigger the hover effect
// Previous.addEventListener("mouseenter", showPreviousScrollButton);
// PreviousHover.addEventListener("mouseleave", hidePreviousScrollButton);
// Next.addEventListener("mouseenter", showNextScrollButton);
// NextHover.addEventListener("mouseleave", hideNextScrollButton);



// The scroll cursor Logic developed here...
const scrollCursor = document.getElementById("scrollCircle");

document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    scrollCursor.style.left = mouseX + 'px';
    scrollCursor.style.top = mouseY + 'px';
});

// Project Carousel Designed Here...
const sections = document.querySelectorAll(".slide-section");
const currentIndex = 0;
const totalSections = sections.length;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const prevHover = document.getElementById("prevHover");
const nextHover = document.getElementById("nextHover");

function updateVisibility() {
    sections.forEach((section, index) => {
        section.style.display = index === currentIndex ? "flex" : "none";
    });
}

function showPreviousScrollButton() {
    currentIndex = (currentIndex - 1 + totalSections) % totalSections;
    updateVisibility();
}

function showNextScrollButton() {
    currentIndex = (currentIndex + 1) % totalSections;
    updateVisibility();
}

// Add click event listeners to buttons
prevHover.addEventListener("click", showPreviousScrollButton);
nextHover.addEventListener("click", showNextScrollButton);

// Add hover event listeners to show hover buttons
prevButton.addEventListener("mouseover", () => {
    prevHover.style.display = "flex";
    prevButton.style.display = "none";
});
prevHover.addEventListener("mouseleave", () => {
    prevHover.style.display = "none";
    prevButton.style.display = "flex";
});

nextButton.addEventListener("mouseover", () => {
    nextHover.style.display = "flex";
    nextButton.style.display = "none";
});
nextHover.addEventListener("mouseleave", () => {
    nextHover.style.display = "none";
    nextButton.style.display = "flex";
});

// Initialize visibility on page load
updateVisibility();