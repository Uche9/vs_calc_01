
 //Binary Normalizer START
     

     //alert(Norm([2],[2,3]))
  //alert(sortDesc([4,4,1,7,1]))
        
         function Norm(A,B){
               
     var  x=A.length;
     var   y=B.length;      //b_n_i is Binary norm index.
         
         
     var    z= sortDesc([x,y])


         for (i=0; i< (z[0] -x) ;i++){
         A.unshift(0)}


         for (i=0; i< (z[0] -y) ;i++){
         B.unshift(0)}

  // alert(A)
  // alert(B)
   return [A,B]        }

      

 //Binary Normalizer STOP