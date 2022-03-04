// const precio = 120;
// const descuentoPorcentaje = 15;

function precioConDescuento (precio, descuento){

    const descuentoPrecio = (precio * descuento) / 100;
    const descuentoTotal = precio - descuentoPrecio;

    return descuentoTotal;
}

const coupons = [
    {
        name: "tolima",
        discount: 15,
    },
    {
        name: "amigos",
        discount: 30,
    },
    {
        name: "secreto",
        discount: 50,
    },
];

function TotalDiscountPrice(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
// FORMA #1

    // switch (couponValue) {
    //     case coupons[0]:
    //         descuento = 15;
    //         break;
        
    //     case coupons[1]:
    //         descuento = 30;
    //         break;
        
    //     case coupons[2]:
    //         descuento = 50;
    //         break;
    // }

// FORMA #2 legibilidad, error first y muerte al switch

    // if(!coupons.includes(couponValue)){
    //     alert("El cupón " + couponValue + " no es válido");
    // } else if(couponValue === "tolima"){
    //     descuento = 15;  
    // } else if(couponValue === "amigos"){
    //     descuento = 30;
    // } else if(couponValue === "secreto"){
    //     descuento = 50;
    // }

// FORMA #3 arrays y condicionales mucho más inteligentes

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        descuento = userCoupon.discount;
        const precioTotal = precioConDescuento(priceValue, descuento); 
    
        const resultD = document.getElementById("ResultD");
        resultD.innerText = "Se aplica descuento del " + descuento + "%";
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es: $" + precioTotal;
    }
       
}


// console.log(
//     `Precio ${precio}`,
//     `Descuento: ${descuentoPrecio}`,
//     `Total: ${descuentoTotal}`
// );