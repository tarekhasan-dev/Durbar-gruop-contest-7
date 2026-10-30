
function reconcileInventory(initialInventory, transactions) {


    const inventory = { ...initialInventory };


    for (const { productId, quantity, type } of transactions) {

        if (!(productId in inventory)) {

            inventory[productId] = 0;

        }

        if (type === "in") {

            inventory[productId] += quantity;

        }
        
        else if (type === "out") {

            inventory[productId] = Math.max(0, inventory[productId] - quantity);
            
        }


    }



    return inventory;
    
}