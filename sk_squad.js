

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "In the middle of difficulty lies opportunity."
];

let startTime;
let timer;
let isTyping = false;

const sentenceElement = document.getElementById('sentence');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const startButton = document.getElementById('start');

startButton.addEventListener('click', startTest);
inputElement.addEventListener('input', checkInput);

function startTest() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    sentenceElement.textContent = sentences[randomIndex];
    inputElement.value = '';
    inputElement.disabled = false;
    inputElement.focus();
    resultElement.classList.add('hidden');
    isTyping = true;
    startTime = new Date().getTime();
}

function checkInput() {
    if (!isTyping) return;

    const typedText = inputElement.value;
    const originalText = sentenceElement.textContent;

    if (typedText === originalText) {
        endTest();
    }
}

function endTest() {
    isTyping = false;
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordsTyped = inputElement.value.split(' ').length;
    const wpm = Math.round((wordsTyped / timeTaken) * 60);
    const accuracy = Math.round((inputElement.value.length / sentenceElement.textContent.length) * 100);

    wpmElement.textContent = `Your typing speed: ${wpm} WPM`;
    accuracyElement.textContent = `Accuracy: ${accuracy}%`;
    resultElement.classList.remove('hidden');
    inputElement.disabled = true;
}
