(function() {
    // define constants
    var body = $("body");
    var width = body.width();
    var coinTypes = ['small', 'medium', 'big', 'boom'];
    var minRowWidth = 48;
    var rowNumber = Math.floor(width / 48);

    var createCoinDom = function(type) {
        if (coinTypes.indexOf(type) == -1) {
            return null;
        }
        return $('<div/>', { class: 'coin ' + type });
    };

    var getRandomNumber = function(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    };

    var interval = setInterval(function() {
        var randomRowNum = getRandomNumber(1, rowNumber);
        var randomCoinType = coinTypes[getRandomNumber(0, coinTypes.length - 1)];
        var randomCoin = createCoinDom(randomCoinType);
        var leftDistance = (randomRowNum - 1) * minRowWidth + "px";
        randomCoin.css('left', leftDistance);
        randomCoin.appendTo(body);
        var randomSpeed = getRandomNumber(3000, 12000);
        randomCoin.animate({ bottom: 0 }, randomSpeed, function() {
            randomCoin.remove();
        });
    }, 1000);

    $("body").on("click", ".coin", function(event) {
        $(event.target).remove();
        // clearInterval(interval);
    });

})(jQuery);