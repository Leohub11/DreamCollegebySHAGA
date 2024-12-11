// JavaScript Code for Dice Roll Application

// Function to get a random number between 1 and 6
function getRandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the date and time on the page
function updateDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('date-time');
    const formattedDate = now.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    dateTimeElement.textContent = `${formattedDate} at ${formattedTime}`;
}

// Function to roll the dice and display results
function rollDice() {
    // Generate random dice values
    const dice1 = getRandomDiceValue();
    const dice2 = getRandomDiceValue();

    // Update dice images
    document.getElementById('dice1').src = `images/dice${dice1}.png`; // Assuming dice images are named dice1.png to dice6.png
    document.getElementById('dice2').src = `images/dice${dice2}.png`;

    // Calculate total of the dice
    const total = dice1 + dice2;

    // Update result message
    const resultMessage = document.getElementById('result-message');
    if (total >= 8) {
        resultMessage.textContent = `Total: ${total}\nMore than 8: Win\nYou Win: Try Again!`;
    } else {
        resultMessage.textContent = `Total: ${total}\nLess than 8: Lose\nYou didn't win: Try Again!`;
    }
}

// Add event listener to the Roll Dice button
document.getElementById('roll-dice-button').addEventListener('click', () => {
    rollDice();
    updateDateTime();
});

// Initialize date and time on page load
updateDateTime();
