

function maxTasks(tasks) {


    const sorted = [...tasks].sort((a, b) => a[1] - b[1]);


        let count = 0;

    let lastFinish = -Infinity;

     let index = 0;

    while (index < sorted.length) {

        if (sorted[index][0] >= lastFinish) {

            count++;


            lastFinish = sorted[index][1];
        }



        index++;

    }

    

    return count;
}