// Variable to keep track of scrolling state
let isScrolling = false;

// Function to toggle scrolling
function toggleScroll() {
  isScrolling = !isScrolling;

  if (isScrolling) {
    // Start scrolling
    startScrolling();
    document.getElementById("scrollButton").innerText = "Stop Scrolling";
  } else {
    // Stop scrolling
    stopScrolling();
    document.getElementById("scrollButton").innerText = "Start Scrolling";
  }
}

// Function to start scrolling
function startScrolling() {
  // Define the scroll speed and interval
  const scrollSpeed = 2;
  const scrollInterval = 20;

  // Perform scrolling
  const scrollIntervalId = setInterval(() => {
    window.scrollBy(0, scrollSpeed);
  }, scrollInterval);

  // Save the interval ID to stop scrolling later
  document
    .getElementById("scrollButton")
    .setAttribute("data-scroll-interval", scrollIntervalId);
}

// Function to stop scrolling
function stopScrolling() {
  // Clear the interval to stop scrolling
  const scrollIntervalId = document
    .getElementById("scrollButton")
    .getAttribute("data-scroll-interval");
  clearInterval(parseInt(scrollIntervalId));

  // Remove the saved interval ID
  document
    .getElementById("scrollButton")
    .removeAttribute("data-scroll-interval");
}
