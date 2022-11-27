// Operation Subtraction START


         function  Diff(P,Q){
  
  
//A is a two-element array with normed input.
        Diff=[];
        var diff;                                                  
        for (var i=(int_norm_index+frac_norm_index-1); i>-1; i--){
                 
                                     
                 if (P[i]>=Q[i]){
                   // alert("c1")
                     diff=P[i]-Q[i] ;
                     Diff.unshift(diff) }
                                   
                                               
                                           
                                

                 else if ((P[i]<Q[i])&& (P[i-1]>0)){
                       // alert("c2")
                         P[i-1]=P[i-1]-1;
                        P[i]=10+P[i];
                         diff=P[i]-Q[i] ;
                         Diff.unshift(diff)}                       
                                               
                                              
                 else if ((P[i]<Q[i])&& (P[i-1]==0)){
                             
                             //  alert("c3")     
                               for (var j=i-1; j>-1; j--){
                                                        
                                     if (P[j]>0){   
                                                                                      
                                                P[j]= P[j]-1 ;
                                                     //alert(P[j])     
                                                for (var k=j+1; k<i; k++){
                                                          // alert("K is "+k)
                                                          P[k]=9 ;
                                                // alert("I is "+i) 
                                                //  alert("J is "+j) 
                                                //   alert("K is "+k + "and P[k] is "+P[k])   
                                                        }
                                                  P[i]=10+P[i] ;
                                                  diff=P[i]-Q[i] ;
                                                  Diff.unshift(diff) ; 
                                                 // alert("Diff is "+Diff)  ;
                                                 
                                                  break;   }   
                                  } 

                                                 
                                               
                               }
                                                 
                                              
                                              
                           else{}  
   
                               
                  
         }                     
                    
      
       return Diff;}                
//Operation Subtraction STOP