
const phoneBtnPlus =  document.getElementById('phone_btn_plus');
const phoneBtnMinus =  document.getElementById('phone_btn_minus');

phoneBtnPlus.addEventListener('click', function(){
    const phoneQuantity = updateInputQuantity(true, "phone_quantity_field");
    getTotalPrice(phoneQuantity, 1299, 'total_phone_field')
})
phoneBtnMinus.addEventListener('click', function(){
    const phoneQuantity = updateInputQuantity(false, "phone_quantity_field");
    getTotalPrice(phoneQuantity, 1299, 'total_phone_field')
})