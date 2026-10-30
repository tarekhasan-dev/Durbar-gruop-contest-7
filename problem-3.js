
function countFilesInFolder(structure) {

    let count = 0;

    for (const item of structure) {

        if (item.type === "file") {

            count = count + 1;

        }

        else if (item.type === "folder") {

            count = count + countFilesInFolder(item.children);

        }
    }

    return count;
}
