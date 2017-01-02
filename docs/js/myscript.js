$(function(){
    //alert("ready");

    $("#box1").on("click",function(){
        //alert("box1 clicked!");
        Puck.eval("LED1.set()");
    });

    $("#box2").on("click",function(){
        Puck.eval("LED1.reset()");
    });

});