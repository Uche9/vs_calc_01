//   ARRAY to number converter START



                          //alert(array_Number([2]))

                          function array_Number(P){

                             var X=0;   
                             for (i=0; i<P.length; i++){

                             X+=P[i]*10**(P.length-(i+1)) ;

                              //alert(X)  
                                          }
                             var N=X;
                              //alert(N)
                                  return  N}



//   ARRAY to number converter STOP






//   Number to ARRAY converter START

  

             //alert(number_Array(10))
            function number_Array(N){
                   
                          N=clear_Lead_Zeros(N);
                          //alert(N)
                                 P=[]
                                   const M=N/2;
                         if (N<10) { P.push(N)}

                          else{         for (i=0; i<M; i++){  
                                              // alert("I is "+i)
                                           
                                             var  Quo=Math.floor(N/10); 
                                             var  Rem=N %10;
                                  
                                              P.unshift(Rem);
                                             //alert("P is "+ P)
                                              N=Quo;  
                                                    
                                            if (N<10){
                                                       P.unshift(N)
                                                       break;}
                                       }
                                 }
                       //alert("P is "+ P)       
                          return  P} 



//      Number to ARRAY converter STOP 