const board = document.querySelector(".chessboard");

for(let row = 1; row <= 8; row++) {
    for(let col = 1; col <= 8; col++) {
        const box = document.createElement("div");
        if((row + col)%2 == 0) {
            box.classList.add("white")
        } else {
            box.classList.add("black")
        }
        board.appendChild(box);
    }
}