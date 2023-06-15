import { generateSudoku, findEmptyCell} from "./sudokuGenerator.js";
import { BOX_SIZE, GRID_SIZE } from "./utilites.js";

export class Sudoku {
    constructor() {
        this.grid = generateSudoku();
    }

    getDuplicatePositions(row, column, value) {
        const duplicatesInColumn = this.getDuplicationsInColumn( row, column, value);
        const duplicatesInRow = this.getDuplicationsInRow(row, column, value);
        const duplicatesInBox = this.getDuplicationsInBox(row, column, value);

        const duplicates = [...duplicatesInColumn, ...duplicatesInRow];
        duplicatesInBox.forEach(duplicatesInBox => {
            if (duplicatesInBox.row !== row && duplicatesInBox.column !== column) duplicates.push(duplicatesInBox);
            
        });
        return duplicates;
    }

    getDuplicationsInColumn( row, column, value) {
        const duplicates =[];
        for (let iRow = 0; iRow < GRID_SIZE; iRow++) {
            if (this.grid[iRow][column] === value && iRow !== row) {
                duplicates.push({ row: iRow, column});
            }
        }
        return duplicates;
    }

    getDuplicationsInRow(row, column, value ) {
        const duplicates = [];
        for (let iColumn = 0; iColumn < GRID_SIZE; iColumn++) {
            if (this.grid[row][iColumn] === value && iColumn !== column) {
                duplicates.push({ row, column: iColumn});
            }
        
        }
        return duplicates;
    }

    getDuplicationsInBox( row, column, value) {
        const duplicates = [];
        const firstRowInBox = row - row % BOX_SIZE;
        const firstColumnInBox = column - column % BOX_SIZE;

        for ( let iRow = firstRowInBox; iRow < firstRowInBox + BOX_SIZE; iRow++) {
            for ( let iColumn = firstColumnInBox; iColumn < firstColumnInBox + BOX_SIZE; iColumn++) {
                if (grid[iRow][iColumn] === value && iRow !== row && iColumn !== column) {
                    duplicates.push({ row: iRow, column: iColumn});
                };
            }
        }
        return duplicates;
    }

    haveEmptyCells() {
        return Boolean(findEmptyCell(this.grid));
    }
}

