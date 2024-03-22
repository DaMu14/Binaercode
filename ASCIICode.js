function displayAscii() {
    var asciiInput = document.getElementById('asciiInput').value;
    var character = String.fromCharCode(asciiInput);
    var outputContainer = document.getElementById('asciiOutput');
    outputContainer.textContent = "Das Zeichen mit dem ASCII-Code " + asciiInput + " ist: " + character;
}
