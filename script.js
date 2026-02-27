const wordDatabase = {
    "algorithm": "A structured set of instructions.",
    "bandwidth": "Capacity for data transfer.",
    "chassis": "Base frame of a vehicle.",
    "entanglement": "Complex quantum relationship.",
    "generative": "Capable of producing.",
    "matrix": "Rectangular array of numbers.",
    "python": "Programming language.",
    "quantum": "Smallest physical quantity.",
    "superposition": "One thing placed over another.",
    "thermodynamics": "Study of heat and energy.",
    "database": "Organized collection of data.",
    "function": "Reusable block of code.",
    "variable": "Container for storing data.",
    "network": "Connected systems.",
    "compiler": "Translates source code to machine code.",
    "iteration": "Repeating a process.",
    "recursion": "Function calling itself.",
    "encryption": "Securing data using codes.",
    "firewall": "Network security system.",
    "protocol": "Set of communication rules.",
    "debugging": "Finding and fixing errors.",
    "hardware": "Physical parts of computer.",
    "software": "Programs and applications.",
    "interface": "Connection between systems.",
    "artificial": "Made by humans, not natural.",
    "intelligence": "Ability to learn and reason.",
    "machine": "Device that performs tasks.",
    "learning": "Process of gaining knowledge.",
    "neural": "Related to nerves or networks.",
    "analysis": "Detailed examination of data."
};

let words = [];
let currentWord = "";
let score = 0;
let index = 0;
let answered = false;   // ✅ prevents double scoring

// Shuffle words
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Start or Restart Game
function startGame() {
    words = shuffle(Object.keys(wordDatabase));
    score = 0;
    index = 0;
    answered = false;

    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
    displayWord();
}

// Display word
function displayWord() {

    if (index >= words.length) {
        document.getElementById("wordDisplay").innerText = "🎉 Game Over!";
        document.getElementById("hint").innerText = "";
        document.getElementById("score").innerText =
            "Final Score: " + score + " / " + words.length;
        return;
    }

    currentWord = words[index];
    answered = false;  // ✅ reset for new word

    let first = currentWord[0];
    let last = currentWord[currentWord.length - 1];
    let blanks = "_ ".repeat(currentWord.length - 2);

    document.getElementById("wordDisplay").innerText =
        "Word: " + first + " " + blanks + last +
        " (" + currentWord.length + " letters)";

    document.getElementById("hint").innerText =
        "Hint: " + wordDatabase[currentWord];

    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText = "Score: " + score;
}

// Check answer
function checkGuess() {

    if (answered) return;   // ✅ stops double scoring

    let guess = document.getElementById("guessInput")
                    .value
                    .trim()
                    .toLowerCase();

    if (guess === currentWord.toLowerCase()) {
        document.getElementById("result").innerText = "✅ Correct!";
        score++;
    } else {
        document.getElementById("result").innerText =
            "❌ Incorrect! Correct word: " + currentWord;
    }

    document.getElementById("score").innerText = "Score: " + score;

    answered = true;   // ✅ lock after first attempt
}

// Next word
function nextWord() {
    index++;
    document.getElementById("guessInput").value = "";
    displayWord();
}

// Auto start game
startGame();