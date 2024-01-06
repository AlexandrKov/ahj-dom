document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".gameBoard");
    const goblin = document.querySelector(".goblin");
    let prevCell;

    for(let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell)
    }

    const startPosition = () => {
        const cells = document.querySelectorAll(".cell");
        const randomCell = cells[Math.floor(Math.random() * cells.length)]
        randomCell.appendChild(goblin)
        prevCell = randomCell;
    }
    startPosition()

    const game = () => {
        const cells = document.querySelectorAll(".cell");
        let a = Math.floor(Math.random() * cells.length);
        const randomCell = () => {
            return a = Math.floor(Math.random() * cells.length);
        }
        if(a !== prevCell) {
            cells[a].appendChild(goblin);
            prevCell = a;
        } else {
            randomCell()
        }
    }

    setInterval(game, 2000)
})