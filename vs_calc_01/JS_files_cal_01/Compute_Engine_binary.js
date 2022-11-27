// COMPUTE ENGINE START
      
      var int_norm_index;        
      var frac_norm_index;     
      var Uche;
      var A_1_n;
      var A_2_n ;
      var A_3_n;
      var A_4_n;
      var A_5_n;
      
      var A_1_i_l
      var A_2_i_l;
      var A_3_i_l;
      var A_4_i_l;
      var A_5_i_l;

      var A_1_f_l;
      var A_2_f_l;
      var A_3_f_l;
      var A_4_f_l;
      var A_5_f_l;

      
    
      
      C_dum =[];    //a simple assignment creats an arry with the var key word.
        Holder_plus=[];
        Holder_minus=[];
        Holder_div=[];
        Holder_multi=[];
        Holder_expo=[];



   function Compute(A){ 
     
     
     operatorLoc(A);
     mixedMode(A);
            
  function operatorLoc(A){


// Determine locations of BINARY OPERATOR and keep in OPERATOR POSITION Holder array STOP 
     
        var count_j=0;
         Holder=[];
        A_float=[];
        Holder_plus=[];
        Holder_minus=[];
        Holder_div=[];
        Holder_multi=[];
        Holder_expo=[];

     for (j=1; j<3 ;j++){   

     for (i=count_j+1; i<A.length; i++) {
   
            if (A[i]=="+"){
                var count_j=i;
                 
                  Holder_plus.push(count_j)
                  Holder.push(count_j)
                //alert(" plus operation" )
                  break}      
          
           else if (A[i]=="-"){
                var count_j=i;
                  
                  Holder_minus.push(count_j)
                  Holder.push(count_j)
                 //alert("minus operation" )
                  break}   

          
          else if (A[i]=="/"){
                var count_j=i;
                 
                  Holder_div.push(count_j)
                  Holder.push(count_j)
                //alert("division operation" )
                  break}   
         
          else if (A[i]=="*"){
                var count_j=i;
                 
                  Holder_multi.push(count_j)
                  Holder.push(count_j)
                //alert(" multiplication operation" )
                  break}   
          
          /* else if (A[i]=="**"){
                var count_j=i;
                 
                  Holder_expo.push(count_j)
                  Holder.push(count_j)
                //alert(" exponential operation" )
                  break}   */
         
         else {
     //alert("unknown operator. Check function operationLoc")
                                           }
            }    
     }
  
    
   
    //alert(Holder)
    
      
      Holder.push( A.length)
      Holder.unshift(0)
          
    return Holder}

// Determine locations of OPERATORS and keep in Holder array STOP       
 
//Operator location Subroutine STOP

//Converts all modes to floating point START          
     
          function mixedMode(A) {
//Run 1
       //alert("run one")
     var counter_1=0;
    
     for (i=Holder[0]; i<Holder[1]; i++){

        var  a_1= A[i];
        A_float.push(a_1)
        counter_1 +=1;
        //alert(A_float)  

           if (A[i]=="."){
                      //alert("floating point number")
                      for (i=counter_1; i<Holder[1]; i++){
                       a_1= A[i];
                       A_float.push(a_1)
                       //alert(A_float)
                         }
                      break;}

          else if (i== (Holder[1]-1)){

              
              //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
       
     //alert(A_float)   

//Run 2
      //alert("run two")
       var counter_2=0;

     for (i=Holder[1]; i<Holder[2]; i++){
        counter_2 +=1;
        var  a_1= A[i];
        A_float.push(a_1)
       //alert(A_float)  

           if (A[i]=="."){
                     //alert("floating point number")
                      for (i=counter_2+Holder[1]; i<Holder[2]; i++){
                      //alert(counter_2)
                       a_1= A[i];
                       A_float.push(a_1)
                      //alert(A_float)
                         }
                      break;}

          else if (i==(Holder[2]-1)){

              
             //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
       
    //alert(A_float)

//Run 3
     //alert("run 3")
       var counter_3=0;

     for (i=Holder[2]; i<Holder[3]; i++){
        counter_3 +=1;
        var  a_1= A[i];
        A_float.push(a_1)
       //alert(A_float)  

           if (A[i]=="."){
                     //alert("floating point number")
                      for (i=counter_3+Holder[2]; i<Holder[3]; i++){
                       a_1= A[i];
                       A_float.push(a_1)
                      //alert(A_float)
                         }
                      break;}

          else if (i==(Holder[3]-1)){
             
              
             //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
       
    //alert(A_float)


   //Run 4
     //alert("run 4")
       var counter_4=0;

     for (i=Holder[3]; i<Holder[4]; i++){
        counter_4 +=1;
        var  a_1= A[i];
        A_float.push(a_1)
       //alert(A_float)  

           if (A[i]=="."){
                     //alert("floating point number")
                      for (i=counter_4+Holder[3]; i<Holder[4]; i++){
                       a_1= A[i];
                       A_float.push(a_1)
                      //alert(A_float)
                         }
                      break;}

          else if (i==(Holder[4]-1)){
             
              
             //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
       
    //alert(A_float)



   //Run 5
     //alert("run 5")
       var counter_5=0;

     for (i=Holder[4]; i<A.length; i++){
        counter_5 +=1;
        var  a_1= A[i];
        A_float.push(a_1)
       //alert(A_float)  

           if (A[i]=="."){
                     //alert("floating point number")
                      for (i=counter_5+Holder[3]; i<A.length; i++){
                       a_1= A[i];
                       A_float.push(a_1)
                      //alert(A_float)
                         }
                      break;}

          else if (i==(Holder[5]-1)){
             
              
             //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
        //alert(A_float)
//Run 6
  
     //alert("run 6")
       var counter_6=0;

     for (i=Holder[5]; i<Holder[6]; i++){
        counter_6 +=1;
        var  a_1= A[i];
        A_float.push(a_1)
       //alert(A_float)  

           if (A[i]=="."){
                     //alert("floating point number")
                      for (i=counter_6+Holder[4]; i<A.length; i++){
                       a_1= A[i];
                       A_float.push(a_1)
                      //alert(A_float)
                         }
                      break;}

          else if (i==(Holder[6]-1)){
             
              
             //alert ("integar");
              A_float.push(".");
              }
          else{}
       } 
       
   // alert (A_float)
   //alert( "modified input " +A_float)

return A_float 

}
//Converts all modes to floating point STOP


//  Digits xtraction
/* Operator location function 
 function name: operatorLoc(A)
 Accepts: Input array
Returns: Holder array */

/* Mode convertor 
 function name:  mixedMode(A)
 Accepts operator location
  returns A_float array */

//Entry extractor...
/* We need need Holder generated from A_float. 
With that we can read  values from A_float   */
 
 //alert("New holder"+ operatorLoc(A_float).length)   //Good
      
   var Holder_new=operatorLoc(A_float)  //Generates new holder
   var A_Holder_old=operatorLoc(A)      //Generates old holder
   var A_float_new=mixedMode(A)       //Generates old float
    
   //alert(Holder_new)
   //alert(A_Holder_old)
   //alert(A_float_new)                  

   
 //Extractor(Holder_new,A_float_new)

 function Extractor(New_Holder_Array,Floated_data_array){

     
     var A_1=[]
     var  A_2=[]
     var  A_3=[]
     var  A_4=[]
     var  A_5=[]
     var  A_6=[]   
     
    for (i=New_Holder_Array[0]; i<New_Holder_Array[1] ;i++){         
           var a_extr_1=Floated_data_array[i]
           A_1.push(a_extr_1)
          //alert(A_1)
             }

        //alert("First number is"+A_1)   

     for (i=New_Holder_Array[1]+1; i<New_Holder_Array[2] ;i++){         
           var a_extr_2=Floated_data_array[i]
           A_2.push(a_extr_2)
           //alert(A_2)
             }                                  
        //alert("Second number "+A_2) 

    for (i=New_Holder_Array[2]+1; i<New_Holder_Array[3] ;i++){         
           var a_extr_3=Floated_data_array[i]
           A_3.push(a_extr_3)
           //alert(A_3)
             }                                  
        //alert("Third number "+A_3)    

     for (i=New_Holder_Array[3]+1; i<New_Holder_Array[4] ;i++){         
           var a_extr_4=Floated_data_array[i]
           A_4.push(a_extr_4)
           //alert(A_4)
             }                                  
        //alert("Fourth number "+A_4)
     
     for (i=New_Holder_Array[4]+1; i<New_Holder_Array[5] ;i++){         
           var a_extr_5=Floated_data_array[i]
           A_5.push( a_extr_5)
             //alert(A_5)
             }                                  
        //alert("Fifth number "+A_5)  

     for (i=New_Holder_Array[5]+1; i<New_Holder_Array[6] ;i++){         
           var a_extr_6=Floated_data_array[i]
           //A_6.push(a_extr_6)
             }                                  
        //alert("Sixth Number "+A_6)
  var Input_for_norm=[];
  Input_for_norm.push (A_1,A_2,A_3,A_4,A_5,A_6) 
  //alert(Input_for_norm) 
    return Input_for_norm  } 
 
 

/* Splitting & Normalization:
 This conforms floated data to a form suitable for operation 
All numbers will be split into into whole and fraction parts */

   var data_for_norm = Extractor(Holder_new,A_float_new)
  //alert(spliter(data_for_norm))
    
 function spliter(data_for_norm){
  var A_1_w=[]
  var A_2_w=[]
  var A_3_w=[]
  var A_4_w=[]
  var A_5_w=[]
  var A_6_w=[]

   var A_1_f=[]
   var A_2_f=[]
   var A_3_f=[]
   var A_4_f=[]
   var A_5_f=[]
   var A_6_f=[]
 var for_sort_int=[];
  var for_sort_frac=[];

//First number split START

   for(i=0; i< data_for_norm[0].length; i++){
      
      var  a_1_w_n =data_for_norm[0]
      var  a_1_w= a_1_w_n [i]
           //alert(a_1_w)
           A_1_w.push(a_1_w) 
          //alert(A_1_w)
           if (a_1_w=="."){
            A_1_w.pop()
           //alert(A_1_w)
               for (i=A_1_w.length+1 ; i< data_for_norm[0].length; i++){
                     //alert("hi")
                    var  a_1_f_n =data_for_norm[0]
                    var  a_1_f= a_1_f_n [i]
                    A_1_f.push(a_1_f)
                   //alert(A_1_f) 
                            }                  

              }
            }
     //alert("int" +A_1_w)
     //alert(" frac" +A_1_f) 
      for_sort_int.push(A_1_w)
      for_sort_frac.push(A_1_f)


//First number split END

//Second number split START

   for(i=0; i< data_for_norm[1].length; i++){
      
      var  a_2_w_n =data_for_norm[1]
      var  a_2_w= a_2_w_n [i]
           //alert(a_2_w)
           A_2_w.push(a_2_w) 
          //alert(A_2_w)
           if (a_2_w=="."){
            A_2_w.pop()
           //alert(A_2_w)
               for (i=A_2_w.length+1 ; i< data_for_norm[1].length; i++){
                     //alert("hi")
                    var  a_2_f_n =data_for_norm[1]
                    var  a_2_f= a_2_f_n [i]
                    A_2_f.push(a_2_f)
                   //alert(A_2_f) 
                            }                  

              }
            }
     //alert("int" +A_2_w)
     //alert(" frac" +A_2_f)    
      for_sort_int.push(A_2_w)
      for_sort_frac.push(A_2_f)
//Second number split END

//Third number split START

   for(i=0; i< data_for_norm[2].length; i++){
      
      var  a_3_w_n =data_for_norm[2]
      var  a_3_w= a_3_w_n [i]
           //alert(a_3_w)
           A_3_w.push(a_3_w) 
          //alert(A_3_w)
           if (a_3_w=="."){
            A_3_w.pop()
           //alert(A_3_w)
               for (i=A_3_w.length+1 ; i< data_for_norm[2].length; i++){
                     //alert("hi")
                    var  a_3_f_n =data_for_norm[2]
                    var  a_3_f= a_3_f_n [i]
                    A_3_f.push(a_3_f)
                   //alert(A_3_f) 
                            }                  

              }
            }
     //alert("int" +A_3_w)
     //alert(" frac" +A_3_f)    
      for_sort_int.push(A_3_w)
      for_sort_frac.push(A_3_f)
//Third number split END

//Fourth number split START

   for(i=0; i< data_for_norm[3].length; i++){
      
      var  a_4_w_n =data_for_norm[3]
      var  a_4_w= a_4_w_n [i]
           //alert(a_4_w)
           A_4_w.push(a_4_w) 
          //alert(A_4_w)
           if (a_4_w=="."){
            A_4_w.pop()
           //alert(A_4_w)
               for (i=A_4_w.length+1 ; i< data_for_norm[3].length; i++){
                     //alert("hi")
                    var  a_4_f_n =data_for_norm[3]
                    var  a_4_f= a_4_f_n [i]
                    A_4_f.push(a_4_f)
                   //alert(A_4_f) 
                            }                  

              }
            }
     //alert("int" +A_4_w)
     //alert(" frac" +A_4_f)
      for_sort_int.push(A_4_w)
      for_sort_frac.push(A_4_f)    

//Fourth number split END

//Fifth number split START

   for(i=0; i< data_for_norm[4].length; i++){
      
      var  a_5_w_n =data_for_norm[4]
      var  a_5_w= a_5_w_n [i]
           //alert(a_5_w)
           A_5_w.push(a_5_w) 
           //alert(A_5_w)
           if (a_5_w=="."){
            A_5_w.pop()
            //alert(A_5_w)
               for (i=A_5_w.length+1 ; i< data_for_norm[4].length; i++){
                      
                    var  a_5_f_n =data_for_norm[4]
                    var  a_5_f= a_5_f_n [i]
                    A_5_f.push(a_5_f)
                   //alert(A_5_f) 
                            }                  

              }
            }
      //alert("int" +A_5_w)
      //alert(" frac" +A_5_f) 
      for_sort_int.push(A_5_w)
      for_sort_frac.push(A_5_f)   

//Fifth number split END

//Sixth number split START

   for(i=0; i< data_for_norm[5].length; i++){
      
      var  a_6_w_n =data_for_norm[5]
      var  a_6_w= a_6_w_n [i]
           //alert(a_6_w)
           A_6_w.push(a_6_w) 
           //alert(A_6_w)
           if (a_6_w=="."){
            A_6_w.pop()
            //alert(A_6_w)
               for (i=A_6_w.length+1 ; i< data_for_norm[5].length; i++){
                      
                    var  a_6_f_n =data_for_norm[5]
                    var  a_6_f= a_6_f_n [i]
                    A_6_f.push(a_6_f)
                    //alert(A_6_f) 
                            }                  

              }
            }
     //alert("int" +A_6_w)
     //alert(" frac" +A_6_f)
       for_sort_int.push(A_6_w) 
      for_sort_frac.push(A_6_f)  
//Sixth number split END

 return [for_sort_int,for_sort_frac] }


/* SORTING
It receives input from the splitter function.
It it generates norm index of int and frac required for normalization */           

    function sort(call_spliter){
   var int_for_sort=call_spliter[0]
   var frac_for_sort=call_spliter[1]
        //alert("see" +int_for_sort)
        //alert("see" +frac_for_sort)
//Read integars into one array and frac into another   

      var int_for_sort_length=[int_for_sort[0].length,int_for_sort[1].length,int_for_sort[2].length,int_for_sort[3].length,int_for_sort[4].length,int_for_sort[5].length]       
      var frac_for_sort_length=[frac_for_sort[0].length,frac_for_sort[1].length,frac_for_sort[2].length,frac_for_sort[3].length,frac_for_sort[4].length,frac_for_sort[5].length] 
               

     //alert(int_for_sort_length)
     //alert(frac_for_sort_length)
 
  //alert(sortDesc(int_for_sort_length))   //ok
  //alert(sortDesc(frac_for_sort_length))  //ok
   int_norm_index=sortDesc(int_for_sort_length)[0]
  frac_norm_index=sortDesc(frac_for_sort_length)[0] 

  return [int_norm_index,frac_norm_index] ;  
 
              

  }
           
           spliter(data_for_norm)         //ok. returns int array and frac array
           sort(spliter(data_for_norm))   //ok . produces int norm index and frac num index.


//



/* NORMALIZATION
Depends on norm index  */
     int_norm_index=sort(spliter(data_for_norm))[0]
     frac_norm_index=sort(spliter(data_for_norm))[1]
     //alert(" int norm index is " +int_norm_index)
    //alert(frac_norm_index)

   var int_for_norm=spliter(data_for_norm)[0]
   var frac_for_norm=spliter(data_for_norm)[1] 
   //alert("first integar for norm "+ int_for_norm[0])
   //alert(frac_for_norm)

//For Integars

    A_1_i_l=int_for_norm[0].length;
     A_2_i_l=int_for_norm[1].length;
    A_3_i_l=int_for_norm[2].length;
    A_4_i_l=int_for_norm[3].length;
    A_5_i_l=int_for_norm[4].length;



   for (i=0; i< (int_norm_index-A_1_i_l) ;i++){
           
         int_for_norm[0].unshift(0)}
         var A_1_norm_int= int_for_norm[0]
         
   for (i=0; i< (int_norm_index-A_2_i_l) ;i++){
         int_for_norm[1].unshift(0)}
         var A_2_norm_int= int_for_norm[1]

  for (i=0; i< (int_norm_index-A_3_i_l) ;i++){
         int_for_norm[2].unshift(0)}
         var A_3_norm_int= int_for_norm[2]

  for (i=0; i< (int_norm_index-A_4_i_l) ;i++){
         int_for_norm[3].unshift(0)}
         var A_4_norm_int= int_for_norm[3]

  for (i=0; i< (int_norm_index-A_5_i_l) ;i++){
         int_for_norm[4].unshift(0)}
         var A_5_norm_int= int_for_norm[4]

     /*alert(A_1_norm_int)
      alert(A_2_norm_int)
      alert(A_3_norm_int)
      alert(A_4_norm_int) */


//For Frac part
     A_1_f_l=frac_for_norm[0].length;
    A_2_f_l=frac_for_norm[1].length;
    A_3_f_l=frac_for_norm[2].length;
    A_4_f_l=frac_for_norm[3].length;
    A_5_f_l=frac_for_norm[4].length;

   


   
   for (i=0; i< (frac_norm_index-A_1_f_l) ;i++){
           
         frac_for_norm[0].push(0)}
         
         var A_1_norm_frac= frac_for_norm[0]
         //alert(A_1_norm_frac)
          
    for (i=0; i< (frac_norm_index-A_2_f_l) ;i++){
         frac_for_norm[1].push(0)}
         var A_2_norm_frac= frac_for_norm[1]
         //alert(A_2_norm_frac)
         //alert(frac_norm_index)         


  for (i=0; i< (frac_norm_index-A_3_f_l) ;i++){
         frac_for_norm[2].push(0)}
         var A_3_norm_frac= frac_for_norm[2]

  for (i=0; i< (frac_norm_index-A_4_f_l) ;i++){
         frac_for_norm[3].push(0)}
         var A_4_norm_frac= frac_for_norm[3]

  for (i=0; i< (frac_norm_index-A_5_f_l) ;i++){
         frac_for_norm[4].push(0)}
         var A_5_norm_frac= frac_for_norm[4]

     /*  alert(A_1_norm_frac)
      alert(A_2_norm_frac)
      alert(A_3_norm_frac)
      alert(A_4_norm_frac)
      alert(A_5_norm_frac)   */  

  //Normalized input without decimals

     A_1_n= A_1_norm_int .concat (A_1_norm_frac)
     A_2_n= A_2_norm_int .concat (A_2_norm_frac)
     A_3_n= A_3_norm_int .concat (A_3_norm_frac)
     A_4_n= A_4_norm_int .concat (A_4_norm_frac)
     A_5_n= A_5_norm_int .concat (A_5_norm_frac)

   /* alert(A_1_n)
      alert(A_2_n)
      alert(A_3_n)
      alert(A_4_n)
      alert(A_5_n) */

 var Y_bin= [A_1_n,A_1_n];
 var Y=A_1_n.concat(A_2_n,A_3_n,A_4_n,A_5_n)

// Operator Selector
    
   
    opSel(A_1_n,A_2_n)
    

     function opSel(P,Q){     
  
      if (Holder_expo.length !=0){
            
            Uche =Expo(P,Q);} 

     else if (Holder_multi.length!=0){
     
            Uche =Prod(P,Q);}
     else if (Holder_div.length!=0){
     
            Uche =Quo(P,Q);}

     else if (Holder_plus.length!=0){
            //alert("sweet addition")
            Uche =Sum(P,Q);}

    else if (Holder_minus.length!=0){
            //alert("sweet subtraction")
            Uche =Diff(P,Q);}

    else{ alert ("unknown Operation")}
        }   
  

/* Y holds the normed input. The Sum function receives Y and performs Sum. 
This returns a value assigned to Uche.
 Uche send result of computation to Ans calling function*/
      

/* Above line Turns on the normed input operator, receives input argument of normed array,
 computes sum and modified sum,and passes vale to global variable Uche. Uche is accessible 
Global variable Uche is utilized by Ans function and passess value to point less container */
     
return Uche; }