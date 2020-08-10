$(window).on("load",function(){
    $("#loader").fadeOut("slow");
    $('dummyanim').first().addClass('reveal');

    $('.main').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });

})


$(window).scroll(function () 
{
    
    var scrolled = $(this).scrollTop();
    var interval = 0;
    
    $('.grid-container').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });

    $('.section').children().each(function () 
    {
        var startToShow = $(this).offset().top + $(this).outerHeight()/3; //fires when a third of the div appears, change the 3 to experiment with different positions
        var bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > startToShow)
        {
            $(this).addClass('reveal');
        }
    });
});





