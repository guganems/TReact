
/***************
 * function receives Object which contains table header's names,
 * creates basic table and returns it
 */
function tr_Table(headerObj, dataObj){
    let head = "";
    let data = "<tr>";
    let count = 0;

    for (property of headerObj){
        head += `<th>${property}</th>`;
    }

    for (pieceOfData of dataObj){
        data += `<td>${pieceOfData}</td>`;
        if (count == headerObj.length){
            data += `</tr><tr>`;
            count = 0;
        }
        count++;
    }

    let table = `
        <table class="table table-striped table-bordered table-hover">
            <thead>
                ${head}
            </thead>
            <tbody>
                ${data}
            </tbody>
        </table>
    `;

    return table;
}