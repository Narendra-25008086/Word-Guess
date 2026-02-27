const wordDatabase = {
    "ALGORITHM": "A structured set of instructions.",
    "BANDWIDTH": "Capacity for data transfer.",
    "CHASSIS": "Base frame of a vehicle.",
    "ENTANGLEMENT": "Complex quantum relationship.",
    "GENERATIVE": "Capable of producing.",
    "MATRIX": "Rectangular array of numbers.",
    "PYTHON": "Programming language.",
    "QUANTUM": "Smallest physical quantity.",
    "SUPERPOSITION": "One thing placed over another.",
    "THERMODYNAMICS": "Study of heat and energy.",
    "DATABASE": "Organized collection of data.",
    "FUNCTION": "Reusable block of code.",
    "VARIABLE": "Container for storing data.",
    "NETWORK": "Connected systems."
};

let words = Object.keys(wordDatabase);
let currentWord = "";
let score = 0;
let index = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayWord() {

    if (index >= words.length) {
        document.getElementById("wordDisplay").innerText = "Game Over!";
        document.getElementById("score").innerText =
            "Final Score: " + score + " / " + words.length;
        return;
    }

    currentWord = words[index];

    let first = currentWord[0];
    let last = currentWord[currentWord.length - 1];
    let blanks = "_ ".repeat(currentWord.length - 2);

    document.getElementById("wordDisplay").innerText =
        `Word: ${first} ${blanks} ${last} (${currentWord.length} letters)`;

    document.getElementById("hint").innerText =
        "Hint: " + wordDatabase[currentWord];

    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText = "Score: " + score;
}

function checkGuess() {

    let guess = document.getElementById("guessInput").value.toUpperCase();

    if (guess === currentWord) {
        document.getElementById("result").innerText = "✅ Correct!";
        score++;
    } else {
        document.getElementById("result").innerText =
            "❌ Incorrect! Correct word: " + currentWord;
    }

    document.getElementById("score").innerText = "Score: " + score;
}

function nextWord() {
    index++;
    document.getElementById("guessInput").value = "";
    displayWord();
}

words = shuffle(words);
displayWord();