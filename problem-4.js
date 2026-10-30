
function rankStudents(students) {


    const sorted = [...students].sort((a, b) => b.score - a.score);
    



    const result = [];

    for (let i = 0; i < sorted.length; i++) {


        let rank = i + 1;



        if (i > 0 && sorted[i].score === sorted[i - 1].score) {



            rank = result[i - 1].rank;

        }

        result.push({ ...sorted[i], rank });


    }

    return result;

    
}
