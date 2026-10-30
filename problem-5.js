function selectBestDiscount(price, offers) {


    let bestOffer = null;

    let lowestPrice = price;



    for (const offer of offers) {


        if (price < offer.minPrice) continue;



        const discount = offer.type === "flat" ? offer.value : price * (offer.value / 100);

        const finalPrice = Math.max(0, price - discount);



        if (finalPrice < lowestPrice) {

            lowestPrice = finalPrice;

            bestOffer = offer;


        }

    }


    return bestOffer;
    
}