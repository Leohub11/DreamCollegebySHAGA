# SHAGA1
Here's the JavaScript code to implement the dice board functionality:
// Get references to HTML elements
const dateElement = document.getElementById('date');
const dice1Element = document.getElementById('dice1');
const dice2Element = document.getElementById('dice2');
const rollButton = document.getElementById('rollButton');
const messageElement = document.getElementById('message');

// Function to update the date and time
function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleString();
  dateElement.textContent = formattedDate;
}

// Function to roll the dice
function rollDice() {
  // Generate random numbers for dice faces
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  dice1Element.src = `dice-${dice1Value}.png`;
  dice2Element.src = `dice-${dice2Value}.png`;

  // Calculate the sum of dice faces
  const total = dice1Value + dice2Value;

  // Display the appropriate message
  if (total >= 8) {
    messageElement.textContent = "You Win! Try Again!";
  } else {
    messageElement.textContent = "You didn't win: Try Again!";
  }
}

// Update date and time initially
updateDateTime();

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);

// Update date and time every second (adjust as needed)
setInterval(updateDateTime, 1000);

Explanation:
 * HTML Structure:
   * Create HTML elements for the date, dice images, roll button, and message.
   * Include the dice images (dice-1.png to dice-6.png) in your project.
 * JavaScript Code:
   * Update Date and Time:
     * Get the current date and time using new Date().
     * Format the date and time using toLocaleString().
     * Update the dateElement with the formatted date and time.
   * Roll Dice:
     * Generate random numbers for dice faces using Math.random().
     * Update the src attribute of the dice images to display the corresponding images.
     * Calculate the sum of the dice faces.
     * Display the appropriate message based on the sum.
   * Event Listener:
     * Add an event listener to the roll button to trigger the rollDice function when clicked.
   * Update Interval:
     * Use setInterval to update the date and time every second (adjust the interval as needed).
Remember to:
 * Create the HTML structure with the necessary elements.
 * Include the dice images in your project.
 * Link the JavaScript file to your HTML file.
 * Test the functionality to ensure it works as expected.
Additional Considerations:
 * You can customize the appearance of the dice board using CSS.
 * You can add more features like sound effects or animations.
 * Consider using a library like jQuery to simplify the code.
GitHub Page:
 * Create a GitHub repository for your project.
 * Push your HTML, CSS, and JavaScript files to the repository.
 * Configure GitHub Pages to deploy your project.
 * Submit the URL of your GitHub Pages deployment.
