const caseBtnPlus =  document.getElementById('case_btn_plus');
const caseBtnMinus =  document.getElementById('case_btn_minus');

caseBtnPlus.addEventListener('click', function(){
    const caseQuantity = updateInputQuantity(true, "case_quantity_field");
    getTotalPrice(caseQuantity, 59, 'total_case_field')
})
caseBtnMinus.addEventListener('click', function(){
    const caseQuantity = updateInputQuantity(false, "case_quantity_field");
    getTotalPrice(caseQuantity, 59, 'total_case_field')
    
})