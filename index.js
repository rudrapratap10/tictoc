/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
var newValue = 0,colIndex, count = 0;
const winningArray = ['','','','','','','','',''];
var resultPopup = document.getElementById('result');
var resultContent = document.getElementById('result-content');

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        var gridValue = grid[colIdx][rowIdx];
        colIndex = (colIdx == 0) ? 0 + rowIdx : (colIdx == 1) ? 3 + rowIdx : (colIdx == 2) ? 6 + rowIdx : 0;
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
            winningArray[colIndex] = 'X';      
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
            winningArray[colIndex] = 'O'
        }
        newValue = (newValue == 1) ? 1 : 0;
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    if((winningArray[0]== 'X' && winningArray[1] == 'X' && winningArray[2] == 'X') ||
       (winningArray[3]== 'X' && winningArray[4] == 'X' && winningArray[5] == 'X') ||
       (winningArray[6]== 'X' && winningArray[7] == 'X' && winningArray[8] == 'X') ||
       (winningArray[0]== 'X' && winningArray[3] == 'X' && winningArray[6] == 'X') ||
       (winningArray[1]== 'X' && winningArray[4] == 'X' && winningArray[7] == 'X') ||
       (winningArray[2]== 'X' && winningArray[5] == 'X' && winningArray[8] == 'X') ||
       (winningArray[0]== 'X' && winningArray[4] == 'X' && winningArray[8] == 'X') ||
       (winningArray[2]== 'X' && winningArray[4] == 'X' && winningArray[6] == 'X')
      )
    {
        resultPopup.style.display = "block";
        resultContent.innerHTML = "Congratulations X Won";
        setTimeout(function(){
            resultPopup.style.display = "none";
            location.reload();
        },5000);
        
    }
    if((winningArray[0]== 'O' && winningArray[1] == 'O' && winningArray[2] == 'O') ||
       (winningArray[3]== 'O' && winningArray[4] == 'O' && winningArray[5] == 'O') ||
       (winningArray[6]== 'O' && winningArray[7] == 'O' && winningArray[8] == 'O') ||
       (winningArray[0]== 'O' && winningArray[3] == 'O' && winningArray[6] == 'O') ||
       (winningArray[1]== 'O' && winningArray[4] == 'O' && winningArray[7] == 'O') ||
       (winningArray[2]== 'O' && winningArray[5] == 'O' && winningArray[8] == 'O') ||
       (winningArray[0]== 'O' && winningArray[4] == 'O' && winningArray[8] == 'O') ||
       (winningArray[2]== 'O' && winningArray[4] == 'O' && winningArray[6] == 'O')
     ) 
    {
        resultPopup.style.display = "block";
        resultContent.innerHTML = "Congratulations O Won";
        setTimeout(function(){
            resultPopup.style.display = "none";
            location.reload();
        },5000);
        
    }
    if(count == 9){
        resultPopup.style.display = "block";
        resultContent.innerHTML = "Game Draw";
        setTimeout(function(){
            resultPopup.style.display = "none";
            location.reload();
        },5000);
        
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    newValue++;count++;
    grid[colIdx][rowIdx] = newValue;
    renderMainGrid();
    addClickHandlers();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
