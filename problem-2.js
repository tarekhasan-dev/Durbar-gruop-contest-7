
function updateNotificationCount(initialCount, events) {

    let count = initialCount; 

    for (const event of events) {
         
        const amount = event.count ?? 1; 

        if (event.type === "ADD") {
                
            count = count + amount; 


        }
        

        if (event.type === "READ") {
            
            count = Math.max(0, count - amount); 

        }
        
        if (event.type === "CLEAR") {
            count = 0; 

        }
    }

    return count; 

 

}