//   Operation Addition Start


// Compute Sum
                          function Sum(P,Q){
          
                  
         var Sum=[];                             
         for (var i=0; i< P.length; i++){
             
             
                   var s=P[i]+Q[i];
                       
                        Sum.push(s) ;
               } 
                  
           //alert ("The rough sum is "+ Sum) 
           

          //alert ("Let us present sum in base 10");  
           for (i=Sum.length-1; i>0 ;i--){ 
                      
                     if (Sum[i]>9){ 
                      var Quo=Math.floor(Sum[i]/10)
                      Sum[i]=Sum[i] % 10;
                      Sum[i-1]=Sum[i-1]+Quo ;                  
                               }                      
                            } 
                      
      
     
      //alert("hi cool"+modSum(Sum))

                    //Subroutine for modsum START

                       function modSum(A){ 
          
                                     if (A[0]>9) {
         
                                     //    alert ("mod required")
                                              var modifiedSum=[];
                                             var  Quo_0=Math.floor(A[0]/10);
                                             var  Rem_0=A[0] % 10;
                                           modifiedSum.push(Quo_0);
                                           modifiedSum.push(Rem_0);         
                                          for (i=1; i<Sum.length; i++){         
                                             var  x_0=A[i];
                                               modifiedSum.push(x_0);}
                                          //alert(" this is modified sum"+modifiedSum)
                                             return modifiedSum ;    
                                                  }
    
                                    else {
                                            //alert ("mod not required")
                                         return A}
                                      }
  return modSum(Sum)    }   
 

// Addition Engine end.