
let inputType = 'decimal';
let outputType = 'binary';

function setInputType(type) {
    inputType = type;
    document.getElementById('inputValue').placeholder = `Enter ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

function setOutputType(type) {
    outputType = type;
    document.getElementById('outputValue').placeholder = `Converted ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

//Durführung basierend auf Eingabe und Ausgabe Typ
function convert() {
    const inputValue = document.getElementById('inputValue').value.trim();
    let convertedValue;

    //überprüft eingabe und ausgabe Typ und ruft entsprechende Funktion auf
    if (inputType === 'decimal' && outputType === 'binary') {
        convertedValue = convertDecimalToBinary(inputValue);
    } else if (inputType === 'binary' && outputType === 'decimal') {
        convertedValue = convertBinaryToDecimal(inputValue);
    }
    else if (inputType === 'negative' && outputType === 'binary') {
        convertedValue = convertNegativeToBinary(inputValue);
    } 
    else if (inputType === 'binary' && outputType === 'negative'){
        convertedValue = convertBinaryToNegative(inputValue);
    }
    else if (inputType === 'commas' && outputType === 'binary') {
        convertedValue = convertCommasToBinary(inputValue);
    }
    else if (inputType === 'binary' && outputType === 'commas') {
        convertedValue = convertBinaryToCommas(inputValue);
    }

    // überprüft, ob konvertierung erfolgreich war
    if (convertedValue !== undefined) {
        document.getElementById('outputValue').value = convertedValue;
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = 'Invalid input or conversion.';
    }
}

function convertDecimalToBinary(decimalValue) {
    const floatValue = parseFloat(decimalValue); // Wandelt den Eingabewert in eine Gleitkommazahl um
    if (!isNaN(floatValue)) {
        const sign = floatValue < 0 ? 'nur positive Zahlen' : '';
        const integerPart = Math.abs(Math.floor(floatValue)).toString(2);
        let fractionalPart = '';
        if (floatValue % 1 !== 0) {
            fractionalPart = '.';
            let fractionalValue = Math.abs(floatValue) % 1;
            for (let i = 0; i < 5; i++) {  
                fractionalValue *= 2;
                const bit = Math.floor(fractionalValue);
                fractionalPart += bit;
                fractionalValue -= bit;
            }
        }
        return sign + integerPart + fractionalPart; // gibt Binärdarstellung zurück
    }
}

function convertBinaryToDecimal(binaryValue) {
    return parseInt(binaryValue, 2).toString();
}

function convertNegativeToBinary(negativeValue) {
    const intValue = parseInt(negativeValue);
    if (isNaN(intValue)) return; 

    const bitLength = 8; // definiert die bit länge von 8
    const binaryArray = new Array(bitLength); 

    let remainder = Math.abs(intValue);
    for (let i = bitLength - 1; i >= 0; i--) {  // Konvertiert die Zahl in Binär und speichert sie im Array
        binaryArray[i] = remainder % 2;
        remainder = Math.floor(remainder / 2);
    }

  
    for (let i = 0; i < bitLength; i++) {
        binaryArray[i] = binaryArray[i] === 0 ? 1 : 0;
    }

    
    let carry = 1;
    for (let i = bitLength - 1; i >= 0; i--) {
        const sum = binaryArray[i] + carry;
        binaryArray[i] = sum % 2;
        carry = Math.floor(sum / 2);
    }

    return binaryArray.join('');  // Gibt die Binärzahl als String zurück
}

function convertBinaryToNegative(binaryValue) {
    const bitLength = binaryValue.length  // nimmt die länge der Binärzahl

    let decimalValue = 0;
    for (let i = 0; i < bitLength; i++) {   // Konvertiert die Binärzahl in eine Dezimalzahl
        decimalValue += parseInt(binaryValue[i]) * Math.pow(2, bitLength - 1 - i);
    }

    if (binaryValue[0] === '1') { // überprüft, ob das Vorzeichen negativ ist
        decimalValue = (Math.pow(2, bitLength) - decimalValue);  // Berechnet die negative Dezimalzahl
    }

    return decimalValue;
}

function convertCommasToBinary(commaValue) {
    const numbers = commaValue.split(',').map(Number);   // Teilt den Eingabewert in eine Liste von Zahlen
    let binaryResult = '';

    for (let number of numbers) {
        let binaryNumber = convertDecimalToBinary(number.toString());  // Konvertiert jede Zahl in Binär
        binaryResult += binaryNumber.padStart(8, '0'); 
    }

    return binaryResult;
}


function convertBinaryToCommas(binaryValue) {
    let decimalResult = '';
    let binaryDigits = binaryValue.match(/.{1,8}/g);  // teilt die Binärzahl in 8 bit Teile

    for (let binaryChunk of binaryDigits) {
        let decimalNumber = convertBinaryToDecimal(binaryChunk);
        decimalResult += decimalNumber + ',';
    }

   
    decimalResult = decimalResult.slice(0, -1);

    return decimalResult;
}


