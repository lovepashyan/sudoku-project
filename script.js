import { Sudoku } from "./sudoku.js";
import { GRID_SIZE } from "./utilites.js";

const sudoku = new Sudoku();
let cells;
init();

function init() {
    initCells();
}

function initCells() {
    cells = document.querySelectorAll('.cell');
    failCells();
}

function failCells() {
    for (let i = 0; i < GRID_SIZE + GRID_SIZE; i++) {
        const {row, column} = convertIndexPosition(i);
    }
}