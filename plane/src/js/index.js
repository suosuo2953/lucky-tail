(function($){

  var mainContainer = $(".main");

  function initBg () {
    var ctx = document.getElementById('bg').getContext('2d'),
    canvasTemp = document.createElement("canvas"),
    tempContext = canvasTemp.getContext("2d"),
    scrollImg = new Image(),
    imgWidth = 0,
    imgHeight =0,
    imageData = {},
    canvasWidth = 375,
    canvasHeight = 667,
    scrollVal = 0,
    speed = 1;

    scrollImg.onload = loadImage;
    scrollImg.src = '../images/bg.jpg';

    function loadImage(){
      imgWidth = scrollImg.width,
      imgHeight = scrollImg.height;
      canvasTemp.width = imgWidth;
      canvasTemp.height =  imgHeight;
      render();
    }

    function render(){
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      if(scrollVal >= canvasHeight){
          scrollVal = 0;
      }

      scrollVal += speed;
      ctx.drawImage(scrollImg, 0, canvasHeight-scrollVal, imgWidth, scrollVal, 0, 0, imgWidth, scrollVal);
      ctx.drawImage(scrollImg, 0, scrollVal, imgWidth, imgHeight);

      setTimeout(function(){render();}, 50);
    }
  }

  function Plane (img, bombImg, direction, positionX, positionY) {
    this.node = $("<img/>", { src: img, class: 'plane' });
    this.node.css("left", positionX - 24 + "px");
    this.node.css("top", positionY + "px");
    mainContainer.append(this.node);
  }

  function Bullet (planeOffset) {
    this.node = $("<img/>", { src: './images/bullet.png', class: 'bullet' });
    this.node.css('left', planeOffset.left + 19 + 'px');
    this.node.css('top', planeOffset.top - 15  + 'px');
    mainContainer.append(this.node);

    this.move = function(planeOffset) {
      this.node.css('top', this.node.offset().top - 15 + 'px');
      this.node.css('left', planeOffset.left + 19 + 'px')
    };
  }

  var mainDom = $(".main");
  var myPlane = new Plane('./images/plane.png', '', 'up', mainDom.width() / 2, mainDom.height() - 200);
  myPlane.node.attr("id", "myPlane");
  $('body').on('touchmove', '#myPlane', function(event) {
    var e = event.originalEvent;
    var touch = e.touches[0];
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
  var start = function() {
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
    var bullet = new Bullet(myPlane.node.offset());
    bullets.push(bullet);
  };

  // start();
  initBg();
  setInterval(start, 100);
})(jQuery);
