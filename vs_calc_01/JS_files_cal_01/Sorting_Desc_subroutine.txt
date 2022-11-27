// sorting subroutine start
 
 function sortDesc(A){    
         for (j=0;j<1000;j++){
           for(i=0; i<A.length-1; i++){
              if (A[i]>=A[i+1]){}
              else {
                   var  A_a=A[i];
                   var  B_b=A[i+1];
                   A[i]=B_b;
                   A[i+1]=A_a;
                     }    
                   } 
                 }
      return A;}

// sorting subroutine STOP