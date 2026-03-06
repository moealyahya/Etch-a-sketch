const container = document.getElementById("container");
const button = document.getElementById("button");

function getNewGrid(size) {
    container.innerHTML = "";
    const squareSize = 800 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

getNewGrid(16);

button.addEventListener("click", 
    function() {
        let newGrid = Number(prompt("Enter new grid size: (between 1 and 100)"));
        while (newGrid > 100 || newGrid < 1 || isNaN(newGrid)) {
            newGrid = Number(prompt("Reenter a valid prompt:"));
        }
        getNewGrid(newGrid);
    }
);