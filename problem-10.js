
function countConnectedFriends(friendships, startPerson) {

    const graph = new Map();

    for (const [person1, person2] of friendships) {


        if (!graph.has(person1)) graph.set(person1, []);

              if (!graph.has(person2)) graph.set(person2, []);    


                  graph.get(person1).push(person2);


        graph.get(person2).push(person1);
        

    }


    const visited = new Set();

    const stack = [startPerson];


    for (; stack.length > 0;) {


        const current = stack.pop();

        if (visited.has(current)) continue;


        visited.add(current);

        const friends = graph.get(current) || [];


        for (const friend of friends) {


            stack.push(friend);
        }

    }


    return visited.size;
    
}