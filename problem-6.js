function trackElevator(startFloor, minFloor, maxFloor, commands) {


    let floor = startFloor;


    for (const command of commands) {


        if (command === "UP") {
            
            floor++;
        }
        
        else if (command === "DOWN") {

            floor--;
        }


        floor = Math.max(minFloor, Math.min(floor, maxFloor));


    }

    return floor;

    
}