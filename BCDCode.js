
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
        return sign + integerPart + fractionalPart;
    }
}

function convertBinaryToDecimal(binaryValue) {
    return parseInt(binaryValue, 2).toString();
}

function convertNegativeToBinary(negativeValue) {
    const intValue = parseInt(negativeValue);
    if (isNaN(intValue)) return; 

    const bitLength = 8; 
    const binaryArray = new Array(bitLength); 

    let remainder = Math.abs(intValue);
    for (let i = bitLength - 1; i >= 0; i--) {
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

    return binaryArray.join('');
}

function convertBinaryToNegative(binaryValue) {
     const bitLength=binaryValue.length

     let decimalValue = 0;
     for (let i=0; i< bitLength; i++) {
        decimalValue += parseInt(binaryValue[i]) * Math.pow(2, bitLength -1-i);
     }

     if (binaryValue[0]=== '1') {
        decimalValue = (Math.pow(2, bitLength)  - decimalValue);
     }

     return decimalValue;
}

function convertFractionToBinary(fractionValue) {
    let binaryResult = '';
    let fractionalValue = parseFloat('0.' + fractionValue);
    
    for (let i = 0; i < 5; i++) {
        fractionalValue *= 2;
        binaryResult += Math.floor(fractionalValue);
        fractionalValue -= Math.floor(fractionalValue);
    }

    return binaryResult;
}


function convertBinaryToFraction(binaryValue) {
    let decimalResult = 0;
    let fractionalPart = 0.5;

    for (let i = 0; i < binaryValue.length; i++) {
        if (binaryValue[i] === '1') {
            decimalResult += fractionalPart;
        }
        fractionalPart /= 2;
    }

    return decimalResult.toString();
}