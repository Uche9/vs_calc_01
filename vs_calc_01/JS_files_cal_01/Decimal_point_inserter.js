//PRE-DISPLAY OPERATIONS   
  
 //Insert decimal point 

   var decimal_place;

  function ins_Dec_Point(pointless_Answer){
                 
                
      if (Holder_expo.length !=0){
            alert("coming soon")
            } 

     else if (Holder_multi.length!=0){
             //alert("sweet Multiplication")
            decimal_place=(2*frac_norm_index)
             //alert(decimal_place);
}
     else if (Holder_div.length!=0){
               //alert("sweet Division")
            decimal_place=0;
              }

     else if (Holder_plus.length!=0){
           // alert("sweet addition")
            decimal_place=frac_norm_index;}

    else if (Holder_minus.length!=0){
           // alert("sweet subtraction")
            decimal_place=frac_norm_index;}

    else{ alert ("unknown Operation")}
           
       
    for (i=0; i<decimal_place; i++){
                     var a_i=pointless_Answer.pop() 
                     C_dum.unshift(a_i) }

                     C_dis= pointless_Answer.concat(["."],C_dum) 
                     
                     if ( C_dis[ (C_dis.length-1)]==".") {
                       C_dis.pop()
                }      
      
  return C_dis      }