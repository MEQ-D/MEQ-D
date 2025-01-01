document.addEventListener("DOMContentLoaded", function () {
    const movableDiv = document.getElementById("movable-div");
    const gameArea = document.getElementById("game-area");

    
    function moveDivRandomly() {
        const randomX = Math.random() * (gameArea.clientWidth - movableDiv.offsetWidth);
        const randomY = Math.random() * (gameArea.clientHeight - movableDiv.offsetHeight);

        movableDiv.style.left = `${randomX}px`;
        movableDiv.style.top = `${randomY}px`;
    }

    
    movableDiv.addEventListener("mouseenter", moveDivRandomly);
});
