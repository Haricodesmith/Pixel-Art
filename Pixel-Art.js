// Initial references
let container = document.querySelector('.container');
let gridButton = document.getElementById('submit-grid');
let clearGridButton = document.getElementById('clear-grid');
let gridWidth = document.getElementById('width-range');
let gridHeight = document.getElementById('height-range');
let colorButton = document.getElementById('color-input');
let eraseBtn = document.getElementById('erase-btn');
let paintBtn = document.getElementById('paint-btn');
let widthValue = document.getElementById('width-value');
let heightValue = document.getElementById('height-value');

let draw = false;
let erase = false;

// Update the displayed width and height values
gridWidth.addEventListener('input', () => widthValue.textContent = gridWidth.value);
gridHeight.addEventListener('input', () => heightValue.textContent = gridHeight.value);

// Create grid
gridButton.addEventListener('click', () => {
    container.innerHTML = "";

    for (let i = 0; i < gridHeight.value; i++) {
        let row = document.createElement('div');
        row.classList.add('gridRow');

        for (let j = 0; j < gridWidth.value; j++) {
            let col = document.createElement('div');
            col.classList.add('gridCol');

            // Drawing on grid
            col.addEventListener('mousedown', () => {
                draw = true;
                if (!erase) {
                    col.style.backgroundColor = colorButton.value;
                } else {
                    col.style.backgroundColor = 'transparent';
                }
            });

            col.addEventListener('mousemove', (e) => {
                if (draw && !erase) {
                    col.style.backgroundColor = colorButton.value;
                } else if (draw && erase) {
                    col.style.backgroundColor = 'transparent';
                }
            });

            col.addEventListener('mouseup', () => {
                draw = false;
            });

            row.appendChild(col);
        }

        container.appendChild(row);
    }
});

// Clear grid
clearGridButton.addEventListener('click', () => {
    container.innerHTML = "";
});

// Erase functionality
eraseBtn.addEventListener('click', () => {
    erase = true;
});

// Paint functionality
paintBtn.addEventListener('click', () => {
    erase = false;
});
