
function setInputType(type) {
    inputType = type;
    document.getElementById('inputValue').placeholder = `Enter ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

function setOutputType(type) {
    outputType = type;
    document.getElementById('outputValue').placeholder = `Converted ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

function convert() {
    const inputValue = document.getElementById('inputValue').value.trim();
    let convertedValue;

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
    else if (inputType === 'fraction' && outputType === 'binary') {
        cenvertedValue = convertFractionToBinary(inputValue);
    }
    else if (inputType === 'binary' && outputType === 'fraction') {
        convertedValue = convertBinaryToFraction(inputValue);
    }



    if (convertedValue !== undefined) {
        document.getElementById('outputValue').value = convertedValue;
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('result').innerText = 'Invalid input or conversion.';
    }
}

function convertDecimalToBinary(decimalValue) {
    const floatValue = parseFloat(decimalValue);
    if (!isNaN(floatValue)) {
        const sign = floatValue < 0 ? '-' : '';
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
        return sign + integerPart + fractionalPart;
    }
}

function convertBinaryToDecimal(binaryValue) {
     
}

function convertNegativeToBinary(negativeValue) {
     
}

function convertBinaryToNegative(binaryValue) {
     
}

function convertFractionToBinary(fractionValue) {
     
}

function convertBinaryToFraction(binaryValue) {
   
}
