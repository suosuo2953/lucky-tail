(function() {
    // define constants
    $(".scores").hide();
    $(".restart-cover").hide();
    $(".plus").hide();
    var body = $("body");
    var gameContainer = $(".game-container");
    var width = gameContainer.width();
    var coinTypes = ['small', 'medium', 'big', 'boom'];
    var minRowWidth = 48;
    var rowNumber = Math.floor(width / 48);
    var interval = null;
    var createCoinDom = function(type) {
        if (coinTypes.indexOf(type) == -1) {
            return null;
        }
        return $('<div/>', { class: 'coin ' + type, 'data-type': type });
    };

    var getRandomNumber = function(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };

    var setCoinInterval = function() {
        return setInterval(function() {
            var randomRowNum = getRandomNumber(1, rowNumber);
            var randomCoinType = coinTypes[getRandomNumber(0, coinTypes.length - 1)];
            var randomCoin = createCoinDom(randomCoinType);
            var leftDistance = (randomRowNum - 1) * minRowWidth + "px";
            randomCoin.css('left', leftDistance);
            randomCoin.appendTo(gameContainer);
            var randomSpeed = getRandomNumber(1000, 6000);
            randomCoin.animate({ bottom: 0 }, { duration: randomSpeed, easing: 'linear', complete: function() {randomCoin.remove();} });
        }, 500);
    };

    var showPlusIcon = function(coin) {
        var leftPx = coin.css("left");
        var leftDistance = parseInt(leftPx.replace("px", '')) + 48;
        $(".plus").css("left", leftDistance);
        var bottomPx = coin.css("bottom");
        var bottomDistance = parseInt(bottomPx.replace("px", '')) + 10;
        $(".plus").css("bottom", bottomDistance);
        $(".plus").fadeIn();
        setTimeout(function() {$(".plus").fadeOut();}, 600);
    };

    $(".restart").on("click", function() {
        $(".restart-cover").hide();
        $(".scores").show();
        $(".value").text(0);
        interval = setCoinInterval();
    });

    $(".play-icon").on("click", function() {
        $(".cover").hide();
        $(".scores").show();
        interval = setCoinInterval();
    });

    $("body").on("click", ".coin", function(event) {
        var coin = $(event.target);
        var type = coin.attr("data-type");
        if (type == 'boom') {
            coin.removeClass("boom").addClass("boom-out");
            setTimeout(function() {
                clearInterval(interval);
                $(".coin").remove();
                $(".restart-cover").show();
                $(".scores").hide();
            }, 300);
            return;
        }
        coin.remove();
        showPlusIcon(coin);

        var value = $("." + type + "-value").text();
        value = parseInt(value) + 1;
        $("." + type + "-value").text(value);
    });

})(jQuery);