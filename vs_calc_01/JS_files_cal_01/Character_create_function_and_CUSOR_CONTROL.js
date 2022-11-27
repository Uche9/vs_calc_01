                   //function Greetings(){
            //document.getElementById("demo").innerHTML="Good Morning" }     


   
 // Active cell color
     var Acolr="white" ; 


//  Set Background colour-Inactive cell color and make button not clickable.

    
    var Icolr= "blue";
     function activateInactivecellcolr() {
  
    
 for (i=1; i<50; i++){
 for (j=1;j<100; j++){
     
var Iden= 'a'+i+'b'+j ;
     
    document.getElementById(Iden).style.backgroundColor= Icolr
             }
            }
       
     }
   


 // Global variables
    var p=0, q=0 ;



// Create Intelligent cusor Start

   
         
    // Create Cusor Start



    
function show_a1pb1q (){
   colr=Acolr;
   var Iden1='a'+(1+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}

   function clear_a1pb1q (){
   colr=Icolr;
   var Iden1='a'+(1+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}


    function show_a2pb1q (){
   colr=Acolr;
   var Iden2='a'+(2+p)+'b'+(1+q);
   document.getElementById(Iden2).style.backgroundColor=colr;}

   function clear_a2pb1q (){
   colr=Icolr;
   var Iden1='a'+(2+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}

   function show_a3pb1q (){
   colr=Acolr;
   var Iden3='a'+(3+p)+'b'+(1+q);
   document.getElementById(Iden3).style.backgroundColor=colr;}

   function clear_a3pb1q (){
   colr=Icolr;
   var Iden1='a'+(3+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}
   
   function show_a4pb1q (){
   colr=Acolr;
   var Iden4='a'+(4+p)+'b'+(1+q);
   document.getElementById(Iden4).style.backgroundColor=colr;}

   function clear_a4pb1q (){
   colr=Icolr;
   var Iden1='a'+(4+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}
   
    function show_a5pb1q (){
   colr=Acolr;
   var Iden5='a'+(5+p)+'b'+(1+q);
   document.getElementById(Iden5).style.backgroundColor=colr;}

   function clear_a5pb1q (){
   colr=Icolr;
   var Iden1='a'+(5+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}

   function show_a6pb1q (){
   colr=Acolr;
   var Iden6='a'+(6+p)+'b'+(1+q);
   document.getElementById(Iden6).style.backgroundColor=colr;}

   function clear_a6pb1q (){
   colr=Icolr;
   var Iden1='a'+(6+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}
   
   function show_a7pb1q (){
   colr=Acolr;
   var Iden7='a'+(7+p)+'b'+(1+q);
   document.getElementById(Iden7).style.backgroundColor=colr;}

   function clear_a7pb1q (){
   colr=Icolr;
   var Iden1='a'+(7+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}

   function show_a8pb1q (){
   colr=Acolr;
   var Iden8='a'+(8+p)+'b'+(1+q);
   document.getElementById(Iden8).style.backgroundColor=colr;}

   function clear_a8pb1q (){
   colr=Icolr;
   var Iden1='a'+(8+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}

   
   function show_a9pb1q (){
   colr=Acolr;
   var Iden9='a'+(9+p)+'b'+(1+q);
   document.getElementById(Iden9).style.backgroundColor=colr;} 

   function clear_a9pb1q (){
   colr=Icolr;
   var Iden1='a'+(9+p)+'b'+(1+q);
   document.getElementById(Iden1).style.backgroundColor=colr;}       

   function flashCusor1 (){

//clear old cusor line in event of translation
    
  
    
    
    setTimeout(show_a1pb1q,0) 
    setTimeout(clear_a1pb1q,100)
    
    setTimeout(show_a2pb1q,90) 
    setTimeout(clear_a2pb1q,200)

    setTimeout(show_a3pb1q,190) 
    setTimeout(clear_a3pb1q,300)
    
    setTimeout(show_a4pb1q,290) 
    setTimeout(clear_a4pb1q,400) 
        
                       
    setTimeout(show_a5pb1q,390) 
    setTimeout(clear_a5pb1q,500)
   
       
    setTimeout(show_a6pb1q,490) 
    setTimeout(clear_a6pb1q,600)
                    
    setTimeout(show_a7pb1q,590) 
    setTimeout(clear_a7pb1q,700)

    setTimeout(show_a8pb1q,690) 
    setTimeout(clear_a8pb1q,800)
   
    setTimeout(show_a9pb1q,790) 
    setTimeout(clear_a9pb1q,900)
    
       
    }

     function flashCusor() {
      flashCusor1    
      setInterval(flashCusor1,250)}

     flashCusor() 
  
  // Function clear cusor
  
     function clearCusor(){

  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_0_ij='a'+(i+p)+'b'+(j+q-4);
   document.getElementById(Iden_0_ij).style.backgroundColor= Icolr;
        }
       }
      }  

 
//Function shift cusor
           function shiftCusor(){ 

  //Row ONE start
  
     s1a1b1=document.getElementById("a1b1").style.backgroundColor;
    s1a2b1=document.getElementById("a2b1").style.backgroundColor;
    s1a3b1=document.getElementById("a3b1").style.backgroundColor;
    s1a4b1=document.getElementById("a4b1").style.backgroundColor;
    s1a5b1=document.getElementById("a5b1").style.backgroundColor;
    s1a6b1=document.getElementById("a6b1").style.backgroundColor;
    s1a7b1=document.getElementById("a7b1").style.backgroundColor;
    s1a8b1=document.getElementById("a8b1").style.backgroundColor;
    s1a9b1=document.getElementById("a9b1").style.backgroundColor;

    s2a1b5=document.getElementById("a1b5").style.backgroundColor;
    s2a2b5=document.getElementById("a2b5").style.backgroundColor;
    s2a3b5=document.getElementById("a3b5").style.backgroundColor;
    s2a4b5=document.getElementById("a4b5").style.backgroundColor;
    s2a5b5=document.getElementById("a5b5").style.backgroundColor;
    s2a6b5=document.getElementById("a6b5").style.backgroundColor;
    s2a7b5=document.getElementById("a7b5").style.backgroundColor;
    s2a8b5=document.getElementById("a8b5").style.backgroundColor;
    s2a9b5=document.getElementById("a9b5").style.backgroundColor;
 
   
    s3a1b9=document.getElementById("a1b9").style.backgroundColor;
    s3a2b9=document.getElementById("a2b9").style.backgroundColor;
    s3a3b9=document.getElementById("a3b9").style.backgroundColor;
    s3a4b9=document.getElementById("a4b9").style.backgroundColor;
    s3a5b9=document.getElementById("a5b9").style.backgroundColor;
    s3a6b9=document.getElementById("a6b9").style.backgroundColor;
    s3a7b9=document.getElementById("a7b9").style.backgroundColor;
    s3a8b9=document.getElementById("a8b9").style.backgroundColor;
    s3a9b9=document.getElementById("a9b9").style.backgroundColor;

    s4a1b13=document.getElementById("a1b13").style.backgroundColor;
    s4a2b13=document.getElementById("a2b13").style.backgroundColor;
    s4a3b13=document.getElementById("a3b13").style.backgroundColor;
    s4a4b13=document.getElementById("a4b13").style.backgroundColor;
    s4a5b13=document.getElementById("a5b13").style.backgroundColor;
    s4a6b13=document.getElementById("a6b13").style.backgroundColor;
    s4a7b13=document.getElementById("a7b13").style.backgroundColor;
    s4a8b13=document.getElementById("a8b13").style.backgroundColor;
    s4a9b13=document.getElementById("a9b13").style.backgroundColor;
   

    s5a1b17=document.getElementById("a1b17").style.backgroundColor;
    s5a2b17=document.getElementById("a2b17").style.backgroundColor;
    s5a3b17=document.getElementById("a3b17").style.backgroundColor;
    s5a4b17=document.getElementById("a4b17").style.backgroundColor;
    s5a5b17=document.getElementById("a5b17").style.backgroundColor;
    s5a6b17=document.getElementById("a6b17").style.backgroundColor;
    s5a7b17=document.getElementById("a7b17").style.backgroundColor;
    s5a8b17=document.getElementById("a8b17").style.backgroundColor;
    s5a9b17=document.getElementById("a9b17").style.backgroundColor;

  
    s6a1b21=document.getElementById("a1b21").style.backgroundColor;
    s6a2b21=document.getElementById("a2b21").style.backgroundColor;
    s6a3b21=document.getElementById("a3b21").style.backgroundColor;
    s6a4b21=document.getElementById("a4b21").style.backgroundColor;
    s6a5b21=document.getElementById("a5b21").style.backgroundColor;
    s6a6b21=document.getElementById("a6b21").style.backgroundColor;
    s6a7b21=document.getElementById("a7b21").style.backgroundColor;
    s6a8b21=document.getElementById("a8b21").style.backgroundColor;
    s6a9b21=document.getElementById("a9b21").style.backgroundColor;

    s7a1b25=document.getElementById("a1b25").style.backgroundColor;
    s7a2b25=document.getElementById("a2b25").style.backgroundColor;
    s7a3b25=document.getElementById("a3b25").style.backgroundColor;
    s7a4b25=document.getElementById("a4b25").style.backgroundColor;
    s7a5b25=document.getElementById("a5b25").style.backgroundColor;
    s7a6b25=document.getElementById("a6b25").style.backgroundColor;
    s7a7b25=document.getElementById("a7b25").style.backgroundColor;
    s7a8b25=document.getElementById("a8b25").style.backgroundColor;
    s7a9b25=document.getElementById("a9b25").style.backgroundColor;

   
    
    s8a1b29=document.getElementById("a1b29").style.backgroundColor;
    s8a2b29=document.getElementById("a2b29").style.backgroundColor;
    s8a3b29=document.getElementById("a3b29").style.backgroundColor;
    s8a4b29=document.getElementById("a4b29").style.backgroundColor;
    s8a5b29=document.getElementById("a5b29").style.backgroundColor;
    s8a6b29=document.getElementById("a6b29").style.backgroundColor;
    s8a7b29=document.getElementById("a7b29").style.backgroundColor;
    s8a8b29=document.getElementById("a8b29").style.backgroundColor;
    s8a9b29=document.getElementById("a9b29").style.backgroundColor;


    
    s9a1b33=document.getElementById("a1b33").style.backgroundColor;
    s9a2b33=document.getElementById("a2b33").style.backgroundColor;
    s9a3b33=document.getElementById("a3b33").style.backgroundColor;
    s9a4b33=document.getElementById("a4b33").style.backgroundColor;
    s9a5b33=document.getElementById("a5b33").style.backgroundColor;
    s9a6b33=document.getElementById("a6b33").style.backgroundColor;
    s9a7b33=document.getElementById("a7b33").style.backgroundColor;
    s9a8b33=document.getElementById("a8b33").style.backgroundColor;
    s9a9b33=document.getElementById("a9b33").style.backgroundColor;

   
   
    s10a1b37=document.getElementById("a1b37").style.backgroundColor;
    s10a2b37=document.getElementById("a2b37").style.backgroundColor;
    s10a3b37=document.getElementById("a3b37").style.backgroundColor;
    s10a4b37=document.getElementById("a4b37").style.backgroundColor;
    s10a5b37=document.getElementById("a5b37").style.backgroundColor;
    s10a6b37=document.getElementById("a6b37").style.backgroundColor;
    s10a7b37=document.getElementById("a7b37").style.backgroundColor;
    s10a8b37=document.getElementById("a8b37").style.backgroundColor;
    s10a9b37=document.getElementById("a9b37").style.backgroundColor;

   
   
    s11a1b41=document.getElementById("a1b41").style.backgroundColor;
    s11a2b41=document.getElementById("a2b41").style.backgroundColor;
    s11a3b41=document.getElementById("a3b41").style.backgroundColor;
    s11a4b41=document.getElementById("a4b41").style.backgroundColor;
    s11a5b41=document.getElementById("a5b41").style.backgroundColor;
    s11a6b41=document.getElementById("a6b41").style.backgroundColor;
    s11a7b41=document.getElementById("a7b41").style.backgroundColor;
    s11a8b41=document.getElementById("a8b41").style.backgroundColor;
    s11a9b41=document.getElementById("a9b41").style.backgroundColor;

     
    
    s12a1b45=document.getElementById("a1b45").style.backgroundColor;
    s12a2b45=document.getElementById("a2b45").style.backgroundColor;
    s12a3b45=document.getElementById("a3b45").style.backgroundColor;
    s12a4b45=document.getElementById("a4b45").style.backgroundColor;
    s12a5b45=document.getElementById("a5b45").style.backgroundColor;
    s12a6b45=document.getElementById("a6b45").style.backgroundColor;
    s12a7b45=document.getElementById("a7b45").style.backgroundColor;
    s12a8b45=document.getElementById("a8b45").style.backgroundColor;
    s12a9b45=document.getElementById("a9b45").style.backgroundColor;

     s13a1b49=document.getElementById("a1b49").style.backgroundColor;
    s13a2b49=document.getElementById("a2b49").style.backgroundColor;
    s13a3b49=document.getElementById("a3b49").style.backgroundColor;
    s13a4b49=document.getElementById("a4b49").style.backgroundColor;
    s13a5b49=document.getElementById("a5b49").style.backgroundColor;
    s13a6b49=document.getElementById("a6b49").style.backgroundColor;
    s13a7b49=document.getElementById("a7b49").style.backgroundColor;
    s13a8b49=document.getElementById("a8b49").style.backgroundColor;
    s13a9b49=document.getElementById("a9b49").style.backgroundColor;
 
   

    
    s14a1b53=document.getElementById("a1b53").style.backgroundColor;
    s14a2b53=document.getElementById("a2b53").style.backgroundColor;
    s14a3b53=document.getElementById("a3b53").style.backgroundColor;
    s14a4b53=document.getElementById("a4b53").style.backgroundColor;
    s14a5b53=document.getElementById("a5b53").style.backgroundColor;
    s14a6b53=document.getElementById("a6b53").style.backgroundColor;
    s14a7b53=document.getElementById("a7b53").style.backgroundColor;
    s14a8b53=document.getElementById("a8b53").style.backgroundColor;
    s14a9b53=document.getElementById("a9b53").style.backgroundColor;
   
    
    s15a1b57=document.getElementById("a1b57").style.backgroundColor;
    s15a2b57=document.getElementById("a2b57").style.backgroundColor;
    s15a3b57=document.getElementById("a3b57").style.backgroundColor;
    s15a4b57=document.getElementById("a4b57").style.backgroundColor;
    s15a5b57=document.getElementById("a5b57").style.backgroundColor;
    s15a6b57=document.getElementById("a6b57").style.backgroundColor;
    s15a7b57=document.getElementById("a7b57").style.backgroundColor;
    s15a8b57=document.getElementById("a8b57").style.backgroundColor;
    s15a9b57=document.getElementById("a9b57").style.backgroundColor;


    
    s16a1b61=document.getElementById("a1b61").style.backgroundColor;
    s16a2b61=document.getElementById("a2b61").style.backgroundColor;
    s16a3b61=document.getElementById("a3b61").style.backgroundColor;
    s16a4b61=document.getElementById("a4b61").style.backgroundColor;
    s16a5b61=document.getElementById("a5b61").style.backgroundColor;
    s16a6b61=document.getElementById("a6b61").style.backgroundColor;
    s16a7b61=document.getElementById("a7b61").style.backgroundColor;
    s16a8b61=document.getElementById("a8b61").style.backgroundColor;
    s16a9b61=document.getElementById("a9b61").style.backgroundColor;
  


    s17a1b65=document.getElementById("a1b65").style.backgroundColor;
    s17a2b65=document.getElementById("a2b65").style.backgroundColor;
    s17a3b65=document.getElementById("a3b65").style.backgroundColor;
    s17a4b65=document.getElementById("a4b65").style.backgroundColor;
    s17a5b65=document.getElementById("a5b65").style.backgroundColor;
    s17a6b65=document.getElementById("a6b65").style.backgroundColor;
    s17a7b65=document.getElementById("a7b65").style.backgroundColor;
    s17a8b65=document.getElementById("a8b65").style.backgroundColor;
    s17a9b65=document.getElementById("a9b65").style.backgroundColor;


 
    s18a1b69=document.getElementById("a1b69").style.backgroundColor;
    s18a2b69=document.getElementById("a2b69").style.backgroundColor;
    s18a3b69=document.getElementById("a3b69").style.backgroundColor;
    s18a4b69=document.getElementById("a4b69").style.backgroundColor;
    s18a5b69=document.getElementById("a5b69").style.backgroundColor;
    s18a6b69=document.getElementById("a6b69").style.backgroundColor;
    s18a7b69=document.getElementById("a7b69").style.backgroundColor;
    s18a8b69=document.getElementById("a8b69").style.backgroundColor;
    s18a9b69=document.getElementById("a9b69").style.backgroundColor;

   
    s19a1b73=document.getElementById("a1b73").style.backgroundColor;
    s19a2b73=document.getElementById("a2b73").style.backgroundColor;
    s19a3b73=document.getElementById("a3b73").style.backgroundColor;
    s19a4b73=document.getElementById("a4b73").style.backgroundColor;
    s19a5b73=document.getElementById("a5b73").style.backgroundColor;
    s19a6b73=document.getElementById("a6b73").style.backgroundColor;
    s19a7b73=document.getElementById("a7b73").style.backgroundColor;
    s19a8b73=document.getElementById("a8b73").style.backgroundColor;
    s19a9b73=document.getElementById("a9b73").style.backgroundColor;



    s20a1b77=document.getElementById("a1b77").style.backgroundColor;
    s20a2b77=document.getElementById("a2b77").style.backgroundColor;
    s20a3b77=document.getElementById("a3b77").style.backgroundColor;
    s20a4b77=document.getElementById("a4b77").style.backgroundColor;
    s20a5b77=document.getElementById("a5b77").style.backgroundColor;
    s20a6b77=document.getElementById("a6b77").style.backgroundColor;
    s20a7b77=document.getElementById("a7b77").style.backgroundColor;
    s20a8b77=document.getElementById("a8b77").style.backgroundColor;
    s20a9b77=document.getElementById("a9b77").style.backgroundColor;

       
   
   // ROW 1 END   


   //ROW 2 START

    s21a10b1=document.getElementById("a10b1").style.backgroundColor;
    s21a11b1=document.getElementById("a11b1").style.backgroundColor;
    s21a12b1=document.getElementById("a12b1").style.backgroundColor;
    s21a13b1=document.getElementById("a13b1").style.backgroundColor;
    s21a14b1=document.getElementById("a14b1").style.backgroundColor;
    s21a15b1=document.getElementById("a15b1").style.backgroundColor;
    s21a16b1=document.getElementById("a16b1").style.backgroundColor;
    s21a17b1=document.getElementById("a17b1").style.backgroundColor;
    s21a18b1=document.getElementById("a18b1").style.backgroundColor;

    s22a10b5=document.getElementById("a10b5").style.backgroundColor;
    s22a11b5=document.getElementById("a11b5").style.backgroundColor;
    s22a12b5=document.getElementById("a12b5").style.backgroundColor;
    s22a13b5=document.getElementById("a13b5").style.backgroundColor;
    s22a14b5=document.getElementById("a14b5").style.backgroundColor;
    s22a15b5=document.getElementById("a15b5").style.backgroundColor;
    s22a16b5=document.getElementById("a16b5").style.backgroundColor;
    s22a17b5=document.getElementById("a17b5").style.backgroundColor;
    s22a18b5=document.getElementById("a18b5").style.backgroundColor;
 
   
    s23a10b9=document.getElementById("a10b9").style.backgroundColor;
    s23a11b9=document.getElementById("a11b9").style.backgroundColor;
    s23a12b9=document.getElementById("a12b9").style.backgroundColor;
    s23a13b9=document.getElementById("a13b9").style.backgroundColor;
    s23a14b9=document.getElementById("a14b9").style.backgroundColor;
    s23a15b9=document.getElementById("a15b9").style.backgroundColor;
    s23a16b9=document.getElementById("a16b9").style.backgroundColor;
    s23a17b9=document.getElementById("a17b9").style.backgroundColor;
    s23a18b9=document.getElementById("a18b9").style.backgroundColor;

    s24a10b13=document.getElementById("a10b13").style.backgroundColor;
    s24a11b13=document.getElementById("a11b13").style.backgroundColor;
    s24a12b13=document.getElementById("a12b13").style.backgroundColor;
    s24a13b13=document.getElementById("a13b13").style.backgroundColor;
    s24a14b13=document.getElementById("a14b13").style.backgroundColor;
    s24a15b13=document.getElementById("a15b13").style.backgroundColor;
    s24a16b13=document.getElementById("a16b13").style.backgroundColor;
    s24a17b13=document.getElementById("a17b13").style.backgroundColor;
    s24a18b13=document.getElementById("a18b13").style.backgroundColor;
   

    s25a10b17=document.getElementById("a10b17").style.backgroundColor;
    s25a11b17=document.getElementById("a11b17").style.backgroundColor;
    s25a12b17=document.getElementById("a12b17").style.backgroundColor;
    s25a13b17=document.getElementById("a13b17").style.backgroundColor;
    s25a14b17=document.getElementById("a14b17").style.backgroundColor;
    s25a15b17=document.getElementById("a15b17").style.backgroundColor;
    s25a16b17=document.getElementById("a16b17").style.backgroundColor;
    s25a17b17=document.getElementById("a17b17").style.backgroundColor;
    s25a18b17=document.getElementById("a18b17").style.backgroundColor;

  
    s26a10b21=document.getElementById("a10b21").style.backgroundColor;
    s26a11b21=document.getElementById("a11b21").style.backgroundColor;
    s26a12b21=document.getElementById("a12b21").style.backgroundColor;
    s26a13b21=document.getElementById("a13b21").style.backgroundColor;
    s26a14b21=document.getElementById("a14b21").style.backgroundColor;
    s26a15b21=document.getElementById("a15b21").style.backgroundColor;
    s26a16b21=document.getElementById("a16b21").style.backgroundColor;
    s26a17b21=document.getElementById("a17b21").style.backgroundColor;
    s26a18b21=document.getElementById("a18b21").style.backgroundColor;

    s27a10b25=document.getElementById("a10b25").style.backgroundColor;
    s27a11b25=document.getElementById("a11b25").style.backgroundColor;
    s27a12b25=document.getElementById("a12b25").style.backgroundColor;
    s27a13b25=document.getElementById("a13b25").style.backgroundColor;
    s27a14b25=document.getElementById("a14b25").style.backgroundColor;
    s27a15b25=document.getElementById("a15b25").style.backgroundColor;
    s27a16b25=document.getElementById("a16b25").style.backgroundColor;
    s27a17b25=document.getElementById("a17b25").style.backgroundColor;
    s27a18b25=document.getElementById("a18b25").style.backgroundColor;

   
    
    s28a10b29=document.getElementById("a10b29").style.backgroundColor;
    s28a11b29=document.getElementById("a11b29").style.backgroundColor;
    s28a12b29=document.getElementById("a12b29").style.backgroundColor;
    s28a13b29=document.getElementById("a13b29").style.backgroundColor;
    s28a14b29=document.getElementById("a14b29").style.backgroundColor;
    s28a15b29=document.getElementById("a15b29").style.backgroundColor;
    s28a16b29=document.getElementById("a16b29").style.backgroundColor;
    s28a17b29=document.getElementById("a17b29").style.backgroundColor;
    s28a18b29=document.getElementById("a18b29").style.backgroundColor;


    
    s29a10b33=document.getElementById("a10b33").style.backgroundColor;
    s29a11b33=document.getElementById("a11b33").style.backgroundColor;
    s29a12b33=document.getElementById("a12b33").style.backgroundColor;
    s29a13b33=document.getElementById("a13b33").style.backgroundColor;
    s29a14b33=document.getElementById("a14b33").style.backgroundColor;
    s29a15b33=document.getElementById("a15b33").style.backgroundColor;
    s29a16b33=document.getElementById("a16b33").style.backgroundColor;
    s29a17b33=document.getElementById("a17b33").style.backgroundColor;
    s29a18b33=document.getElementById("a18b33").style.backgroundColor;

   
   
    s30a10b37=document.getElementById("a10b37").style.backgroundColor;
    s30a11b37=document.getElementById("a11b37").style.backgroundColor;
    s30a12b37=document.getElementById("a12b37").style.backgroundColor;
    s30a13b37=document.getElementById("a13b37").style.backgroundColor;
    s30a14b37=document.getElementById("a14b37").style.backgroundColor;
    s30a15b37=document.getElementById("a15b37").style.backgroundColor;
    s30a16b37=document.getElementById("a16b37").style.backgroundColor;
    s30a17b37=document.getElementById("a17b37").style.backgroundColor;
    s30a18b37=document.getElementById("a18b37").style.backgroundColor;

   
   
    s31a10b41=document.getElementById("a10b41").style.backgroundColor;
    s31a11b41=document.getElementById("a11b41").style.backgroundColor;
    s31a12b41=document.getElementById("a12b41").style.backgroundColor;
    s31a13b41=document.getElementById("a13b41").style.backgroundColor;
    s31a14b41=document.getElementById("a14b41").style.backgroundColor;
    s31a15b41=document.getElementById("a15b41").style.backgroundColor;
    s31a16b41=document.getElementById("a16b41").style.backgroundColor;
    s31a17b41=document.getElementById("a17b41").style.backgroundColor;
    s31a18b41=document.getElementById("a18b41").style.backgroundColor;

     
    
    s32a10b45=document.getElementById("a10b45").style.backgroundColor;
    s32a11b45=document.getElementById("a11b45").style.backgroundColor;
    s32a12b45=document.getElementById("a12b45").style.backgroundColor;
    s32a13b45=document.getElementById("a13b45").style.backgroundColor;
    s32a14b45=document.getElementById("a14b45").style.backgroundColor;
    s32a15b45=document.getElementById("a15b45").style.backgroundColor;
    s32a16b45=document.getElementById("a16b45").style.backgroundColor;
    s32a17b45=document.getElementById("a17b45").style.backgroundColor;
    s32a18b45=document.getElementById("a18b45").style.backgroundColor;

     s33a10b49=document.getElementById("a10b49").style.backgroundColor;
    s33a11b49=document.getElementById("a11b49").style.backgroundColor;
    s33a12b49=document.getElementById("a12b49").style.backgroundColor;
    s33a13b49=document.getElementById("a13b49").style.backgroundColor;
    s33a14b49=document.getElementById("a14b49").style.backgroundColor;
    s33a15b49=document.getElementById("a15b49").style.backgroundColor;
    s33a16b49=document.getElementById("a16b49").style.backgroundColor;
    s33a17b49=document.getElementById("a17b49").style.backgroundColor;
    s33a18b49=document.getElementById("a18b49").style.backgroundColor;
 
   

    
    s34a10b53=document.getElementById("a10b53").style.backgroundColor;
    s34a11b53=document.getElementById("a11b53").style.backgroundColor;
    s34a12b53=document.getElementById("a12b53").style.backgroundColor;
    s34a13b53=document.getElementById("a13b53").style.backgroundColor;
    s34a14b53=document.getElementById("a14b53").style.backgroundColor;
    s34a15b53=document.getElementById("a15b53").style.backgroundColor;
    s34a16b53=document.getElementById("a16b53").style.backgroundColor;
    s34a17b53=document.getElementById("a17b53").style.backgroundColor;
    s34a18b53=document.getElementById("a18b53").style.backgroundColor;
   
    
    s35a10b57=document.getElementById("a10b57").style.backgroundColor;
    s35a11b57=document.getElementById("a11b57").style.backgroundColor;
    s35a12b57=document.getElementById("a12b57").style.backgroundColor;
    s35a13b57=document.getElementById("a13b57").style.backgroundColor;
    s35a14b57=document.getElementById("a14b57").style.backgroundColor;
    s35a15b57=document.getElementById("a15b57").style.backgroundColor;
    s35a16b57=document.getElementById("a16b57").style.backgroundColor;
    s35a17b57=document.getElementById("a17b57").style.backgroundColor;
    s35a18b57=document.getElementById("a18b57").style.backgroundColor;


    
    s36a10b61=document.getElementById("a10b61").style.backgroundColor;
    s36a11b61=document.getElementById("a11b61").style.backgroundColor;
    s36a12b61=document.getElementById("a12b61").style.backgroundColor;
    s36a13b61=document.getElementById("a13b61").style.backgroundColor;
    s36a14b61=document.getElementById("a14b61").style.backgroundColor;
    s36a15b61=document.getElementById("a15b61").style.backgroundColor;
    s36a16b61=document.getElementById("a16b61").style.backgroundColor;
    s36a17b61=document.getElementById("a17b61").style.backgroundColor;
    s36a18b61=document.getElementById("a18b61").style.backgroundColor;
  


    s37a10b65=document.getElementById("a10b65").style.backgroundColor;
    s37a11b65=document.getElementById("a11b65").style.backgroundColor;
    s37a12b65=document.getElementById("a12b65").style.backgroundColor;
    s37a13b65=document.getElementById("a13b65").style.backgroundColor;
    s37a14b65=document.getElementById("a14b65").style.backgroundColor;
    s37a15b65=document.getElementById("a15b65").style.backgroundColor;
    s37a16b65=document.getElementById("a16b65").style.backgroundColor;
    s37a17b65=document.getElementById("a17b65").style.backgroundColor;
    s37a18b65=document.getElementById("a18b65").style.backgroundColor;


 
    s38a10b69=document.getElementById("a10b69").style.backgroundColor;
    s38a11b69=document.getElementById("a11b69").style.backgroundColor;
    s38a12b69=document.getElementById("a12b69").style.backgroundColor;
    s38a13b69=document.getElementById("a13b69").style.backgroundColor;
    s38a14b69=document.getElementById("a14b69").style.backgroundColor;
    s38a15b69=document.getElementById("a15b69").style.backgroundColor;
    s38a16b69=document.getElementById("a16b69").style.backgroundColor;
    s38a17b69=document.getElementById("a17b69").style.backgroundColor;
    s38a18b69=document.getElementById("a18b69").style.backgroundColor;

   
    s39a10b73=document.getElementById("a10b73").style.backgroundColor;
    s39a11b73=document.getElementById("a11b73").style.backgroundColor;
    s39a12b73=document.getElementById("a12b73").style.backgroundColor;
    s39a13b73=document.getElementById("a13b73").style.backgroundColor;
    s39a14b73=document.getElementById("a14b73").style.backgroundColor;
    s39a15b73=document.getElementById("a15b73").style.backgroundColor;
    s39a16b73=document.getElementById("a16b73").style.backgroundColor;
    s39a17b73=document.getElementById("a17b73").style.backgroundColor;
    s39a18b73=document.getElementById("a18b73").style.backgroundColor;



    s40a10b77=document.getElementById("a10b77").style.backgroundColor;
    s40a11b77=document.getElementById("a11b77").style.backgroundColor;
    s40a12b77=document.getElementById("a12b77").style.backgroundColor;
    s40a13b77=document.getElementById("a13b77").style.backgroundColor;
    s40a14b77=document.getElementById("a14b77").style.backgroundColor;
    s40a15b77=document.getElementById("a15b77").style.backgroundColor;
    s40a16b77=document.getElementById("a16b77").style.backgroundColor;
    s40a17b77=document.getElementById("a17b77").style.backgroundColor;
    s40a18b77=document.getElementById("a18b77").style.backgroundColor;

 
   //ROW 2 END
     

   //ROW 3 START

    s41a19b1=document.getElementById("a19b1").style.backgroundColor;
    s41a20b1=document.getElementById("a20b1").style.backgroundColor;
    s41a21b1=document.getElementById("a21b1").style.backgroundColor;
    s41a22b1=document.getElementById("a22b1").style.backgroundColor;
    s41a23b1=document.getElementById("a23b1").style.backgroundColor;
    s41a24b1=document.getElementById("a24b1").style.backgroundColor;
    s41a25b1=document.getElementById("a25b1").style.backgroundColor;
    s41a26b1=document.getElementById("a26b1").style.backgroundColor;
    s41a27b1=document.getElementById("a27b1").style.backgroundColor;

    s42a19b5=document.getElementById("a19b5").style.backgroundColor;
    s42a20b5=document.getElementById("a20b5").style.backgroundColor;
    s42a21b5=document.getElementById("a21b5").style.backgroundColor;
    s42a22b5=document.getElementById("a22b5").style.backgroundColor;
    s42a23b5=document.getElementById("a23b5").style.backgroundColor;
    s42a24b5=document.getElementById("a24b5").style.backgroundColor;
    s42a25b5=document.getElementById("a25b5").style.backgroundColor;
    s42a26b5=document.getElementById("a26b5").style.backgroundColor;
    s42a27b5=document.getElementById("a27b5").style.backgroundColor;
 
   
    s43a19b9=document.getElementById("a19b9").style.backgroundColor;
    s43a20b9=document.getElementById("a20b9").style.backgroundColor;
    s43a21b9=document.getElementById("a21b9").style.backgroundColor;
    s43a22b9=document.getElementById("a22b9").style.backgroundColor;
    s43a23b9=document.getElementById("a23b9").style.backgroundColor;
    s43a24b9=document.getElementById("a24b9").style.backgroundColor;
    s43a25b9=document.getElementById("a25b9").style.backgroundColor;
    s43a26b9=document.getElementById("a26b9").style.backgroundColor;
    s43a27b9=document.getElementById("a27b9").style.backgroundColor;

    s44a19b13=document.getElementById("a19b13").style.backgroundColor;
    s44a20b13=document.getElementById("a20b13").style.backgroundColor;
    s44a21b13=document.getElementById("a21b13").style.backgroundColor;
    s44a22b13=document.getElementById("a22b13").style.backgroundColor;
    s44a23b13=document.getElementById("a23b13").style.backgroundColor;
    s44a24b13=document.getElementById("a24b13").style.backgroundColor;
    s44a25b13=document.getElementById("a25b13").style.backgroundColor;
    s44a26b13=document.getElementById("a26b13").style.backgroundColor;
    s44a27b13=document.getElementById("a27b13").style.backgroundColor;
   

    s45a19b17=document.getElementById("a19b17").style.backgroundColor;
    s45a20b17=document.getElementById("a20b17").style.backgroundColor;
    s45a21b17=document.getElementById("a21b17").style.backgroundColor;
    s45a22b17=document.getElementById("a22b17").style.backgroundColor;
    s45a23b17=document.getElementById("a23b17").style.backgroundColor;
    s45a24b17=document.getElementById("a24b17").style.backgroundColor;
    s45a25b17=document.getElementById("a25b17").style.backgroundColor;
    s45a26b17=document.getElementById("a26b17").style.backgroundColor;
    s45a27b17=document.getElementById("a27b17").style.backgroundColor;

  
    s46a19b21=document.getElementById("a19b21").style.backgroundColor;
    s46a20b21=document.getElementById("a20b21").style.backgroundColor;
    s46a21b21=document.getElementById("a21b21").style.backgroundColor;
    s46a22b21=document.getElementById("a22b21").style.backgroundColor;
    s46a23b21=document.getElementById("a23b21").style.backgroundColor;
    s46a24b21=document.getElementById("a24b21").style.backgroundColor;
    s46a25b21=document.getElementById("a25b21").style.backgroundColor;
    s46a26b21=document.getElementById("a26b21").style.backgroundColor;
    s46a27b21=document.getElementById("a27b21").style.backgroundColor;

    s47a19b25=document.getElementById("a19b25").style.backgroundColor;
    s47a20b25=document.getElementById("a20b25").style.backgroundColor;
    s47a21b25=document.getElementById("a21b25").style.backgroundColor;
    s47a22b25=document.getElementById("a22b25").style.backgroundColor;
    s47a23b25=document.getElementById("a23b25").style.backgroundColor;
    s47a24b25=document.getElementById("a24b25").style.backgroundColor;
    s47a25b25=document.getElementById("a25b25").style.backgroundColor;
    s47a26b25=document.getElementById("a26b25").style.backgroundColor;
    s47a27b25=document.getElementById("a27b25").style.backgroundColor;

   
    
    s48a19b29=document.getElementById("a19b29").style.backgroundColor;
    s48a20b29=document.getElementById("a20b29").style.backgroundColor;
    s48a21b29=document.getElementById("a21b29").style.backgroundColor;
    s48a22b29=document.getElementById("a22b29").style.backgroundColor;
    s48a23b29=document.getElementById("a23b29").style.backgroundColor;
    s48a24b29=document.getElementById("a24b29").style.backgroundColor;
    s48a25b29=document.getElementById("a25b29").style.backgroundColor;
    s48a26b29=document.getElementById("a26b29").style.backgroundColor;
    s48a27b29=document.getElementById("a27b29").style.backgroundColor;


    
    s49a19b33=document.getElementById("a19b33").style.backgroundColor;
    s49a20b33=document.getElementById("a20b33").style.backgroundColor;
    s49a21b33=document.getElementById("a21b33").style.backgroundColor;
    s49a22b33=document.getElementById("a22b33").style.backgroundColor;
    s49a23b33=document.getElementById("a23b33").style.backgroundColor;
    s49a24b33=document.getElementById("a24b33").style.backgroundColor;
    s49a25b33=document.getElementById("a25b33").style.backgroundColor;
    s49a26b33=document.getElementById("a26b33").style.backgroundColor;
    s49a27b33=document.getElementById("a27b33").style.backgroundColor;

   
   
    s50a19b37=document.getElementById("a19b37").style.backgroundColor;
    s50a20b37=document.getElementById("a20b37").style.backgroundColor;
    s50a21b37=document.getElementById("a21b37").style.backgroundColor;
    s50a22b37=document.getElementById("a22b37").style.backgroundColor;
    s50a23b37=document.getElementById("a23b37").style.backgroundColor;
    s50a24b37=document.getElementById("a24b37").style.backgroundColor;
    s50a25b37=document.getElementById("a25b37").style.backgroundColor;
    s50a26b37=document.getElementById("a26b37").style.backgroundColor;
    s50a27b37=document.getElementById("a27b37").style.backgroundColor;

   
   
    s51a19b41=document.getElementById("a19b41").style.backgroundColor;
    s51a20b41=document.getElementById("a20b41").style.backgroundColor;
    s51a21b41=document.getElementById("a21b41").style.backgroundColor;
    s51a22b41=document.getElementById("a22b41").style.backgroundColor;
    s51a23b41=document.getElementById("a23b41").style.backgroundColor;
    s51a24b41=document.getElementById("a24b41").style.backgroundColor;
    s51a25b41=document.getElementById("a25b41").style.backgroundColor;
    s51a26b41=document.getElementById("a26b41").style.backgroundColor;
    s51a27b41=document.getElementById("a27b41").style.backgroundColor;

     
    
    s52a19b45=document.getElementById("a19b45").style.backgroundColor;
    s52a20b45=document.getElementById("a20b45").style.backgroundColor;
    s52a21b45=document.getElementById("a21b45").style.backgroundColor;
    s52a22b45=document.getElementById("a22b45").style.backgroundColor;
    s52a23b45=document.getElementById("a23b45").style.backgroundColor;
    s52a24b45=document.getElementById("a24b45").style.backgroundColor;
    s52a25b45=document.getElementById("a25b45").style.backgroundColor;
    s52a26b45=document.getElementById("a26b45").style.backgroundColor;
    s52a27b45=document.getElementById("a27b45").style.backgroundColor;

     s53a19b49=document.getElementById("a19b49").style.backgroundColor;
    s53a20b49=document.getElementById("a20b49").style.backgroundColor;
    s53a21b49=document.getElementById("a21b49").style.backgroundColor;
    s53a22b49=document.getElementById("a22b49").style.backgroundColor;
    s53a23b49=document.getElementById("a23b49").style.backgroundColor;
    s53a24b49=document.getElementById("a24b49").style.backgroundColor;
    s53a25b49=document.getElementById("a25b49").style.backgroundColor;
    s53a26b49=document.getElementById("a26b49").style.backgroundColor;
    s53a27b49=document.getElementById("a27b49").style.backgroundColor;
 
   

    
    s54a19b53=document.getElementById("a19b53").style.backgroundColor;
    s54a20b53=document.getElementById("a20b53").style.backgroundColor;
    s54a21b53=document.getElementById("a21b53").style.backgroundColor;
    s54a22b53=document.getElementById("a22b53").style.backgroundColor;
    s54a23b53=document.getElementById("a23b53").style.backgroundColor;
    s54a24b53=document.getElementById("a24b53").style.backgroundColor;
    s54a25b53=document.getElementById("a25b53").style.backgroundColor;
    s54a26b53=document.getElementById("a26b53").style.backgroundColor;
    s54a27b53=document.getElementById("a27b53").style.backgroundColor;
   
    
    s55a19b57=document.getElementById("a19b57").style.backgroundColor;
    s55a20b57=document.getElementById("a20b57").style.backgroundColor;
    s55a21b57=document.getElementById("a21b57").style.backgroundColor;
    s55a22b57=document.getElementById("a22b57").style.backgroundColor;
    s55a23b57=document.getElementById("a23b57").style.backgroundColor;
    s55a24b57=document.getElementById("a24b57").style.backgroundColor;
    s55a25b57=document.getElementById("a25b57").style.backgroundColor;
    s55a26b57=document.getElementById("a26b57").style.backgroundColor;
    s55a27b57=document.getElementById("a27b57").style.backgroundColor;


    
    s56a19b61=document.getElementById("a19b61").style.backgroundColor;
    s56a20b61=document.getElementById("a20b61").style.backgroundColor;
    s56a21b61=document.getElementById("a21b61").style.backgroundColor;
    s56a22b61=document.getElementById("a22b61").style.backgroundColor;
    s56a23b61=document.getElementById("a23b61").style.backgroundColor;
    s56a24b61=document.getElementById("a24b61").style.backgroundColor;
    s56a25b61=document.getElementById("a25b61").style.backgroundColor;
    s56a26b61=document.getElementById("a26b61").style.backgroundColor;
    s56a27b61=document.getElementById("a27b61").style.backgroundColor;
  


    s57a19b65=document.getElementById("a19b65").style.backgroundColor;
    s57a20b65=document.getElementById("a20b65").style.backgroundColor;
    s57a21b65=document.getElementById("a21b65").style.backgroundColor;
    s57a22b65=document.getElementById("a22b65").style.backgroundColor;
    s57a23b65=document.getElementById("a23b65").style.backgroundColor;
    s57a24b65=document.getElementById("a24b65").style.backgroundColor;
    s57a25b65=document.getElementById("a25b65").style.backgroundColor;
    s57a26b65=document.getElementById("a26b65").style.backgroundColor;
    s57a27b65=document.getElementById("a27b65").style.backgroundColor;


 
    s58a19b69=document.getElementById("a19b69").style.backgroundColor;
    s58a20b69=document.getElementById("a20b69").style.backgroundColor;
    s58a21b69=document.getElementById("a21b69").style.backgroundColor;
    s58a22b69=document.getElementById("a22b69").style.backgroundColor;
    s58a23b69=document.getElementById("a23b69").style.backgroundColor;
    s58a24b69=document.getElementById("a24b69").style.backgroundColor;
    s58a25b69=document.getElementById("a25b69").style.backgroundColor;
    s58a26b69=document.getElementById("a26b69").style.backgroundColor;
    s58a27b69=document.getElementById("a27b69").style.backgroundColor;

   
    s59a19b73=document.getElementById("a19b73").style.backgroundColor;
    s59a20b73=document.getElementById("a20b73").style.backgroundColor;
    s59a21b73=document.getElementById("a21b73").style.backgroundColor;
    s59a22b73=document.getElementById("a22b73").style.backgroundColor;
    s59a23b73=document.getElementById("a23b73").style.backgroundColor;
    s59a24b73=document.getElementById("a24b73").style.backgroundColor;
    s59a25b73=document.getElementById("a25b73").style.backgroundColor;
    s59a26b73=document.getElementById("a26b73").style.backgroundColor;
    s59a27b73=document.getElementById("a27b73").style.backgroundColor;



    s60a19b77=document.getElementById("a19b77").style.backgroundColor;
    s60a20b77=document.getElementById("a20b77").style.backgroundColor;
    s60a21b77=document.getElementById("a21b77").style.backgroundColor;
    s60a22b77=document.getElementById("a22b77").style.backgroundColor;
    s60a23b77=document.getElementById("a23b77").style.backgroundColor;
    s60a24b77=document.getElementById("a24b77").style.backgroundColor;
    s60a25b77=document.getElementById("a25b77").style.backgroundColor;
    s60a26b77=document.getElementById("a26b77").style.backgroundColor;
    s60a27b77=document.getElementById("a27b77").style.backgroundColor;

 //ROW 3 ENd


       


    if ((s1a1b1==Acolr) || (s1a2b1==Acolr)||(s1a3b1==Acolr)||(s1a4b1==Acolr)||
        (s1a5b1==Acolr)||(s1a6b1==Acolr)||(s1a7b1==Acolr)||(s1a8b1==Acolr)||
        (s1a9b1==Acolr)){
    
  
         

                    
     // shift cusor to slot s2 after t seconds on typing.
   function transCusor1_2(){
    p=0, q=4 ;            
   flashCusor();}
   transCusor1_2()
   clearCusor()
   
          }


  
   else if ((s2a1b5==Acolr) || (s2a2b5==Acolr)||(s2a3b5==Acolr)||(s2a4b5==Acolr)||
        (s2a5b5==Acolr)||(s2a6b5==Acolr)||(s2a7b5==Acolr)||(s2a8b5==Acolr)||
        (s2a9b5==Acolr)){
    
     

    
                    
     // shift cusor to slot s3 after t seconds on typing.
   function transCusor2_3(){
    p=0, q=8 ;            
   flashCusor(); }
   transCusor2_3 ()
   clearCusor()
          }

     else if ((s3a1b9==Acolr) || (s3a2b9==Acolr)||(s3a3b9==Acolr)||(s3a4b9==Acolr)||
        (s3a5b9==Acolr)||(s3a6b9==Acolr)||(s3a7b9==Acolr)||(s3a8b9==Acolr)||
        (s3a9b9==Acolr)){
    
    
    

                    
     // shift cusor to slot s4 after t seconds on typing.
   function transCusor3_4(){
    p=0, q=12 ;            
   flashCusor();}
   transCusor3_4()
   clearCusor()      
        }                                       

  
    
    else if ((s4a1b13==Acolr) || (s4a2b13==Acolr)||(s4a3b13==Acolr)||(s4a4b13==Acolr)||
        (s4a5b13==Acolr)||(s4a6b13==Acolr)||(s4a7b13==Acolr)||(s4a8b13==Acolr)||
        (s4a9b13==Acolr)){
    
    
    


                    
     // shift cusor to slot s4 after t seconds on typing.
   function transCusor4_5(){
    p=0, q=16 ;            
   flashCusor();}
   transCusor4_5()
   clearCusor()      
        }   


   
    else if ((s5a1b17==Acolr) || (s5a2b17==Acolr)||(s5a3b17==Acolr)||(s5a4b17==Acolr)||
        (s5a5b17==Acolr)||(s5a6b17==Acolr)||(s5a7b17==Acolr)||(s5a8b17==Acolr)||
        (s5a9b17==Acolr)){
    
    
     

                    
     // shift cusor to slot s5 after t seconds on typing.
   function transCusor5_6(){
    p=0, q=20 ;            
   flashCusor();}
   transCusor5_6()
    clearCusor()      
        }  

  else if ((s6a1b21==Acolr) || (s6a2b21==Acolr)||(s6a3b21==Acolr)||(s6a4b21==Acolr)||
        (s6a5b21==Acolr)||(s6a6b21==Acolr)||(s6a7b21==Acolr)||(s6a8b21==Acolr)||
        (s6a9b21==Acolr)){
    
    
    


                    
     // shift cusor to slot s7 after t seconds on typing.
   function transCusor6_7(){
    p=0, q=24 ;            
   flashCusor();}
   transCusor6_7()
   clearCusor() 
     }

    
    else if ((s7a1b25==Acolr) || (s7a2b25==Acolr)||(s7a3b25==Acolr)||(s7a4b25==Acolr)||
        (s7a5b25==Acolr)||(s7a6b25==Acolr)||(s7a7b25==Acolr)||(s7a8b25==Acolr)||
        (s7a9b25==Acolr)){
    
    
    


                    
     // shift cusor to slot s8 after t seconds on typing.
   function transCusor7_8(){
    p=0, q=28 ;            
   flashCusor();}
   transCusor7_8()
   clearCusor()       
        }  

   
   else if ((s8a1b29==Acolr) || (s8a2b29==Acolr)||(s8a3b29==Acolr)||(s8a4b29==Acolr)||
        (s8a5b29==Acolr)||(s8a6b29==Acolr)||(s8a7b29==Acolr)||(s8a8b29==Acolr)||
        (s8a9b29==Acolr)){
    
    
     

                    
     // shift cusor to slot s8 after t seconds on typing.
   function transCusor8_9(){
    p=0, q=32 ;            
   flashCusor();}
   transCusor8_9()
   clearCusor()      
        }
  
    else if ((s9a1b33==Acolr) || (s9a2b33==Acolr)||(s9a3b33==Acolr)||(s9a4b33==Acolr)||
        (s9a5b33==Acolr)||(s9a6b33==Acolr)||(s9a7b33==Acolr)||(s9a8b33==Acolr)||
        (s9a9b33==Acolr)){
    
    
   

                    
     // shift cusor to slot s9 after t seconds on typing.
   function transCusor9_10(){
    p=0, q=36 ;            
   flashCusor();}
   transCusor9_10()
   clearCusor()       
        }    

     else if ((s10a1b37==Acolr) || (s10a2b37==Acolr)||(s10a3b37==Acolr)||(s10a4b37==Acolr)||
        (s10a5b37==Acolr)||(s10a6b37==Acolr)||(s10a7b37==Acolr)||(s10a8b37==Acolr)||
        (s10a9b37==Acolr)){
    
    
     


                    
     // shift cusor to slot s11 after t seconds on typing.
   function transCusor10_11(){
    p=0, q=40 ;            
   flashCusor();}
   transCusor10_11()
    clearCusor()      
        }

   else if ((s11a1b41==Acolr) || (s11a2b41==Acolr)||(s11a3b41==Acolr)||(s11a4b41==Acolr)||
        (s11a5b41==Acolr)||(s11a6b41==Acolr)||(s11a7b41==Acolr)||(s11a8b41==Acolr)||
        (s11a9b41==Acolr)){
    
    
  

                    
     // shift cusor to slot s12 after t seconds on typing.
   function transCusor11_12(){
    p=0, q=44 ;            
   flashCusor();}
   transCusor11_12()
   clearCusor()       
        }


   else if ((s12a1b45==Acolr) || (s12a2b45==Acolr)||(s12a3b45==Acolr)||(s12a4b45==Acolr)||
        (s12a5b45==Acolr)||(s12a6b45==Acolr)||(s12a7b45==Acolr)||(s12a8b45==Acolr)||
        (s12a9b45==Acolr)){
    
    
   


                    
     // shift cusor to slot s13 after t seconds on typing.
   function transCusor12_13(){
    p=0, q=48 ;            
   flashCusor();}
   transCusor12_13()
    clearCusor()      
        }


    else if ((s13a1b49==Acolr) || (s13a2b49==Acolr)||(s13a3b49==Acolr)||(s13a4b49==Acolr)||
        (s13a5b49==Acolr)||(s13a6b49==Acolr)||(s13a7b49==Acolr)||(s13a8b49==Acolr)||
        (s13a9b49==Acolr)){
    
    
     


                    
     // shift cusor to slot s14 after t seconds on typing.
   function transCusor13_14(){
    p=0, q=52 ;            
   flashCusor();}
   transCusor13_14()
   clearCusor()       
        }
    

    else if ((s14a1b53==Acolr) || (s14a2b53==Acolr)||(s14a3b53==Acolr)||(s14a4b53==Acolr)||
        (s14a5b53==Acolr)||(s14a6b53==Acolr)||(s14a7b53==Acolr)||(s14a8b53==Acolr)||
        (s14a9b53==Acolr)){
    
    
   


                    
     // shift cusor to slot s15 after t seconds on typing.
   function transCusor14_15(){
    p=0, q=56 ;            
   flashCusor();}
   transCusor14_15()
   clearCusor()       
        }


   else if ((s15a1b57==Acolr) || (s15a2b57==Acolr)||(s15a3b57==Acolr)||(s15a4b57==Acolr)||
        (s15a5b57==Acolr)||(s15a6b57==Acolr)||(s15a7b57==Acolr)||(s15a8b57==Acolr)||
        (s15a9b57==Acolr)){
    
    
  


                    
     // shift cusor to slot s16 after t seconds on typing.
   function transCusor15_16(){
    p=0, q=60 ;            
   flashCusor();}
   transCusor15_16()
   clearCusor()       
        }
   else if ((s16a1b61==Acolr) || (s16a2b61==Acolr)||(s16a3b61==Acolr)||(s16a4b61==Acolr)||
        (s16a5b61==Acolr)||(s16a6b61==Acolr)||(s16a7b61==Acolr)||(s16a8b61==Acolr)||
        (s16a9b61==Acolr)){
    
    
   


                    
     // shift cusor to slot s17 after t seconds on typing.
   function transCusor16_17(){
    p=0, q=64 ;            
   flashCusor();}
   transCusor16_17()
    clearCusor()      
        }

    else if ((s17a1b65==Acolr) || (s17a2b65==Acolr)||(s17a3b65==Acolr)||(s17a4b65==Acolr)||
        (s17a5b65==Acolr)||(s17a6b65==Acolr)||(s17a7b65==Acolr)||(s17a8b65==Acolr)||
        (s17a9b65==Acolr)){
    
    
   


                    
     // shift cusor to slot s18 after t seconds on typing.
   function transCusor17_18(){
    p=0, q=68 ;            
   flashCusor();}
   transCusor17_18()
   clearCusor()       
        }

   
   else if ((s18a1b69==Acolr) || (s18a2b69==Acolr)||(s18a3b69==Acolr)||(s18a4b69==Acolr)||
        (s18a5b69==Acolr)||(s18a6b69==Acolr)||(s18a7b69==Acolr)||(s18a8b69==Acolr)||
        (s18a9b69==Acolr)){
    
    
    


                    
     // shift cusor to slot s19 after t seconds on typing.
   function transCusor18_19(){
    p=0, q=72 ;            
   flashCusor();}
   transCusor18_19()
   clearCusor()       
        }

    
   
       else if ((s19a1b73==Acolr) || (s19a2b73==Acolr)||(s19a3b73==Acolr)||(s19a4b73==Acolr)||
        (s19a5b73==Acolr)||(s19a6b73==Acolr)||(s19a7b73==Acolr)||(s19a8b73==Acolr)||
        (s19a9b73==Acolr)){
    
    
     


                    
     // shift cusor to slot s19 after t seconds on typing.
   function transCusor19_20(){
    p=0, q=76 ;            
   flashCusor();}
   transCusor19_20()
   clearCusor()       
        }

        
        else if ((s20a1b77==Acolr) || (s20a2b77==Acolr)||(s20a3b77==Acolr)||(s20a4b77==Acolr)||
        (s20a5b77==Acolr)||(s20a6b77==Acolr)||(s20a7b77==Acolr)||(s20a8b77==Acolr)||
        (s20a9b77==Acolr)){
     
    
   

                    
     // shift cusor to slot s21 after t seconds on typing.
   function transCusor20_21(){
    p=9, q=0 ;            
   flashCusor();}
   transCusor20_21()
    clearCusor()      
          }

  //ROW 2 TEXT CODES START

     else if ((s21a10b1==Acolr) || (s21a11b1==Acolr)||(s21a12b1==Acolr)||(s21a13b1==Acolr)||
        (s21a14b1==Acolr)||(s21a15b1==Acolr)||(s21a16b1==Acolr)||(s21a17b1==Acolr)||
        (s21a18b1==Acolr)){
    
  

                    
     // shift cusor to slot s22 after t seconds on typing.
   function transCusor21_22(){
    p=9, q=4 ;            
   flashCusor();}
   transCusor21_22()
   clearCusor()
   
          }


  
   else if ((s22a10b5==Acolr) || (s22a11b5==Acolr)||(s22a12b5==Acolr)||(s22a13b5==Acolr)||
        (s22a14b5==Acolr)||(s22a15b5==Acolr)||(s22a16b5==Acolr)||(s22a17b5==Acolr)||
        (s22a18b5==Acolr)){
    
     

    
     // shift cusor to slot s23 after t seconds on typing.
   function transCusor22_23(){
    p=9, q=8 ;            
   flashCusor(); }
   transCusor22_23 ()
   clearCusor()
          }

     else if ((s23a10b9==Acolr) || (s23a11b9==Acolr)||(s23a12b9==Acolr)||(s23a13b9==Acolr)||
        (s23a14b9==Acolr)||(s23a15b9==Acolr)||(s23a16b9==Acolr)||(s23a17b9==Acolr)||
        (s23a18b9==Acolr)){
    
    
   

                    
     // shift cusor to slot s24 after t seconds on typing.
   function transCusor23_24(){
    p=9, q=12 ;            
   flashCusor();}
   transCusor23_24()
   clearCusor()       
        }                                       

  
    
    else if ((s24a10b13==Acolr) || (s24a11b13==Acolr)||(s24a12b13==Acolr)||(s24a13b13==Acolr)||
        (s24a14b13==Acolr)||(s24a15b13==Acolr)||(s24a16b13==Acolr)||(s24a17b13==Acolr)||
        (s24a18b13==Acolr)){
    
    
    

                    
     // shift cusor to slot s24 after t seconds on typing.
   function transCusor24_25(){
    p=9, q=16 ;            
   flashCusor();}
   transCusor24_25()
    clearCusor()      
        }   


   
    else if ((s25a10b17==Acolr) || (s25a11b17==Acolr)||(s25a12b17==Acolr)||(s25a13b17==Acolr)||
        (s25a14b17==Acolr)||(s25a15b17==Acolr)||(s25a16b17==Acolr)||(s25a17b17==Acolr)||
        (s25a18b17==Acolr)){
    
    
     

                    
     // shift cusor to slot s25 after t seconds on typing.
   function transCusor25_26(){
    p=9, q=20 ;            
   flashCusor();}
   transCusor25_26()
   clearCusor()       
        }  

  else if ((s26a10b21==Acolr) || (s26a11b21==Acolr)||(s26a12b21==Acolr)||(s26a13b21==Acolr)||
        (s26a14b21==Acolr)||(s26a15b21==Acolr)||(s26a16b21==Acolr)||(s26a17b21==Acolr)||
        (s26a18b21==Acolr)){
    
    
     

                    
     // shift cusor to slot s27 after t seconds on typing.
   function transCusor26_27(){
    p=9, q=24 ;            
   flashCusor();}
   transCusor26_27()
     
     }

    
    else if ((s27a10b25==Acolr) || (s27a11b25==Acolr)||(s27a12b25==Acolr)||(s27a13b25==Acolr)||
        (s27a14b25==Acolr)||(s27a15b25==Acolr)||(s27a16b25==Acolr)||(s27a17b25==Acolr)||
        (s27a18b25==Acolr)){
    
    
     

                    
     // shift cusor to slot s28 after t seconds on typing.
   function transCusor27_28(){
    p=9, q=28 ;            
   flashCusor();}
   transCusor27_28()
          
        }  

   
   else if ((s28a10b29==Acolr) || (s28a11b29==Acolr)||(s28a12b29==Acolr)||(s28a13b29==Acolr)||
        (s28a14b29==Acolr)||(s28a15b29==Acolr)||(s28a16b29==Acolr)||(s28a17b29==Acolr)||
        (s28a18b29==Acolr)){
    
    
     

                    
     // shift cusor to slot s28 after t seconds on typing.
   function transCusor28_29(){
    p=9, q=32 ;            
   flashCusor();}
   transCusor28_29()
    clearCusor()      
        }
  
    else if ((s29a10b33==Acolr) || (s29a11b33==Acolr)||(s29a12b33==Acolr)||(s29a13b33==Acolr)||
        (s29a14b33==Acolr)||(s29a15b33==Acolr)||(s29a16b33==Acolr)||(s29a17b33==Acolr)||
        (s29a18b33==Acolr)){
    
    
    

                    
     // shift cusor to slot s29 after t seconds on typing.
   function transCusor29_30(){
    p=9, q=36 ;            
   flashCusor();}
   transCusor29_30()
    clearCusor()      
        }    

     else if ((s30a10b37==Acolr) || (s30a11b37==Acolr)||(s30a12b37==Acolr)||(s30a13b37==Acolr)||
        (s30a14b37==Acolr)||(s30a15b37==Acolr)||(s30a16b37==Acolr)||(s30a17b37==Acolr)||
        (s30a18b37==Acolr)){
    
    

                    
     // shift cusor to slot s31 after t seconds on typing.
   function transCusor30_31(){
    p=9, q=40 ;            
   flashCusor();}
   transCusor30_31()
    clearCusor()      
        }

   else if ((s31a10b41==Acolr) || (s31a11b41==Acolr)||(s31a12b41==Acolr)||(s31a13b41==Acolr)||
        (s31a14b41==Acolr)||(s31a15b41==Acolr)||(s31a16b41==Acolr)||(s31a17b41==Acolr)||
        (s31a18b41==Acolr)){
    
    
   

                    
     // shift cusor to slot s32 after t seconds on typing.
   function transCusor31_32(){
    p=9, q=44 ;            
   flashCusor();}
   transCusor31_32()
   clearCusor()       
        }


   else if ((s32a10b45==Acolr) || (s32a11b45==Acolr)||(s32a12b45==Acolr)||(s32a13b45==Acolr)||
        (s32a14b45==Acolr)||(s32a15b45==Acolr)||(s32a16b45==Acolr)||(s32a17b45==Acolr)||
        (s32a18b45==Acolr)){
    
    
  

                    
     // shift cusor to slot s33 after t seconds on typing.
   function transCusor32_33(){
    p=9, q=48 ;            
   flashCusor();}
   transCusor32_33()
    clearCusor()      
        }


    else if ((s33a10b49==Acolr) || (s33a11b49==Acolr)||(s33a12b49==Acolr)||(s33a13b49==Acolr)||
        (s33a14b49==Acolr)||(s33a15b49==Acolr)||(s33a16b49==Acolr)||(s33a17b49==Acolr)||
        (s33a18b49==Acolr)){
    
    
    

                    
     // shift cusor to slot s34 after t seconds on typing.
   function transCusor33_34(){
    p=9, q=52 ;            
   flashCusor();}
   transCusor33_34()
   clearCusor()       
        }
    

    else if ((s34a10b53==Acolr) || (s34a11b53==Acolr)||(s34a12b53==Acolr)||(s34a13b53==Acolr)||
        (s34a14b53==Acolr)||(s34a15b53==Acolr)||(s34a16b53==Acolr)||(s34a17b53==Acolr)||
        (s34a18b53==Acolr)){
    
    
   

                    
     // shift cusor to slot s35 after t seconds on typing.
   function transCusor34_35(){
    p=9, q=56 ;            
   flashCusor();}
   transCusor34_35()
    clearCusor()      
        }


   else if ((s35a10b57==Acolr) || (s35a11b57==Acolr)||(s35a12b57==Acolr)||(s35a13b57==Acolr)||
        (s35a14b57==Acolr)||(s35a15b57==Acolr)||(s35a16b57==Acolr)||(s35a17b57==Acolr)||
        (s35a18b57==Acolr)){
    
    

                    
     // shift cusor to slot s36 after t seconds on typing.
   function transCusor35_36(){
    p=9, q=60 ;            
   flashCusor();}
   transCusor35_36()
   clearCusor()       
        }
   else if ((s36a10b61==Acolr) || (s36a11b61==Acolr)||(s36a12b61==Acolr)||(s36a13b61==Acolr)||
        (s36a14b61==Acolr)||(s36a15b61==Acolr)||(s36a16b61==Acolr)||(s36a17b61==Acolr)||
        (s36a18b61==Acolr)){
    
 

                    
     // shift cusor to slot s37 after t seconds on typing.
   function transCusor36_37(){
    p=9, q=64 ;            
   flashCusor();}
   transCusor36_37()
    clearCusor()      
        }

    else if ((s37a10b65==Acolr) || (s37a11b65==Acolr)||(s37a12b65==Acolr)||(s37a13b65==Acolr)||
        (s37a14b65==Acolr)||(s37a15b65==Acolr)||(s37a16b65==Acolr)||(s37a17b65==Acolr)||
        (s37a18b65==Acolr)){
    
    
   

                    
     // shift cusor to slot s38 after t seconds on typing.
   function transCusor37_38(){
    p=9, q=68 ;            
   flashCusor();}
   transCusor37_38()
   clearCusor()       
        }

   
   else if ((s38a10b69==Acolr) || (s38a11b69==Acolr)||(s38a12b69==Acolr)||(s38a13b69==Acolr)||
        (s38a14b69==Acolr)||(s38a15b69==Acolr)||(s38a16b69==Acolr)||(s38a17b69==Acolr)||
        (s38a18b69==Acolr)){
    
    
    

                    
     // shift cusor to slot s39 after t seconds on typing.
   function transCusor38_39(){
    p=9, q=72 ;            
   flashCusor();}
   transCusor38_39()
   clearCusor()       
        }

    
   
       else if ((s39a10b73==Acolr) || (s39a11b73==Acolr)||(s39a12b73==Acolr)||(s39a13b73==Acolr)||
        (s39a14b73==Acolr)||(s39a15b73==Acolr)||(s39a16b73==Acolr)||(s39a17b73==Acolr)||
        (s39a18b73==Acolr)){
    
    
 

                    
     // shift cusor to slot s39 after t seconds on typing.
   function transCusor39_40(){
    p=9, q=76 ;            
   flashCusor();}
   transCusor39_40()
    clearCusor()      
        }

        
        else if ((s40a10b77==Acolr) || (s40a11b77==Acolr)||(s40a12b77==Acolr)||(s40a13b77==Acolr)||
        (s40a14b77==Acolr)||(s40a15b77==Acolr)||(s40a16b77==Acolr)||(s40a17b77==Acolr)||
        (s40a18b77==Acolr)){
    
    
 

                    
     // shift cusor to slot s40 after t seconds on typing.
   function transCusor40_41(){
    p=18, q=0;            
   flashCusor();}
   transCusor40_41()
    clearCusor()      
        }
   
   
 //ROW 3 TEXT CODES START

     else if ((s41a19b1==Acolr) || (s41a20b1==Acolr)||(s41a21b1==Acolr)||(s41a22b1==Acolr)||
        (s41a23b1==Acolr)||(s41a24b1==Acolr)||(s41a25b1==Acolr)||(s41a26b1==Acolr)||
        (s41a27b1==Acolr)){
    
   

                    
     // shift cusor to slot s42 after t seconds on typing.
   function transCusor41_42(){
    p=18, q=4 ;            
   flashCusor();}
   transCusor41_42()
   clearCusor()
   
          }


  
   else if ((s42a19b5==Acolr) || (s42a20b5==Acolr)||(s42a21b5==Acolr)||(s42a22b5==Acolr)||
        (s42a23b5==Acolr)||(s42a24b5==Acolr)||(s42a25b5==Acolr)||(s42a26b5==Acolr)||
        (s42a27b5==Acolr)){
    
     

   
                    
     // shift cusor to slot s43 after t seconds on typing.
   function transCusor42_43(){
    p=18, q=8 ;            
   flashCusor(); }
   transCusor42_43 ()
   clearCusor()
          }

     else if ((s43a19b9==Acolr) || (s43a20b9==Acolr)||(s43a21b9==Acolr)||(s43a22b9==Acolr)||
        (s43a23b9==Acolr)||(s43a24b9==Acolr)||(s43a25b9==Acolr)||(s43a26b9==Acolr)||
        (s43a27b9==Acolr)){
    
    
  

                    
     // shift cusor to slot s44 after t seconds on typing.
   function transCusor43_44(){
    p=18, q=12 ;            
   flashCusor();}
   transCusor43_44()
    clearCusor()      
        }                                       

  
    
    else if ((s44a19b13==Acolr) || (s44a20b13==Acolr)||(s44a21b13==Acolr)||(s44a22b13==Acolr)||
        (s44a23b13==Acolr)||(s44a24b13==Acolr)||(s44a25b13==Acolr)||(s44a26b13==Acolr)||
        (s44a27b13==Acolr)){
    
    


                    
     // shift cusor to slot s44 after t seconds on typing.
   function transCusor44_45(){
    p=18, q=16 ;            
   flashCusor();}
   transCusor44_45()
   clearCusor()       
        }   


   
    else if ((s45a19b17==Acolr) || (s45a20b17==Acolr)||(s45a21b17==Acolr)||(s45a22b17==Acolr)||
        (s45a23b17==Acolr)||(s45a24b17==Acolr)||(s45a25b17==Acolr)||(s45a26b17==Acolr)||
        (s45a27b17==Acolr)){
    
    
   

                    
     // shift cusor to slot s45 after t seconds on typing.
   function transCusor45_46(){
    p=18, q=20 ;            
   flashCusor();}
   transCusor45_46()
   clearCusor()       
        }  

  else if ((s46a19b21==Acolr) || (s46a20b21==Acolr)||(s46a21b21==Acolr)||(s46a22b21==Acolr)||
        (s46a23b21==Acolr)||(s46a24b21==Acolr)||(s46a25b21==Acolr)||(s46a26b21==Acolr)||
        (s46a27b21==Acolr)){
    
    
 

                    
     // shift cusor to slot s47 after t seconds on typing.
   function transCusor46_47(){
    p=18, q=24 ;            
   flashCusor();}
   transCusor46_47()
   clearCusor()  
     }

    
    else if ((s47a19b25==Acolr) || (s47a20b25==Acolr)||(s47a21b25==Acolr)||(s47a22b25==Acolr)||
        (s47a23b25==Acolr)||(s47a24b25==Acolr)||(s47a25b25==Acolr)||(s47a26b25==Acolr)||
        (s47a27b25==Acolr)){
    
    
    

                    
     // shift cusor to slot s48 after t seconds on typing.
   function transCusor47_48(){
    p=18, q=28 ;            
   flashCusor();}
   transCusor47_48()
   clearCusor()       
        }  

   
   else if ((s48a19b29==Acolr) || (s48a20b29==Acolr)||(s48a21b29==Acolr)||(s48a22b29==Acolr)||
        (s48a23b29==Acolr)||(s48a24b29==Acolr)||(s48a25b29==Acolr)||(s48a26b29==Acolr)||
        (s48a27b29==Acolr)){
    
    
  

                    
     // shift cusor to slot s48 after t seconds on typing.
   function transCusor48_49(){
    p=18, q=32 ;            
   flashCusor();}
   transCusor48_49()
   clearCusor()       
        }
  
    else if ((s49a19b33==Acolr) || (s49a20b33==Acolr)||(s49a21b33==Acolr)||(s49a22b33==Acolr)||
        (s49a23b33==Acolr)||(s49a24b33==Acolr)||(s49a25b33==Acolr)||(s49a26b33==Acolr)||
        (s49a27b33==Acolr)){
    
    
  

                    
     // shift cusor to slot s49 after t seconds on typing.
   function transCusor49_50(){
    p=18, q=36 ;            
   flashCusor();}
   transCusor49_50()
   clearCusor()       
        }    

     else if ((s50a19b37==Acolr) || (s50a20b37==Acolr)||(s50a21b37==Acolr)||(s50a22b37==Acolr)||
        (s50a23b37==Acolr)||(s50a24b37==Acolr)||(s50a25b37==Acolr)||(s50a26b37==Acolr)||
        (s50a27b37==Acolr)){
    
    
   

                    
     // shift cusor to slot s51 after t seconds on typing.
   function transCusor50_51(){
    p=18, q=40 ;            
   flashCusor();}
   transCusor50_51()
   clearCusor()       
        }

   else if ((s51a19b41==Acolr) || (s51a20b41==Acolr)||(s51a21b41==Acolr)||(s51a22b41==Acolr)||
        (s51a23b41==Acolr)||(s51a24b41==Acolr)||(s51a25b41==Acolr)||(s51a26b41==Acolr)||
        (s51a27b41==Acolr)){
    
    
   

                    
     // shift cusor to slot s52 after t seconds on typing.
   function transCusor51_52(){
    p=18, q=44 ;            
   flashCusor();}
   transCusor51_52()
   clearCusor()       
        }


   else if ((s52a19b45==Acolr) || (s52a20b45==Acolr)||(s52a21b45==Acolr)||(s52a22b45==Acolr)||
        (s52a23b45==Acolr)||(s52a24b45==Acolr)||(s52a25b45==Acolr)||(s52a26b45==Acolr)||
        (s52a27b45==Acolr)){
    
    
  

                    
     // shift cusor to slot s53 after t seconds on typing.
   function transCusor52_53(){
    p=18, q=48 ;            
   flashCusor();}
   transCusor52_53()
    clearCusor()      
        }


    else if ((s53a19b49==Acolr) || (s53a20b49==Acolr)||(s53a21b49==Acolr)||(s53a22b49==Acolr)||
        (s53a23b49==Acolr)||(s53a24b49==Acolr)||(s53a25b49==Acolr)||(s53a26b49==Acolr)||
        (s53a27b49==Acolr)){
    
    
  

                    
     // shift cusor to slot s54 after t seconds on typing.
   function transCusor53_54(){
    p=18, q=52 ;            
   flashCusor();}
   transCusor53_54()
   clearCusor()       
        }
    

    else if ((s54a19b53==Acolr) || (s54a20b53==Acolr)||(s54a21b53==Acolr)||(s54a22b53==Acolr)||
        (s54a23b53==Acolr)||(s54a24b53==Acolr)||(s54a25b53==Acolr)||(s54a26b53==Acolr)||
        (s54a27b53==Acolr)){
    
    
   

                    
     // shift cusor to slot s55 after t seconds on typing.
   function transCusor54_55(){
    p=18, q=56 ;            
   flashCusor();}
   transCusor54_55()
    clearCusor()      
        }


   else if ((s55a19b57==Acolr) || (s55a20b57==Acolr)||(s55a21b57==Acolr)||(s55a22b57==Acolr)||
        (s55a23b57==Acolr)||(s55a24b57==Acolr)||(s55a25b57==Acolr)||(s55a26b57==Acolr)||
        (s55a27b57==Acolr)){
    
    
    

                    
     // shift cusor to slot s56 after t seconds on typing.
   function transCusor55_56(){
    p=18, q=60 ;            
   flashCusor();}
   transCusor55_56()
    clearCusor()      
        }
   else if ((s56a19b61==Acolr) || (s56a20b61==Acolr)||(s56a21b61==Acolr)||(s56a22b61==Acolr)||
        (s56a23b61==Acolr)||(s56a24b61==Acolr)||(s56a25b61==Acolr)||(s56a26b61==Acolr)||
        (s56a27b61==Acolr)){
    
    
 

                    
     // shift cusor to slot s57 after t seconds on typing.
   function transCusor57_57(){
    p=18, q=64 ;            
   flashCusor();}
   transCusor57_57()
    clearCusor()      
        }

    else if ((s57a19b65==Acolr) || (s57a20b65==Acolr)||(s57a21b65==Acolr)||(s57a22b65==Acolr)||
        (s57a23b65==Acolr)||(s57a24b65==Acolr)||(s57a25b65==Acolr)||(s57a26b65==Acolr)||
        (s57a27b65==Acolr)){
    
    
   

                    
     // shift cusor to slot s58 after t seconds on typing.
   function transCusor57_58(){
    p=18, q=68 ;            
   flashCusor();}
   transCusor57_58()
    clearCusor()      
        }

   
   else if ((s58a19b69==Acolr) || (s58a20b69==Acolr)||(s58a21b69==Acolr)||(s58a22b69==Acolr)||
        (s58a23b69==Acolr)||(s58a24b69==Acolr)||(s58a25b69==Acolr)||(s58a26b69==Acolr)||
        (s58a27b69==Acolr)){
    
    
 

                    
     // shift cusor to slot s59 after t seconds on typing.
   function transCusor58_59(){
    p=18, q=72 ;            
   flashCusor();}
   transCusor58_59()
   clearCusor()       
        }

    
   
       else if ((s59a19b73==Acolr) || (s59a20b73==Acolr)||(s59a21b73==Acolr)||(s59a22b73==Acolr)||
        (s59a23b73==Acolr)||(s59a24b73==Acolr)||(s59a25b73==Acolr)||(s59a26b73==Acolr)||
        (s59a27b73==Acolr)){
    
    
  

                    
     // shift cusor to slot s59 after t seconds on typing.
   function transCusor59_60(){
    p=18, q=76 ;            
   flashCusor();}
   transCusor59_60()
   clearCusor()       
        }

        
        else if ((s60a19b77==Acolr) || (s60a20b77==Acolr)||(s60a21b77==Acolr)||(s60a22b77==Acolr)||
        (s60a23b77==Acolr)||(s60a24b77==Acolr)||(s60a25b77==Acolr)||(s60a26b77==Acolr)||
        (s60a27b77==Acolr)){
    
    


                    
     // shift cusor to slot s60 after t seconds on typing.
   function transCusor60_61(){
    p=18, q=80 ;            
   flashCusor();}
   transCusor60_61()
   clearCusor()         
    
     }


  else {}
      } 




//CREATE Character Zero
    function Zero() {
  
   var Iden_0_01='a'+(2+p)+'b'+(2+q);
   var Iden_0_02='a'+(3+p)+'b'+(2+q);
   var Iden_0_03='a'+(4+p)+'b'+(2+q);
   var Iden_0_04='a'+(5+p)+'b'+(2+q);
   var Iden_0_05='a'+(6+p)+'b'+(2+q);
   var Iden_0_06='a'+(7+p)+'b'+(2+q);
   var Iden_0_07='a'+(8+p)+'b'+(2+q);
   var Iden_0_08='a'+(2+p)+'b'+(4+q);
   var Iden_0_09='a'+(3+p)+'b'+(4+q);
   var Iden_0_10='a'+(4+p)+'b'+(4+q);
   var Iden_0_11='a'+(5+p)+'b'+(4+q);
   var Iden_0_12='a'+(6+p)+'b'+(4+q);
   var Iden_0_13='a'+(7+p)+'b'+(4+q);
   var Iden_0_14='a'+(8+p)+'b'+(4+q);
   var Iden_0_15='a'+(2+p)+'b'+(3+q);
   var Iden_0_16='a'+(8+p)+'b'+(3+q);
   
   document.getElementById(Iden_0_01).style.backgroundColor= colr
   document.getElementById(Iden_0_02).style.backgroundColor= colr     
   document.getElementById(Iden_0_03).style.backgroundColor= colr 
   document.getElementById(Iden_0_04).style.backgroundColor= colr 
   document.getElementById(Iden_0_05).style.backgroundColor= colr 
   document.getElementById(Iden_0_06).style.backgroundColor= colr
   document.getElementById(Iden_0_07).style.backgroundColor= colr
   document.getElementById(Iden_0_08).style.backgroundColor= colr
   document.getElementById(Iden_0_09).style.backgroundColor= colr
   document.getElementById(Iden_0_10).style.backgroundColor= colr   
   document.getElementById(Iden_0_11).style.backgroundColor= colr   
   document.getElementById(Iden_0_12).style.backgroundColor= colr
   document.getElementById(Iden_0_13).style.backgroundColor= colr
   document.getElementById(Iden_0_14).style.backgroundColor= colr
   document.getElementById(Iden_0_15).style.backgroundColor= colr
   document.getElementById(Iden_0_16).style.backgroundColor= colr
      
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_0_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_0_ij).style.backgroundColor= Icolr;   
       }
      }
    }

//CREATE Character One

    function One() {

   var Iden_1_01='a'+(2+p)+'b'+(3+q);
   var Iden_1_02='a'+(3+p)+'b'+(3+q);
   var Iden_1_03='a'+(4+p)+'b'+(3+q);
   var Iden_1_04='a'+(5+p)+'b'+(3+q);
   var Iden_1_05='a'+(6+p)+'b'+(3+q);
   var Iden_1_06='a'+(7+p)+'b'+(3+q);
   var Iden_1_07='a'+(8+p)+'b'+(3+q);
   var Iden_1_08='a'+(3+p)+'b'+(2+q);
   var Iden_1_09='a'+(8+p)+'b'+(2+q);
   var Iden_1_10='a'+(8+p)+'b'+(4+q);

   document.getElementById(Iden_1_01).style.backgroundColor= colr
   document.getElementById(Iden_1_02).style.backgroundColor= colr
   document.getElementById(Iden_1_03).style.backgroundColor= colr
   document.getElementById(Iden_1_04).style.backgroundColor= colr       
   document.getElementById(Iden_1_05).style.backgroundColor= colr
   document.getElementById(Iden_1_06).style.backgroundColor= colr
   document.getElementById(Iden_1_07).style.backgroundColor= colr
   document.getElementById(Iden_1_08).style.backgroundColor= colr
   document.getElementById(Iden_1_09).style.backgroundColor= colr
   document.getElementById(Iden_1_10).style.backgroundColor= colr

     //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_1_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_1_ij).style.backgroundColor= Icolr;   
          }
         }
       }

//CREATE Character Two

    function Two() {
  
   var Iden_2_01='a'+(2+p)+'b'+(4+q);
   var Iden_2_02='a'+(3+p)+'b'+(4+q);
   var Iden_2_03='a'+(4+p)+'b'+(4+q);
   var Iden_2_04='a'+(5+p)+'b'+(4+q);
   var Iden_2_05='a'+(3+p)+'b'+(2+q);
   var Iden_2_06='a'+(2+p)+'b'+(2+q);
   var Iden_2_07='a'+(2+p)+'b'+(3+q);
   var Iden_2_08='a'+(6+p)+'b'+(3+q);
   var Iden_2_09='a'+(6+p)+'b'+(2+q);
   var Iden_2_10='a'+(7+p)+'b'+(2+q);
   var Iden_2_11='a'+(8+p)+'b'+(2+q);
   var Iden_2_12='a'+(8+p)+'b'+(3+q);
   var Iden_2_13='a'+(8+p)+'b'+(4+q);

   document.getElementById(Iden_2_01).style.backgroundColor= colr
   document.getElementById(Iden_2_02).style.backgroundColor= colr      
   document.getElementById(Iden_2_03).style.backgroundColor= colr
   document.getElementById(Iden_2_04).style.backgroundColor= colr
   document.getElementById(Iden_2_05).style.backgroundColor= colr  
   document.getElementById(Iden_2_06).style.backgroundColor= colr
   document.getElementById(Iden_2_07).style.backgroundColor= colr
   document.getElementById(Iden_2_08).style.backgroundColor= colr
   document.getElementById(Iden_2_09).style.backgroundColor= colr
   document.getElementById(Iden_2_10).style.backgroundColor= colr
   document.getElementById(Iden_2_11).style.backgroundColor= colr
   document.getElementById(Iden_2_12).style.backgroundColor= colr
   document.getElementById(Iden_2_13).style.backgroundColor= colr
    
 
     //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {

   var Iden_2_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_2_ij).style.backgroundColor= Icolr;   
       }
      }
    }

 //CREATE Character 3

    function Three() {
  
   var Iden_3_01='a'+(2+p)+'b'+(2+q);
   var Iden_3_02='a'+(3+p)+'b'+(2+q);
   var Iden_3_03='a'+(7+p)+'b'+(2+q);
   var Iden_3_04='a'+(8+p)+'b'+(3+q);
   var Iden_3_05='a'+(2+p)+'b'+(4+q);
   var Iden_3_06='a'+(3+p)+'b'+(4+q);
   var Iden_3_07='a'+(4+p)+'b'+(4+q);
   var Iden_3_08='a'+(5+p)+'b'+(4+q);
   var Iden_3_09='a'+(6+p)+'b'+(4+q);
   var Iden_3_10='a'+(7+p)+'b'+(4+q);
   var Iden_3_11='a'+(8+p)+'b'+(4+q);
   var Iden_3_12='a'+(2+p)+'b'+(3+q);
   var Iden_3_15='a'+(8+p)+'b'+(2+q);
   var Iden_3_13='a'+(8+p)+'b'+(3+q);
   var Iden_3_14='a'+(5+p)+'b'+(3+q);


   document.getElementById(Iden_3_01).style.backgroundColor= colr         
   document.getElementById(Iden_3_02).style.backgroundColor= colr
   document.getElementById(Iden_3_03).style.backgroundColor= colr         
   document.getElementById(Iden_3_04).style.backgroundColor= colr          
   document.getElementById(Iden_3_05).style.backgroundColor= colr         
   document.getElementById(Iden_3_06).style.backgroundColor= colr         
   document.getElementById(Iden_3_07).style.backgroundColor= colr         
   document.getElementById(Iden_3_08).style.backgroundColor= colr
   document.getElementById(Iden_3_09).style.backgroundColor= colr         
   document.getElementById(Iden_3_10).style.backgroundColor= colr
   document.getElementById(Iden_3_11).style.backgroundColor= colr         
   document.getElementById(Iden_3_12).style.backgroundColor= colr          
   document.getElementById(Iden_3_13).style.backgroundColor= colr         
   document.getElementById(Iden_3_14).style.backgroundColor= colr         
   document.getElementById(Iden_3_15).style.backgroundColor= colr

  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_3_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_3_ij).style.backgroundColor= Icolr; 
       }
      }
    }


   //CREATE Character Four

    function Four() {

   var Iden_4_01='a'+(4+p)+'b'+(2+q);
   var Iden_4_02='a'+(5+p)+'b'+(4+q);
   var Iden_4_03='a'+(5+p)+'b'+(3+q);
   var Iden_4_04='a'+(5+p)+'b'+(2+q);
   var Iden_4_05='a'+(2+p)+'b'+(4+q);
   var Iden_4_06='a'+(3+p)+'b'+(4+q);
   var Iden_4_07='a'+(4+p)+'b'+(4+q);
   var Iden_4_08='a'+(5+p)+'b'+(4+q);
   var Iden_4_09='a'+(6+p)+'b'+(4+q);
   var Iden_4_10='a'+(7+p)+'b'+(4+q);
   var Iden_4_11='a'+(8+p)+'b'+(4+q);
   var Iden_4_12='a'+(3+p)+'b'+(3+q);
   
   document.getElementById(Iden_4_01).style.backgroundColor= colr
   document.getElementById(Iden_4_02).style.backgroundColor= colr
   document.getElementById(Iden_4_03).style.backgroundColor= colr
   document.getElementById(Iden_4_04).style.backgroundColor= colr
   document.getElementById(Iden_4_05).style.backgroundColor= colr
   document.getElementById(Iden_4_06).style.backgroundColor= colr
   document.getElementById(Iden_4_07).style.backgroundColor= colr
   document.getElementById(Iden_4_08).style.backgroundColor= colr   
   document.getElementById(Iden_4_09).style.backgroundColor= colr
   document.getElementById(Iden_4_10).style.backgroundColor= colr
   document.getElementById(Iden_4_11).style.backgroundColor= colr
   document.getElementById(Iden_4_12).style.backgroundColor= colr
   


 //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_4_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_4_ij).style.backgroundColor= Icolr; 
       }
      }

   }


 // CREATE Character Five

    function Five(){

   var Iden_5_01='a'+(2+p)+'b'+(2+q);
   var Iden_5_02='a'+(3+p)+'b'+(2+q);
   var Iden_5_03='a'+(4+p)+'b'+(2+q);
   var Iden_5_04='a'+(5+p)+'b'+(2+q);
   var Iden_5_05='a'+(8+p)+'b'+(2+q);
   var Iden_5_06='a'+(5+p)+'b'+(4+q);
   var Iden_5_07='a'+(6+p)+'b'+(4+q);
   var Iden_5_08='a'+(7+p)+'b'+(4+q);
   var Iden_5_09='a'+(8+p)+'b'+(4+q);
   var Iden_5_10='a'+(2+p)+'b'+(3+q);
   var Iden_5_11='a'+(8+p)+'b'+(3+q);
   var Iden_5_12='a'+(5+p)+'b'+(3+q);
   var Iden_5_13='a'+(2+p)+'b'+(4+q);
   var Iden_5_14='a'+(3+p)+'b'+(4+q);

   document.getElementById(Iden_5_01).style.backgroundColor= colr
   document.getElementById(Iden_5_02).style.backgroundColor= colr        
   document.getElementById(Iden_5_03).style.backgroundColor= colr
   document.getElementById(Iden_5_04).style.backgroundColor= colr 
   document.getElementById(Iden_5_05).style.backgroundColor= colr
   document.getElementById(Iden_5_06).style.backgroundColor= colr  
   document.getElementById(Iden_5_07).style.backgroundColor= colr
   document.getElementById(Iden_5_08).style.backgroundColor= colr 
   document.getElementById(Iden_5_09).style.backgroundColor= colr  
   document.getElementById(Iden_5_10).style.backgroundColor= colr 
   document.getElementById(Iden_5_11).style.backgroundColor= colr          
   document.getElementById(Iden_5_12).style.backgroundColor= colr  
   document.getElementById(Iden_5_13).style.backgroundColor= colr
   document.getElementById(Iden_5_14).style.backgroundColor= colr
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_5_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_5_ij).style.backgroundColor= Icolr;   
       }
      }
    }


 //  CREATE Character Six
    function Six() {

    var Iden_6_01='a'+(2+p)+'b'+(2+q);
    var Iden_6_02='a'+(3+p)+'b'+(2+q);
    var Iden_6_03='a'+(4+p)+'b'+(2+q);
    var Iden_6_04='a'+(5+p)+'b'+(2+q);
    var Iden_6_05='a'+(6+p)+'b'+(2+q);
    var Iden_6_06='a'+(7+p)+'b'+(2+q);
    var Iden_6_07='a'+(8+p)+'b'+(2+q);
    var Iden_6_08='a'+(2+p)+'b'+(4+q);
    var Iden_6_10='a'+(5+p)+'b'+(4+q);
    var Iden_6_11='a'+(6+p)+'b'+(4+q);
    var Iden_6_12='a'+(7+p)+'b'+(4+q);
    var Iden_6_13='a'+(8+p)+'b'+(4+q);
    var Iden_6_14='a'+(2+p)+'b'+(3+q);
    var Iden_6_15='a'+(8+p)+'b'+(3+q);
    var Iden_6_16='a'+(5+p)+'b'+(3+q);


   document.getElementById(Iden_6_01).style.backgroundColor= colr
   document.getElementById(Iden_6_02).style.backgroundColor= colr
   document.getElementById(Iden_6_03).style.backgroundColor= colr
   document.getElementById(Iden_6_04).style.backgroundColor= colr
   document.getElementById(Iden_6_05).style.backgroundColor= colr
   document.getElementById(Iden_6_06).style.backgroundColor= colr
   document.getElementById(Iden_6_07).style.backgroundColor= colr
   document.getElementById(Iden_6_08).style.backgroundColor= colr
   document.getElementById(Iden_6_10).style.backgroundColor= colr  
   document.getElementById(Iden_6_11).style.backgroundColor= colr
   document.getElementById(Iden_6_12).style.backgroundColor= colr  
   document.getElementById(Iden_6_13).style.backgroundColor= colr
   document.getElementById(Iden_6_14).style.backgroundColor= colr
   document.getElementById(Iden_6_15).style.backgroundColor= colr  
   document.getElementById(Iden_6_16).style.backgroundColor= colr
 
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_6_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_6_ij).style.backgroundColor= Icolr;   
       }
      }
    }


 //  CREATE Character Seven
    function Seven() {

   var Iden_7_01='a'+(3+p)+'b'+(4+q);
   var Iden_7_02='a'+(4+p)+'b'+(4+q);
   var Iden_7_03='a'+(5+p)+'b'+(4+q);
   var Iden_7_04='a'+(6+p)+'b'+(4+q);
   var Iden_7_05='a'+(7+p)+'b'+(4+q);
   var Iden_7_06='a'+(8+p)+'b'+(4+q);
   var Iden_7_07='a'+(2+p)+'b'+(2+q);
   var Iden_7_08='a'+(2+p)+'b'+(3+q);
   var Iden_7_09='a'+(2+p)+'b'+(4+q);
   var Iden_7_10='a'+(3+p)+'b'+(2+q);

   document.getElementById(Iden_7_01).style.backgroundColor= colr
   document.getElementById(Iden_7_02).style.backgroundColor= colr
   document.getElementById(Iden_7_03).style.backgroundColor= colr
   document.getElementById(Iden_7_04).style.backgroundColor= colr
   document.getElementById(Iden_7_05).style.backgroundColor= colr
   document.getElementById(Iden_7_06).style.backgroundColor= colr
   document.getElementById(Iden_7_07).style.backgroundColor= colr
   document.getElementById(Iden_7_08).style.backgroundColor= colr
   document.getElementById(Iden_7_09).style.backgroundColor= colr
   document.getElementById(Iden_7_10).style.backgroundColor= colr

    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_7_ij='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden_7_ij).style.backgroundColor= Icolr;   
       }
      }
    }


//CREATE Character Eight
     function Eight() {
    
    var Iden_8_01='a'+(2+p)+'b'+(3+q);
    var Iden_8_02='a'+(3+p)+'b'+(2+q);
    var Iden_8_03='a'+(3+p)+'b'+(4+q);
    var Iden_8_04='a'+(4+p)+'b'+(2+q);
    var Iden_8_05='a'+(4+p)+'b'+(4+q);
    var Iden_8_06='a'+(5+p)+'b'+(2+q); 
    var Iden_8_07='a'+(5+p)+'b'+(4+q);
    var Iden_8_08='a'+(5+p)+'b'+(3+q);
    var Iden_8_09='a'+(6+p)+'b'+(2+q);
    var Iden_8_10='a'+(6+p)+'b'+(4+q);
    var Iden_8_11='a'+(7+p)+'b'+(2+q);
    var Iden_8_12='a'+(7+p)+'b'+(4+q);
    var Iden_8_13='a'+(8+p)+'b'+(3+q);
   
   document.getElementById(Iden_8_01).style.backgroundColor= colr
   document.getElementById(Iden_8_02).style.backgroundColor= colr
   document.getElementById(Iden_8_03).style.backgroundColor= colr  
   document.getElementById(Iden_8_04).style.backgroundColor= colr
   document.getElementById(Iden_8_05).style.backgroundColor= colr
   document.getElementById(Iden_8_06).style.backgroundColor= colr
   document.getElementById(Iden_8_07).style.backgroundColor= colr  
   document.getElementById(Iden_8_08).style.backgroundColor= colr
   document.getElementById(Iden_8_09).style.backgroundColor= colr
   document.getElementById(Iden_8_10).style.backgroundColor= colr
   document.getElementById(Iden_8_11).style.backgroundColor= colr
   document.getElementById(Iden_8_12).style.backgroundColor= colr
   document.getElementById(Iden_8_13).style.backgroundColor= colr
   
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden).style.backgroundColor= Icolr;   
       }
      }
    }


//CREATE Character Nine
     function Nine() {
    
    var Iden_9_01='a'+(4+p)+'b'+(4+q);
    var Iden_9_02='a'+(3+p)+'b'+(2+q);
    var Iden_9_03='a'+(4+p)+'b'+(2+q);
    var Iden_9_04='a'+(5+p)+'b'+(2+q);
    var Iden_9_05='a'+(7+p)+'b'+(2+q);
    var Iden_9_07='a'+(8+p)+'b'+(2+q);
    var Iden_9_08='a'+(2+p)+'b'+(4+q);
    var Iden_9_09='a'+(3+p)+'b'+(4+q);
    var Iden_9_10='a'+(5+p)+'b'+(4+q);
    var Iden_9_11='a'+(6+p)+'b'+(4+q);
    var Iden_9_12='a'+(7+p)+'b'+(4+q);
    var Iden_9_13='a'+(8+p)+'b'+(4+q);
    var Iden_9_14='a'+(2+p)+'b'+(3+q);
    var Iden_9_15='a'+(8+p)+'b'+(3+q);
    var Iden_9_16='a'+(5+p)+'b'+(3+q);
    
   
   document.getElementById(Iden_9_01).style.backgroundColor= colr
   document.getElementById(Iden_9_02).style.backgroundColor= colr
   document.getElementById(Iden_9_03).style.backgroundColor= colr
   document.getElementById(Iden_9_04).style.backgroundColor= colr  
   document.getElementById(Iden_9_05).style.backgroundColor= colr
   document.getElementById(Iden_9_07).style.backgroundColor= colr  
   document.getElementById(Iden_9_08).style.backgroundColor= colr
   document.getElementById(Iden_9_09).style.backgroundColor= colr
   document.getElementById(Iden_9_10).style.backgroundColor= colr  
   document.getElementById(Iden_9_11).style.backgroundColor= colr
   document.getElementById(Iden_9_12).style.backgroundColor= colr
   document.getElementById(Iden_9_13).style.backgroundColor= colr
   document.getElementById(Iden_9_14).style.backgroundColor= colr  
   document.getElementById(Iden_9_15).style.backgroundColor= colr
   document.getElementById(Iden_9_16).style.backgroundColor= colr
   
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden).style.backgroundColor= Icolr;   
       }
      }
    }

//Math Symbol Library

// CREATE Addition Sign

  function Plus() {
  
   var Iden_plus_01='a'+(5+p)+'b'+(2+q);
   var Iden_plus_02='a'+(5+p)+'b'+(3+q);
   var Iden_plus_03='a'+(5+p)+'b'+(4+q); 
   var Iden_plus_04='a'+(3+p)+'b'+(3+q);
   var Iden_plus_05='a'+(4+p)+'b'+(3+q);
   var Iden_plus_06='a'+(5+p)+'b'+(3+q);
   var Iden_plus_07='a'+(6+p)+'b'+(3+q);
   var Iden_plus_08='a'+(7+p)+'b'+(3+q);

   document.getElementById(Iden_plus_01).style.backgroundColor= colr
   document.getElementById(Iden_plus_02).style.backgroundColor= colr
   document.getElementById(Iden_plus_03).style.backgroundColor= colr
   document.getElementById(Iden_plus_04).style.backgroundColor= colr
   document.getElementById(Iden_plus_05).style.backgroundColor= colr
   document.getElementById(Iden_plus_06).style.backgroundColor= colr
   document.getElementById(Iden_plus_07).style.backgroundColor= colr  
   document.getElementById(Iden_plus_08).style.backgroundColor= colr
  
           
 //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_plus_ij='a'+(i+p)+'b'+(j+q)
   document.getElementById(Iden_plus_ij).style.backgroundColor= Icolr 
         }
       }
      }
   
  // CREATE Subtraction Sign

  function Minus() {
  
   var Iden_Minus_01='a'+(5+p)+'b'+(2+q);  
   var Iden_Minus_02='a'+(5+p)+'b'+(3+q);
   var Iden_Minus_03='a'+(5+p)+'b'+(4+q);
   var Iden_Minus_04='a'+(4+p)+'b'+(2+q);  
   var Iden_Minus_05='a'+(4+p)+'b'+(3+q);
   var Iden_Minus_06='a'+(4+p)+'b'+(4+q);
 
   document.getElementById(Iden_Minus_01).style.backgroundColor= colr
   document.getElementById(Iden_Minus_02).style.backgroundColor= colr
   document.getElementById(Iden_Minus_03).style.backgroundColor= colr
   document.getElementById(Iden_Minus_04).style.backgroundColor= colr
   document.getElementById(Iden_Minus_05).style.backgroundColor= colr
   document.getElementById(Iden_Minus_06).style.backgroundColor= colr   

 //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_minus_ij='a'+(i+p)+'b'+(j+q);
  document.getElementById(Iden_minus_ij).style.backgroundColor= Icolr
        }
       }
      }



   // CREATE Division Sign

  function Divide() {
   
   var Iden_Divide_01='a'+(3+p)+'b'+(4+q);
   var Iden_Divide_02='a'+(4+p)+'b'+(4+q);
   var Iden_Divide_03='a'+(5+p)+'b'+(3+q);
   var Iden_Divide_04='a'+(6+p)+'b'+(2+q);
   var Iden_Divide_05='a'+(7+p)+'b'+(2+q);
  

   document.getElementById(Iden_Divide_01).style.backgroundColor= colr
   document.getElementById(Iden_Divide_02).style.backgroundColor= colr      
   document.getElementById(Iden_Divide_03).style.backgroundColor= colr
   document.getElementById(Iden_Divide_04).style.backgroundColor= colr
   document.getElementById(Iden_Divide_05).style.backgroundColor= colr

   
   

    //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden='a'+(i+p)+'b'+(j+q)
    document.getElementById(Iden).style.backgroundColor= Icolr     
       }
       }
      }

   // CREATE Multiplication Sign

  function Multiply() {

 
   var Iden_Multiply_01='a'+(4+p)+'b'+(2+q);
   var Iden_Multiply_02='a'+(5+p)+'b'+(3+q);
   var Iden_Multiply_03='a'+(4+p)+'b'+(4+q);
   var Iden_Multiply_04='a'+(6+p)+'b'+(2+q);
   var Iden_Multiply_05='a'+(6+p)+'b'+(4+q);
  

     
   document.getElementById(Iden_Multiply_01).style.backgroundColor= colr
   document.getElementById(Iden_Multiply_02).style.backgroundColor= colr
   document.getElementById(Iden_Multiply_03).style.backgroundColor= colr    
   document.getElementById(Iden_Multiply_04).style.backgroundColor= colr        
   document.getElementById(Iden_Multiply_05).style.backgroundColor= colr   
 
        
    //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_Multiply_ij='a'+(i+p)+'b'+(j+q)
 document.getElementById(Iden_Multiply_ij).style.backgroundColor= Icolr    
                  }
               }
              }

 // CREATE Equal Sign

  function Equals() {
  
   var Iden_Equals_01='a'+(4+p)+'b'+(2+q);  
   var Iden_Equals_02='a'+(4+p)+'b'+(3+q);
   var Iden_Equals_03='a'+(4+p)+'b'+(4+q);
   var Iden_Equals_04='a'+(6+p)+'b'+(2+q);  
   var Iden_Equals_05='a'+(6+p)+'b'+(3+q);
   var Iden_Equals_06='a'+(6+p)+'b'+(4+q);
 
   document.getElementById(Iden_Equals_01).style.backgroundColor= colr
   document.getElementById(Iden_Equals_02).style.backgroundColor= colr
   document.getElementById(Iden_Equals_03).style.backgroundColor= colr
   document.getElementById(Iden_Equals_04).style.backgroundColor= colr
   document.getElementById(Iden_Equals_05).style.backgroundColor= colr
   document.getElementById(Iden_Equals_06).style.backgroundColor= colr   

 //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_Equals_ij='a'+(i+p)+'b'+(j+q);
  document.getElementById(Iden_Equals_ij).style.backgroundColor= Icolr
        }
       }
      }

// CREATE Left Curve Bracket

  function leftCurveBracket() {

   var Iden_leftCurveBracket_01='a'+(3+p)+'b'+(2+q);
   var Iden_leftCurveBracket_02='a'+(4+p)+'b'+(2+q);
   var Iden_leftCurveBracket_03='a'+(5+p)+'b'+(2+q);
   var Iden_leftCurveBracket_04='a'+(6+p)+'b'+(2+q);
   var Iden_leftCurveBracket_05='a'+(7+p)+'b'+(2+q);
   var Iden_leftCurveBracket_06='a'+(8+p)+'b'+(3+q);
   var Iden_leftCurveBracket_07='a'+(2+p)+'b'+(3+q);

     
   document.getElementById(Iden_leftCurveBracket_01).style.backgroundColor= colr
   document.getElementById(Iden_leftCurveBracket_02).style.backgroundColor= colr
   document.getElementById(Iden_leftCurveBracket_03).style.backgroundColor= colr    
   document.getElementById(Iden_leftCurveBracket_04).style.backgroundColor= colr        
   document.getElementById(Iden_leftCurveBracket_05).style.backgroundColor= colr   
   document.getElementById(Iden_leftCurveBracket_06).style.backgroundColor= colr  
   document.getElementById(Iden_leftCurveBracket_07).style.backgroundColor= colr      
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_Multiply_ij='a'+(i+p)+'b'+(j+q)
 document.getElementById(Iden_Multiply_ij).style.backgroundColor= Icolr    
                  }
               }
              }


// CREATE right Curve Bracket

  function rightCurveBracket() {

   var Iden_rightCurveBracket_01='a'+(3+p)+'b'+(4+q);
   var Iden_rightCurveBracket_02='a'+(4+p)+'b'+(4+q);
   var Iden_rightCurveBracket_03='a'+(5+p)+'b'+(4+q);
   var Iden_rightCurveBracket_04='a'+(6+p)+'b'+(4+q);
   var Iden_rightCurveBracket_05='a'+(7+p)+'b'+(4+q);
   var Iden_rightCurveBracket_06='a'+(8+p)+'b'+(3+q);
   var Iden_rightCurveBracket_07='a'+(2+p)+'b'+(3+q);

     
   document.getElementById(Iden_rightCurveBracket_01).style.backgroundColor= colr
   document.getElementById(Iden_rightCurveBracket_02).style.backgroundColor= colr
   document.getElementById(Iden_rightCurveBracket_03).style.backgroundColor= colr    
   document.getElementById(Iden_rightCurveBracket_04).style.backgroundColor= colr        
   document.getElementById(Iden_rightCurveBracket_05).style.backgroundColor= colr   
   document.getElementById(Iden_rightCurveBracket_06).style.backgroundColor= colr  
   document.getElementById(Iden_rightCurveBracket_07).style.backgroundColor= colr          
    
//Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_rightCurveBracket_ij='a'+(i+p)+'b'+(j+q)
 document.getElementById(Iden_rightCurveBracket_ij).style.backgroundColor= Icolr    
                  }
               }
              }

// CREATE Dot

  function Dot() {

   var Iden_Dot_01='a'+(7+p)+'b'+(3+q);
   var Iden_Dot_02='a'+(7+p)+'b'+(4+q);
   var Iden_Dot_03='a'+(8+p)+'b'+(3+q);
   var Iden_Dot_04='a'+(8+p)+'b'+(4+q);
   

     
   document.getElementById(Iden_Dot_01).style.backgroundColor= colr
   document.getElementById(Iden_Dot_02).style.backgroundColor= colr
   document.getElementById(Iden_Dot_03).style.backgroundColor= colr    
   document.getElementById(Iden_Dot_04).style.backgroundColor= colr        
            
    
//Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden_Dot_ij='a'+(i+p)+'b'+(j+q)
 document.getElementById(Iden_Dot_ij).style.backgroundColor= Icolr    
                  }
               }
              }

//CREATE Delete element
  
function Delete() {
  for ( var i=2; i<9; i++) {
  for ( var j=2; j<5; j++) {
   var Iden='a'+(i+p)+'b'+(j+q-4);
   document.getElementById(Iden).style.backgroundColor= Icolr
           }
          } ;
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=5; j<6; j++) {
   var Iden='a'+(i+p)+'b'+(j+q-4);
  

 document.getElementById(Iden).style.backgroundColor= Icolr;   
       }
      }
    }

//CREATE space bar element
  
function spaceBar() {
  for ( var i=2; i<9; i++) {
  for ( var j=2; j<5; j++) {
   var Iden='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden).style.backgroundColor= Icolr
           }
          } 
    
  //Extra code to clear cusor line
  for ( var i=1; i<10; i++) {
  for ( var j=1; j<2; j++) {
   var Iden='a'+(i+p)+'b'+(j+q);
   document.getElementById(Iden).style.backgroundColor= Icolr;   
       }
      }
    }          