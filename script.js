function setInputType(type) {
    inputType = type;
    document.getElementById('inputValue').placeholder = `Enter ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

function setOutputType(type) {
    outputType = type;
    document.getElementById('outputValue').placeholder = `Converted ${type.charAt(0).toUpperCase() + type.slice(1)} Value`;
}

 function convert () { 
    const inputValue = document.getElementById('inputValue').value;
    let convertedValue;
 }

 function convertDecimalToBinary (binaryValue) {
    return (dezimal >>> 0).toString(2);
 }

 function convertBinaryToDecimal (decimalValue) {

 }

 function convertNegativeToBinary (binaryValue) {

 }

 function convertBinaryToNegative (negativeValue) {

 }

 function convertFractionToBinary (binaryValue) {

 }

 function convertBinaryToFraction (fractionValue) {

 }