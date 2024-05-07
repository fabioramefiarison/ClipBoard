var Txt = $("#txt");
var copieBtn = $("#copie-btn");
var Copied = $("#copied");

$(document).ready(()=>{
    copieBtn.click(()=>{
        Txt.select();
        document.execCommand("copy") ;
        Copied.css("color","black");
        Copied.toggleClass("animation");
});
 // maka modal
 var modal = $("#id01");


 $(window).click(function(event) {
   if (event.target === modal) {
     modal.hide();
   }
 });

 // Get the topnav element
 var topnav = $("#myTopnav");

 // Toggle the class "responsive" on the topnav element
 topnav.click(function() {
   topnav.toggleClass("responsive");
 });

 // Get the target element
 var target = $("#poste");

 
 var array = ["Web junior"];

 var i = 0;
 var j = 0;


 function createLetter() {
   var lettre = document.createElement("span");
   target.appendChild(lettre);
   lettre.textContent = array[i][j];

   setTimeout(function() {
     lettre.remove();
   }, 2800);
 }


 function loop() {
   if (j < array[0].length) {
     createLetter();
     j++;
     loop();
   } else {
     j = 0;
     i++;

    
     if (i >= array.length) {
       i = 0;
     }

     setTimeout(function() {
       loop();
     }, 2800);
   }
 }


 loop();
})

