
$(".btn1").click(function(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    $(this).toggleClass("pressed1");
    setTimeout(function(){
        $(".btn1").toggleClass("pressed1");
    }, 100)
    $.each($("div"), function(i, item){
       
        setTimeout(function(){
        $(item).css("background-color", randomColor).text("").animate({marginLeft: 40});
        $(".box-1").text(randomColor);
        setTimeout(function(){
            $(item).animate({marginLeft:0})
        })
        }, 90 * i)
      reset();
      

    });
})
$(".btn2").click(function(){
    $(this).toggleClass("pressed2");
    setTimeout(function(){
        $(".btn2").toggleClass("pressed2");
    }, 100)
    $.each($("div"), function(i, item){
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        setTimeout(function(){
        $(item).css("background-color", randomColor).text(randomColor).animate({height: 40});
        setTimeout(function(){
            $(item).animate({height:130})
        })
        }, 90 * i)
      reset();
      

    });
})

function reset(){
    i = 0;
}