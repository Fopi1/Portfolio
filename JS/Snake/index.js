let example = document.getElementById("gameCanvas"),
  ctx = example.getContext("2d");
let grd = ctx.createLinearGradient(0, 0, 200, 100);

const ground = new Image();
ground.src = "./ground.png";

const foodImg = new Image();
foodImg.src = "./carrot.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

let dir;

document.addEventListener("keydown", direction);
function direction(e) {
  if (e.keyCode == 37 && dir != "right") {
    dir = "left";
  } else if (e.keyCode == 38 && dir != "down") {
    dir = "up";
  } else if (e.keyCode == 39 && dir != "left") {
    dir = "right";
  } else if (e.keyCode == 40 && dir != "up") {
    dir = "down";
  }
}

function eatTail(head, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (head.x === arr[i].x && head.y === arr[i].y) {
      clearInterval(game);
    }
  }
}

function drawGame() {
  ctx.drawImage(ground, 0, 0);
  ctx.drawImage(foodImg, food.x, food.y);
  for (let i = 0; i < snake.length; i++) {
    let gradient = ctx.createLinearGradient(
      snake[i].x,
      snake[i].y,
      snake[i].x + box,
      snake[i].y + box
    );
    gradient.addColorStop(0, "#00008B");
    gradient.addColorStop(1, "#00CED1");
    ctx.fillStyle = i === 0 ? gradient : "blue";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = "yellow";
  ctx.font = "50px sans-serif";
  ctx.fillText(score, box * 2.5, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX === food.x && snakeY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    snake.pop();
  }

  if (
    snakeX < box ||
    snakeX > box * 17 ||
    snakeY < 3 * box ||
    snakeY > box * 17
  ) {
    clearInterval(game);
  }
  switch (dir) {
    case "left":
      snakeX -= box;
      break;
    case "right":
      snakeX += box;
      break;
    case "up":
      snakeY -= box;
      break;
    case "down":
      snakeY += box;
      break;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  eatTail(newHead, snake);
  snake.unshift(newHead);
}

let game = setInterval(drawGame, 150);
