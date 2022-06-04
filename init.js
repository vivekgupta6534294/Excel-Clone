let cellsContentDiv = document.querySelector(".cells-content");



function initCells() {
    //Blank Wala Space
    let cellsContent = "<div class='top-left-cell'></div>";

    //top row
    cellsContent += "<div class='top-row'>";
    //for colomn
    for (let i = 0; i < 26; i++) {
        cellsContent += `<div class='top-row-cell'>${String.fromCharCode(65+i)}</div>`;
    }
    cellsContent += "</div>";
    // left col
    cellsContent += "<div class='left-col'>";
    for (let i = 0; i < 100; i++) {
        cellsContent += `<div class='left-col-cell'>${i+1}</div>`

    }
    cellsContent += "</div>";

    cellsContent += "<div class='cells'>";
    for (let i = 0; i < 100; i++) {
        cellsContent += "<div class='row'>";
        // Coloumn
        for (let j = 0; j < 26; j++) {
            cellsContent += "<div class='cell' contentEditable></div>";
        }
        cellsContent += "</div>"
    }
    cellsContent += "</div>";
    cellsContentDiv.innerHTML = cellsContent;
}
initCells();

let db;

function initDb() {
    db = [];
    for (let i = 0; i < 100; i++) {
        let row = [];
        for (let j = 0; j < 26; j++) {
            let name = String.fromCharCode(65 + j) + (i + 1) + "";
            let cellObject = {
                name: name,
                value: ""
            }
            row.push(cellObject);
        }
        db.push(row);
    }
}
initDb();
console.log(db);