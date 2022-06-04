//Excel -2
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");
cellsContentDiv.addEventListener("scroll", function(e) {
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop + "px";
    leftCol.style.left = scrollFromLeft + "px";
    topLeftCell.style.top = scrollFromTop + "px";
    topLeftCell.style.left = scrollFromLeft + "px";
})
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function(e) {
        let rowId = Number(e.target.getAttribute("rowid"));
        let colid = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65 + colid) + (rowId + 1) + "";
        // console.log(address);
        addressInput.value = address;
    })
    allCells[i].addEventListener("blur", function(e) {
        let cellValue = e.target.textContent;
        let rowId = e.target.getAttribute("rowid");
        let colId = e.target.getAttribute("colid");
        let cellObject = db[rowId][colId];
        if (cellObject.value == cellValue) {
            return;
        }
        cellObject.value = cellValue;
        console.log(cellObject);
    })

}