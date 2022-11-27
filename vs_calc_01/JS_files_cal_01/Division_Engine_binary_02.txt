//Operation Division START
//Great technique is the divergent loop and array_number method.
                 

      function  Q_int(P,Q) {

   
      
   

                 var A=[]
                   var A_quo;
                  A.push(1);
                  Q_num=array_Number(Q);
            for (m=1; m<m+1; m++){
                  //alert(m)
                  
                     var A_post=A;
                 var x_1=array_Number(Prod(Q,A));
                  var y_1=array_Number(P)  
                   //alert(x_1+" "+y_1)  
            if ( x_1==y_1){ 
                            A_quo=A_post;      
                            break; 
                   //alert("operation complete")  
                                 } 
           else if ( x_1>y_1){  
                   //alert("processing")
                       A_quo=A_pre;
                   break; }
           else{      
                  A_pre=A;
                 A=number_Array(array_Number(A)+1);
                  
                 ;}

                 //alert(A_quo)
       
               } 
//alert("Whole num part is "+ A_quo)
    return A_quo} 


  
  //Global valiables  
  
           var xx_2;
           var yy_2;   //arguments passed do not need to be declared
            var Q;
            var xx_n;
            var yy_n;
            var Q_n;
            var Q_parse; /* has the genar form :
    [quotient array,Remainder array,["/"],Divisor]  */
            
    //alert( Quo([2,9],[3]))



  // DIVISION TOGGLE

/* Two modes are possible: Fraction or decimal */									

  //DIVISION Decimal mode is default MODE
  
          function Quo_frac (P,Q) {
               
               /*alert(P)
               alert(Q)*/

              P=Norm(P,Q)[0] ;     //Calling the normalizer
              Q=Norm(P,Q)[1] ;
               
              /*alert(P)
              alert(Q)*/
               
               var x_5=array_Number(P);
               var x_3=array_Number( Q)
                
    if (x_5<x_3){ 
                 
                 
                  xx_2=[0];
                 yy_2=number_Array(x_5);
                 Q =number_Array(x_3);

                 /* alert(xx_2)
                  alert(yy_2)
                  alert(Q)  */
                


                Q_parse=[xx_2, yy_2, ["/"],Q ]  
         
            /*      alert(Q_parse)
              Q=Q_parse[Q_parse.length-1];

                //alert(xx_2+" "+yy_2+" "+Q)
                var Paul=decFrac(xx_2,yy_2,Q)                 
                   showAns(Paul)  }                                  */
  
                //alert(Q_parse)
                //alert(xx_2 .concat([".,"],yy_2,["/"],Q) )
                return (xx_2 .concat([".,"],yy_2,["/"],Q) )}    
      
       else   { var x_2=array_Number( Q_int(P,Q)) ;       //yeilds the whole answer.
      
                  //alert("hi")
                 //alert("Whole part "+ x_2)
                var y_2=x_5- x_3 *x_2 ;//yields the remainder
                //alert ("Remainder "+y_2)  
       
                 xx_2= clear_Lead_Zeros(number_Array(x_2));
                  yy_2= clear_Lead_Zeros(number_Array(y_2));
                 Q=clear_Lead_Zeros(Q);
                Q_parse=[xx_2,yy_2,["/"],Q];

                if (y_2==0){ return xx_2}

               

               else {          /*
                        //alert(Q_parse)
              Q=Q_parse[Q_parse.length-1];

                //alert(xx_2+" "+yy_2+" "+Q)
                var Paul=decFrac(xx_2,yy_2,Q);
                 return Paul  }  */

                return (xx_2 .concat([".,"],yy_2,["/"],Q) )}   
            
             /* [" .,"] is a space and
               and a dot. The character is unknown and will not be rendered. This is majic. */
                      }           
          }

//Division-DECIMAL MODE

                function Quo(P,Q) {
               
               /*alert(P)
               alert(Q)*/

              P=Norm(P,Q)[0] ;     //Calling the normalizer
              Q=Norm(P,Q)[1] ;
               
              /*alert(P)
              alert(Q)*/
               
               var x_5=array_Number(P);
               var x_3=array_Number( Q)
                
    if (x_5<x_3){ 
                 
                 
                  xx_2=[0];
                 yy_2=number_Array(x_5);
                 Q =number_Array(x_3);

                 /* alert(xx_2)
                  alert(yy_2)
                  alert(Q)  */
                


                Q_parse=[xx_2, yy_2, ["/"],Q ]  

                  //alert(Q_parse)
              Q=Q_parse[Q_parse.length-1];

                //alert(xx_2+" "+yy_2+" "+Q)
                var Paul=decFrac(xx_2,yy_2,Q)                 
                   showAns(Paul)  }                                  /*
  
                //alert(Q_parse)
                //alert(xx_2 .concat([".,"],yy_2,["/"],Q) )
                return (xx_2 .concat([".,"],yy_2,["/"],Q) )}    */
      
       else   { var x_2=array_Number( Q_int(P,Q)) ;       //yeilds the whole answer.
      
                  //alert("hi")
                 //alert("Whole part "+ x_2)
                var y_2=x_5- x_3 *x_2 ;//yields the remainder
                //alert ("Remainder "+y_2)  
       
                 xx_2= clear_Lead_Zeros(number_Array(x_2));
                  yy_2= clear_Lead_Zeros(number_Array(y_2));
                 Q=clear_Lead_Zeros(Q);
                Q_parse=[xx_2,yy_2,["/"],Q];

                if (y_2==0){ return xx_2}

               

               else {          /*
                        //alert(Q_parse)
              Q=Q_parse[Q_parse.length-1];

                //alert(xx_2+" "+yy_2+" "+Q)
                var Paul=decFrac(xx_2,yy_2,Q);
                 return Paul  }  */

                return (xx_2 .concat([".,"],yy_2,["/"],Q) )}   
            
             /* [" .,"] is a space and
               and a dot. The character is unknown and will not be rendered. This is majic. */
                      }           
          }


//FRACTION TO DECIMAL SUBROUTINE START
            
           
           

             function decimalFraction() {

              //alert(Q_parse)
              Q=Q_parse[Q_parse.length-1];

              //alert(xx_2+" "+yy_2+" "+Q)
              Uche=decFrac(xx_2,yy_2,Q);
                                       
              out_clear.push(" ")

              for(i=0; i<out_count ; i++){
              out_clear.push("***")}
               
               showAns(out_clear)
               showAns(Uche)
                                  }


         var H_dec=[];
            function decFrac(xx_2,yy_2,Q) {
       
           //alert(Q_parse) 
   /* Q_parse is a scooper
  or data bank . Its elements are available to this function.
         */   
           
 //alert("input received")
              
             
             H_dec=xx_2.concat(["."],H_dec);

            //alert("Pre calc H_dec is "+H_dec) 
            yy_2=number_Array(array_Number(yy_2)*10);
            //alert("Pre calc yy_2 is "+yy_2) 
            
            
                          
     for (iq=0; iq<10 ;iq++){
     

     //alert("Our first answer is " +H_dec)
     Q=Q_parse[Q_parse.length-1];
     //alert("Run I= "+iq)

    /* alert("Run bef 2, I= "+iq) 
    alert("xx_2 is "+xx_2) 
    alert("yy_2 is "+yy_2) 
    alert("Q is "+ Q)
    alert("Run bef 3, I= "+iq)  */
    //Converting arrays to Numbers
     Q_n=array_Number(Q);
     yy_n=array_Number(yy_2);
     xx_n=array_Number(xx_2);    
 
    /* alert("Run bef 4, I= "+iq)     
     alert("xx_n is "+xx_n) 
     alert("yy_n is "+yy_n) 
     alert("Q_n is "+Q_n)   */   
          
                        
          if ((yy_n<Q_n)&& (iq==0)){ 
                             
                   yy_2=number_Array(yy_n*10);
                   H_dec.push("0");
                   //alert("c0, H_dec is "+H_dec)
                   
                      }


          else if ((yy_n<Q_n)&& (iq>0)&& (yy_n!=0)){ 
                             
                   yy_2=number_Array(yy_n*10);
                   H_dec.push("0");
                   //alert("c1, H_dec is "+H_dec)
                   
                      }
          else if(yy_n==Q_n) { 
                 
                 //alert("c2, H_dec is "+H_dec)
                  H_dec.push(1)
                 break;
                           }            
          else if(yy_n >= Q_n) {
                 
                 Quo(yy_2,Q);
                  //alert("Quo(yy_2,Q) is "+ Quo(yy_2,Q))
                 //alert("Q_parse is " +Q_parse);
                  var a_q=Quo(yy_2,Q)[0];
                 H_dec.push(a_q)
                 
                 //alert("c3, H_dec is "+H_dec)
                 //retrieveing values from Q_parse
                xx_2=Q_parse[0];
                yy_2=Q_parse[1];
                Q=Q_parse[4];
                 yy_2=number_Array(array_Number(yy_2)*10);
                          }                        
          else {}
                      }

  
  //alert("Final answer is " +H_dec)
  return H_dec    }                    


//FRACTION TO DECIMAL SUBROUTINE STOP