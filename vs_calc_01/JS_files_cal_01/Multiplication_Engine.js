   //   Operation Multiplication START

// Compute Product
                          function Prod(P,Q){
                              var Q_num=array_Number(Q);
                              
                              var P_prod=[]
                                  P_prod.push(0)
                              for (k=0; k<Q_num ; k++){
                          
                            
                                      if (P.length!=P_prod.length){

                                            //alert("need to normalize")

                                           //alert(Norm(P_prod,P))
                                           var x= Norm(P_prod,P)[1]  ;
                                           var y= Norm(P_prod,P)[0] ;

                            

                                    //alert(" New prod is "+Sum(x,y))
                                         P=x;
                                         P_prod=Sum(x,y); 
  
                                    //alert("P_prod is " +P_prod)
                                     //alert("P is " +P)

                                             }
                                      else {  

                                               //alert("No norm required")
                                               P_prod=Sum(P_prod,P)}
                              
                              
                             var Ans=P_prod;    }
                                
                        return  Ans}



//   Operation Multiplication STOP