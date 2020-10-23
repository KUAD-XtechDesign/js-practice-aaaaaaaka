$(function(){
  let txt1 ="やき"
 　let txt2 ="のり" 
 　let num1 =20;
   let num2=32;
    $("#button01").on("click",function(){
      $("#content").text("こんにちは");
    })
 
    $("#button02").on("click",function(){
     $("#content").text(txt1);
    })
    
    $("#button03").on("click",function(){
     $("#content").text(txt1+txt2);
    })
 
    $("#button04").on("click",function(){
     $("#content").text(num1+num2);
    })
 

    $("#button05").on("click",function(){
        $("#content").text(txt1 + ( num1 * num2 ) + "にく");
       })
 
 })