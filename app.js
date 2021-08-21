function customize(item, price) {
    //<-------------- update Extra Cost -------------->


    let itemCost = document.getElementById(item + '-cost');

    itemCost.innerText = price;


    // <---calling Total Price function --->

    totalPrice();

}
//<-------------- Finding & converting innerText value ------------> 




function itemCost(item) {

    const itemCost = document.getElementById(item + '-cost').innerText;

    const itemPrice = parseInt(itemCost);

    return itemPrice;

}
// <------------- Calculationg Total Price --------------->




function totalPrice() {

    const memoryCost = itemCost('memory');

    const storageCost = itemCost('storage');

    const deliveryCost = itemCost('delivery');

    const total = memoryCost + storageCost + deliveryCost + 1299;

    const totalCost = document.getElementById('total-cost');

    const totalAmount = document.getElementById('amount');

    totalCost.innerText = total;

    totalAmount.innerText = total;


}


// <--------------  Customization Events ------------->




document.getElementById('memory-type-one').addEventListener('click', function () {

    customize('memory', 0);
})


document.getElementById('memory-type-two').addEventListener('click', function () {

    customize('memory', 180);
})


document.getElementById('storage-type-one').addEventListener('click', function () {

    customize('storage', 0);
})


document.getElementById('storage-type-two').addEventListener('click', function () {

    customize('storage', 100);
})


document.getElementById('storage-type-three').addEventListener('click', function () {

    customize('storage', 180);
})


document.getElementById('delivery-type-one').addEventListener('click', function () {

    customize('delivery', 0);
})


document.getElementById('delivery-type-two').addEventListener('click', function () {

    customize('delivery', 20);
})


//<------------------------------------------------------------ Promo Code and Discount ------------------------------------------------------->



document.getElementById('input-promo').addEventListener('click', function () {

    let total = document.getElementById('amount').innerHTML;

    let totalAmount = parseInt(total);

    let promoInput = document.getElementById('promo-code');

    const promoCode = 'stevekaku';

    if (promoInput.value == promoCode) {

        const discount = totalAmount - (totalAmount * 0.2);

        document.getElementById('amount').innerText = discount;


    }
    promoInput.value = ' ';

})