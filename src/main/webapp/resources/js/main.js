$(function () {
    var timer = null;

    $('.sound').on("mousemove", function (evt) {
        evt.preventDefault();
    });

    $(".carousel-inner > div").eq(0).addClass("active");
    $(".carousel-indicators > li").eq(0).addClass("active");


    $('#myCarousel').on('slid.bs.carousel', changeAudio);
    $('#numCarousel').on('slid.bs.carousel', changeNumAudio);

    $('#alph-flex-container > div > a').on('click', function(evt){
        if(timer!=null){
            clearTimeout(timer);
        }
        var id = $(this).parent().attr("id");
        console.log("ID"+id)
        $('#myCarousel').carousel(parseInt(id));
        evt.preventDefault();
        timer = setTimeout(playSound,800);

    });

    $('#num-flex-container > div > a').on('click', function(evt){
        if(timer!=null){
            clearTimeout(timer);
        }
        var id = $(this).parent().attr("id");
        console.log("ID"+id)
        $('#numCarousel').carousel(parseInt(id));
        evt.preventDefault();
        timer = setTimeout(playSound,800);

    });

    function changeAudio() {

        var x = $("#soundFile");
        var sourceUrl = $(".carousel-inner > .active").find("img").attr("alt");
        console.log("source"+sourceUrl);
        $("#sourceFile").attr("src", "resources/sounds/"+sourceUrl+".mp3");
        x[0].pause();
        x[0].load();
    };

    function changeNumAudio() {

        var x = $("#soundFile");
        var sourceUrl = $(".carousel-inner > .active").find("span").attr("id");
        console.log("source"+sourceUrl);
        $("#sourceFile").attr("src", "resources/sounds/"+sourceUrl+".mp3");
        x[0].pause();
        x[0].load();
    };

    function playSound() {
        var x = $("#soundFile");

        x[0].oncanplaythrough = x[0].play();
    };

})