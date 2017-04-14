var bgCanvas = document.getElementById('bgCanvas');
var context = bgCanvas.getContext("2d");

var bgDom = document.getElementById('bgCanvas');
var bgWidth = bgDom.width;
var bgHeight = bgDom.height;

function getRandomNumber (minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

var planeImg = new Image();
planeImg.src = "../images/plane.png";
function Plane () {
  this.x = bgWidth / 2;
  this.y = bgHeight - 100;
  this.img = planeImg;
  this.move = function () {
    context.drawImage(planeImg, this.x, this.y, this.img.width, this.img.height);
  }
}

var enemy1Img = new Image();
enemy1Img.src = "../images/enemy1.png";

var enemy2Img = new Image();
enemy2Img.src = "../images/enemy2.png";

var enemy3Img = new Image();
enemy3Img.src = "../images/enemy3.png";

function Enemy () {
  this.x = getRandomNumber(0, bgWidth);
  this.y = 0;
  this.img = enemy3Img;
  var random = getRandomNumber(1, 3);
  if (random == 1) {
    this.img = enemy1Img;
  } else if (random == 2) {
    this.img = enemy2Img
  }
  this.move = function() {
    context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
  };
}

var bgImg = new Image();
bgImg.src = "../images/bg.jpg";
function Bg () {
  this.y = -bgHeight;
  this.y1 = 0;
  this.move = function() {
    context.drawImage(bgImg, 0, this.y);
    context.drawImage(bgImg, 0, this.y1);
    this.y++;
    this.y1++;
    if (this.y >= 0) {
      this.y = -bgHeight;
    }
    if (this.y1 >= bgHeight) {
      this.y1 = 0;
    }
  };
}

var bulletImg = new Image();
bulletImg.src = "../images/bullet.png";

function Bullet () {
  this.x = plane.x + plane.img.width / 2 - 1;
  this.y =  plane.y;
  this.img = bulletImg;
  this.move = function(opacity) {
    if (opacity) {
      context.globalAlpha = 0.5;
      context.drawImage(bulletImg, this.x, this.y, this.img.width, this.img.height);
      context.globalAlpha = 1.0;
    } else {
      context.globalAlpha = 1.0;
      context.drawImage(bulletImg, this.x, this.y, this.img.width, this.img.height);
    }
  }
}

var bulletCounter = 0;
function fireBullet () {
  bulletCounter += 1;
  if (bulletCounter == 3) {
    bulletCounter = 0;
    var bullet = new Bullet();
    bullets.push(bullet);
  }
}

function moveBullets () {
  var bulletLength = bullets.length;
  for(var i = 0; i < bulletLength; i++) {
    var tempBullet = bullets[i];
    tempBullet.y -= 25;
    tempBullet.move(Math.random() >= 0.5);
  }
}

function removeItemOutOfRange () {
  var bulletLength = bullets.length;
  for(var i = bulletLength - 1; i >= 0; i--) {
    var tempBullet = bullets[i];
    if (tempBullet.y <= 0) {
      bullets.splice(i, 1);
    }
  }

  var enemyLength = enemies.length;
  for(var i = enemyLength - 1; i >= 0; i--) {
    var enemy = enemies[i];
    if (enemy.y > bgHeight) {
      enemies.splice(i, 1);
    }
  }
}

function addEnemy () {
  enemyCounter += 20;
  if (enemyCounter % 800 == 0) {
    enemyCounter = 0;
    enemies.push(new Enemy());
  }
}

function moveEnemies () {
  var enemyLength = enemies.length;
  for (var i = 0; i < enemyLength; i++) {
    var enemy = enemies[i];
    enemy.y += 5;
    enemy.move();
  }
}

var bullets = [];
var enemies = [];
var plane = new Plane();
var bg = new Bg();
var enemyCounter = 0;
function start () {
  context.clearRect(0, 0 , bgWidth, bgHeight);
  bg.move();
  plane.move();
  fireBullet();
  moveBullets();
  addEnemy();
  moveEnemies();
  removeItemOutOfRange();
}

var touched = false;
bgCanvas.addEventListener("touchmove", function(event) {
  //FIXME 需要判断是否选中飞机
  var touch = event.touches[0];
  if (touched || (touch.pageX >= plane.x && touch.pageX <= plane.x + plane.img.width
    && touch.pageY >= plane.y && touch.pageY <= plane.y + plane.img.height)) {
    touched = true;
    if (touch.pageX >= 0 && touch.pageX <= (bgWidth - plane.img.width) && touch.pageY >= 0 && touch.pageY <= (bgHeight - plane.img.height)) {
      plane.x = touch.pageX;
      plane.y = touch.pageY;
      plane.move();
    }
  }
});

bgCanvas.addEventListener("touchend", function(event) { touched = false; });
setInterval(start, 20);