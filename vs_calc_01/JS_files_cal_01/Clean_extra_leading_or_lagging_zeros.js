//Clean Extra Leading zeros START


            function clear_Lead_Zeros(X){ 
   
              for(i=0;i<X.length ; i++){
                       //alert("I is " +i+ " "+ X)     
                  if  ((X[0]==0)&& (X[i+1]!=0)){
                            //alert("I is " +i)
                            X.shift();
                           //alert("I is " +i+ " "+ X)
                            i=0;  }
                    }
  return  X}


//Clean Extra Leading zeros END  


//Clean Extra Lagging zeros START


            function clear_Lag_Zeros(X){ 

                 //alert("Decimal place "+decimal_place)

              if (decimal_place!=0){

                  
                      for(i=X.length-1; i>-1 ; i--){
                            //alert("I is " +i+ "and Ans is "+ X)     
                      if ((X[X.length-1]==0)){
                            //alert("I is " +i)
                            X.pop();
                           //alert("I is " +i+ " "+ X)
                            i=0;  }
                        }
                 }

              else{}
 
 return  X}


//Clean Extra Lagging zeros END