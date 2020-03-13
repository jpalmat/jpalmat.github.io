$(document).ready(function(){
    var started=false;
    $("#start").click(function(){
        
        $("div.boundary").css("background-color","grey");
        started =  true;
    });

    $("div.boundary").mouseover(function(){
        var s = $(this).attr('class');
        console.log(s);
        $("div.boundary").css("background-color","red");
        $("h2#status").html("you have lost! Click the \"S\" to begin.");
        started =  false;
    });
   
    
    $("#end").click(function(){
        if(started){
        $("div.boundary").css("background-color","grey");
        $("h2#status").html("you have won! Click the \"S\" to begin.");
        started =  false;
        }
        
    });
});

