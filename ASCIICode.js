function convertToAscii() {
    var character = document.getElementById('asciiInput').value;
    var asciiCode = character.charCodeAt(0);
    var outputContainer = document.getElementById('asciiOutput');
    outputContainer.textContent = "Der ASCII-Code von '" + character + "' ist: " + asciiCode;
}

function convertToChar() {
    var asciiInput = document.getElementById('asciiInput').value;
    var character = String.fromCharCode(parseInt(asciiInput));
    var outputContainer = document.getElementById('asciiOutput');
    outputContainer.textContent = "Das Zeichen mit dem ASCII-Code " + asciiInput + " ist: " + character;
}
