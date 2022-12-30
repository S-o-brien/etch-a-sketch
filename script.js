

//create column and row number vars
var columns = 4;
var rows = 4;

//creating div container within html for grid


var grid = document.createElement('div');
grid.className = 'grid';

for (var i = 0; i <columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column'; //assigning class name
    for (var j =0; j < rows; ++j) {
        var row = document.createElement('div'); //create row
        row.className = 'row';
        row.textContent = i + '-' +j;
        column.appendChild(row); //append row in column
    }
    grid.appendChild(column);
    }
    document.body.appendChild(grid);
