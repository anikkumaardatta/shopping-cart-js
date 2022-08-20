function updateInputQuantity(isIncrease, quantityFieldId){
    const quantityField = document.getElementById(quantityFieldId);
    const quantityFieldString = quantityField.value;
    const previousQuantityValue = parseInt(quantityFieldString);

    let newQuantityValue;

    if(isIncrease === true){
        newQuantityValue = previousQuantityValue + 1;
    }
    else if(isIncrease === false){
        newQuantityValue = previousQuantityValue - 1;
    }

    quantityField.value = newQuantityValue;
    return newQuantityValue;


}
function getTotalPrice(newInputQuantityNumber, price, totalField){
    const totalprice = newInputQuantityNumber * price;
    const totalCaseField = document.getElementById(totalField);
    totalCaseField.innerText = totalprice; 
}