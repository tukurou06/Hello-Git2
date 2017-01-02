$(function(){
    //alert("ready");
    LED1_S = false;
    LED2_S = false;
    LED3_S = false;

    $("#box1").on("click",function(){
        //alert("box1 clicked!");
        if(LED1_S==false){
            Puck.eval("LED1.set()");
            LED1_S = true;
        }else{
            Puck.eval("LED1.reset()");            
            LED1_S = false;
        }
    });

    $("#box2").on("click",function(){
        //alert("box1 clicked!");
        if(LED2_S==false){
            Puck.eval("LED2.set()");
            LED2_S = true;
        }else{
            Puck.eval("LED2.reset()");            
            LED2_S = false;
        }
    });

    $("#box3").on("click",function(){
        if(LED3_S==false){
            Puck.eval("LED3.set()");
            LED3_S = true;
        }else{
            Puck.eval("LED3.reset()");            
            LED3_S = false;
        }
    });

});