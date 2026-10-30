

function findFreeTime(bookedIntervals, workingHours) {



    const [workStart, workEnd] = workingHours;
    const clipped = [];



    for (let i = 0; i < bookedIntervals.length; i++) {


        const start = Math.max(bookedIntervals[i][0], workStart);

        const end = Math.min(bookedIntervals[i][1], workEnd);

        if (start < end) {

            clipped.push([start, end]);

        }

    }

    clipped.sort((a, b) => a[0] - b[0]);

    const merged = [];


    for (let i = 0; i < clipped.length; i++){

        const current = clipped[i];

        const last = merged[merged.length - 1];


        if (!last || current[0] > last[1]) {

            merged.push([...current]);

        }
        
        
        else {

            last[1] = Math.max(last[1], current[1]);
        }


    }

    const freeTimes = [];

    let currentTime = workStart;



    for (const [start, end] of merged) {

        if (currentTime < start) {

            freeTimes.push([currentTime, start]);

        }

        currentTime = end;


    }

    if (currentTime < workEnd) {


        freeTimes.push([currentTime, workEnd]);

    }

    return freeTimes;

    
}