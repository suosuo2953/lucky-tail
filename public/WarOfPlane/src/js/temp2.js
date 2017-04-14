(function($){

  var mainContainer = $(".main");
  var containerWidth = mainContainer.width();
  var containerHeight = mainContainer.height();
  var enemyAttrs = { 'small': { 'hp': 20, img: '../images/enemy.png' }, 'medium': {}, 'big': {} };
  var imageObj = { 'bg': '../images/bg.jpg' };
  var canvas = document.getElementById('bgCanvas');
  var ctx = canvas.getContext("2d");
  var scrollImg = new Image();
  scrollImg.src = imageObj.bg;
  var bgWidth = 0;
  var bgHeight =0;
  var scrollVal = 0;
  var speed = 1;

  function renderBg(){
    ctx.clearRect(0, 0, containerWidth, containerHeight);

    if(scrollVal >= containerHeight){
        scrollVal = 0;
    }

    scrollVal += speed;
    bgWidth = scrollImg.width,
    bgHeight = scrollImg.height;
    //console.log(bgWidth, bgHeight);
    ctx.drawImage(scrollImg, 0, containerHeight-scrollVal, bgWidth, scrollVal, 0, 0, bgWidth, scrollVal);
    ctx.drawImage(scrollImg, 0, scrollVal, bgWidth, bgHeight);
  }

  function getRandomNumber (minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

    var planeImg = new Image();
    planeImg.src = '../images/plane.png';
    planeImg.onload = function() {
      ctx.drawImage(planeImg, planeImg.wdith, planeImg.height);
    };
  
  function Plane (img, bombImg, direction, positionX, positionY) {
    // this.node = $("<img/>", { src: img, class: 'plane absolute' });
    // this.node.css("left", positionX - 24 + "px");
    // this.node.css("top", positionY + "px");

    var planeImg = new Image();
    planeImg.src = '../images/plane.png';
    planeImg.onload = function() {
      ctx.drawImage(planeImg, planeImg.wdith, planeImg.height);
    };
    //mainContainer.append(this.node);
  }

  function Enemy (type) {
    var enemyAttr = enemyAttrs[type];
    if (!enemyAttr) {
      return;
    }
    this.hp = enemyAttr.hp;
    this.node = $("<img/>", { src: enemyAttr.img, class: 'enemy absolute' });
    var randomLeft = getRandomNumber(20, containerWidth - 20);
    this.node.css('left', randomLeft + 'px');
    mainContainer.append(this.node);
    this.move = function() {
      this.node.css('top', this.node.offset().top + 5 + 'px');
    };
  }

  function Bullet (planeOffset) {
    this.damage = 10;
    this.node = $("<img/>", { src: './images/bullet.png', class: 'bullet absolute' });
    this.node.css('left', planeOffset.left + 21 + 'px');
    this.node.css('top', planeOffset.top - 15  + 'px');
    mainContainer.append(this.node);

    this.move = function(planeOffset) {
      this.node.css('top', this.node.offset().top - 20 + 'px');
      this.node.css('left', planeOffset.left + 21 + 'px')
    };
  }

  var bgPositionY = 0;
  function moveBg () {
    $(".main").css('background-position-y', bgPositionY + 'px');
    bgPositionY += 10;
    if (bgPositionY >= $('body').height()) {
      bgPositionY = 0;
    }
  }

  function moveBullets () {
    var bulletLength = bullets.length;
    for( var i = 0; i < bulletLength; i++) {
      var tempBullet = bullets[i];
      var node = bullets[i].node;
      if (node.offset().top <= 10) {
        node.remove();
      } else {
        if (i % 2 == 0) {
          tempBullet.node.addClass('opacity');
        } else {
          tempBullet.node.removeClass('opacity');
        }
        tempBullet.move(myPlane.node.offset());
      }
    }
  }

  function moveEnemies () {
    var length = enemies.length;
    for (var i = 0; i < length; i++) {
      var enemy = enemies[i];
      var node = enemy.node;
      if (node.offset().top >= containerHeight) {
        node.remove();
      } else {
        enemy.move();
      }
    }
  }

  //var mainDom = $(".main");
  var plane = new Plane('./images/plane.png', '', 'up', containerWidth / 2, containerHeight - 200);
  //var myPlane = new Plane('./images/plane.png', '', 'up', mainDom.width() / 2, mainDom.height() - 200);
  //myPlane.node.attr("id", "myPlane");
  $('body').on('touchmove', '#myPlane', function(event) {
    var e = event.originalEvent;
    var touch = e.touches[0];
    return;
    var planeWidth = myPlane.node.width();
    var planeHeight = myPlane.node.height();
    var mainWidth = $(".main").width();
    var mainHeight = $(".main").height();
    // x轴防止飞机飞出屏幕
    if (touch.pageX <= planeWidth / 2 || touch.pageX + (planeWidth / 2) > mainWidth) {
      return;
    }
    // Y轴防止飞机飞出屏幕
    if(touch.pageY <= planeHeight || touch.pageY + planeHeight / 2 >= mainHeight) {
      return;
    }

    myPlane.node.css("left", touch.pageX - planeWidth / 2);
    myPlane.node.css("top", touch.pageY - planeHeight / 2);
  });

  var bullets = [];
  var enemies = [];
  var times = 0;
  var start = function() {
    //renderBg();
    return;
    moveBg();
    moveBullets();
    moveEnemies();
    times += 20;
    if (times % 1000 == 0) {
      var enemy = new Enemy('small');
      enemies.push(enemy);
    }
    var bullet = new Bullet(myPlane.node.offset());
    bullets.push(bullet);
  };

  // start();
  // Canvas way
  // initBg();
  setInterval(start, 50);
})(jQuery);
