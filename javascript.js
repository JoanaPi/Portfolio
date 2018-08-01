//  var arrow = document.getElementById("arrow");
var $arrow = $("#arrow a");  
var $off = $("main").offset().top;    //obiekt jquery $nazwaobiektu

$("#arrow").click(function ()
 { $('html,body').animate({ 
 scrollTop: $("main").offset().top }     //// metoda offset- obliczanie odległości od wspolrzednych 0 0
 , 1200); });

