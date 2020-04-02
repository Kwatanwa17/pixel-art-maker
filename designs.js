// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // get table
    let canvas = document.getElementById('pixelCanvas');
    // if the table already has child elements, delete all of them
    if (canvas.hasChildNodes()) {
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }
        document.querySelectorAll('td').forEach(elem => elem.style.backgroundColor = "white");
    }

    // get input
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    // describe table
    for (let i = 1; i <= height; i++) {
        let row = document.createElement("tr");
        for (let i = 1; i <= width; i++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        // console.log(row);
        canvas.appendChild(row);
    }

    // add eventListener to paint
    document.querySelectorAll("td").forEach(elem => elem.addEventListener("click", function() {
        this.style.backgroundColor = document.getElementById('colorPicker').value;
    }));

}

// Your code goes here!

document.getElementById('sizePicker').addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
});

document.getElementById('colorPicker').addEventListener('change', function (evt) {
    evt.preventDefault();
    document.getElementById('colorPicker').style.color = document.getElementById('colorPicker').value;
});



