function getTotalItemValueById(itemId){
    const totalField = document.getElementById(itemId);
    const totalFieldString = totalField.innerText;
    const totalFieldValue = parseInt(totalFieldString);
    return totalFieldValue;
}

const subtotal = document.getElementById('subtotal_price');
const tax = document.getElementById('tax_total');
const total = document.getElementById('total_price');

const checkOutBtn = document.getElementById('check_out_btn');


checkOutBtn.addEventListener('click', function(){
    const totalPhoneValue = getTotalItemValueById('total_phone_field');
    const totalCaseValue = getTotalItemValueById('total_case_field')
    const totalWithoutTax = totalPhoneValue + totalCaseValue;
    subtotal.innerText = totalWithoutTax;
    const totalTax = parseFloat(((totalWithoutTax * 2.25) / 100).toFixed(2));
    tax.innerText = totalTax

    total.innerText = totalWithoutTax + totalTax;

})