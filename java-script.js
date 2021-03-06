$(window).on("load", function() {
    $("#loader").fadeOut("slow");
    $('dummyanim').first().addClass('reveal');
    $('wave').first().addClass('anim');

    $('.main').children().each(function() {
        var startToShow = $(this).offset().top + $(this).outerHeight() / 8; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow) {
            $(this).addClass('reveal');
        }
    });

})

function openNav() {
    document.getElementById("fade").style.display = "block";
    document.getElementById("cross").style.display = "block";
    document.getElementById("Hamburger").style.width = "250px";
}

function closeNav() {
    document.getElementById("fade").style.display = "none";
    document.getElementById("cross").style.display = "none";
    document.getElementById("Hamburger").style.width = "0px";
}

$(window).scroll(function() {

    var scrolled = $(this).scrollTop();
    var interval = 0;

    $('.grid-container').children().each(function() {
        var startToShow = $(this).offset().top + $(this).outerHeight() / 3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow) {
            $(this).addClass('reveal');
        }
    });

    $('.section').children().each(function() {
        var startToShow = $(this).offset().top + $(this).outerHeight() / 3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow) {
            $(this).addClass('reveal');
        }
    });
});