$(function(){

   $("#button02").on("click",function(){
     $(".back-blue").slideUp();
   })

   $("#button01").on("click",function(){
    $(".back-red").slideUp();
   })
   
   $("#button03").on("click",function(){
    $("#box03,#box07").slideUp();
   })

   $("#button04").on("click",function(){
    $(".box").slideDown();
   })


})