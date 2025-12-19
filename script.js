const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let timeLeft = 100;
let gameRunning = true;

function createHeart() {
  if (!gameRunning) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  const maxX = gameArea.clientWidth - 40;
  const maxY = gameArea.clientHeight - 40;

  heart.style.left = Math.random() * maxX + "px";
  heart.style.top = Math.random() * maxY + "px";

  function collectHeart() {
    score++;
    scoreDisplay.textContent = score;
    heart.remove();
  }

  heart.addEventListener("click", collectHeart);
  heart.addEventListener("touchstart", collectHeart);

  gameArea.appendChild(heart);

  setTimeout(() => heart.remove(), 2700);
}

const heartSpawner = setInterval(createHeart, 1800);

const timer = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    gameRunning = false;
    clearInterval(timer);
    clearInterval(heartSpawner);
    alert(`Game Over 💔\nScore: ${score}`);
  }
}, 1000);
