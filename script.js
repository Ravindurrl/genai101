const facts = [
    "I watch sports",
    "I enjoy eating pizza",
    "I like watching TV series",
    "I play COD",
    "I enjoy hiking"
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
