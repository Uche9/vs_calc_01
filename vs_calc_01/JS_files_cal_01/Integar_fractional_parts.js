
//     Integar and Fraction parts START
 //	Integar and Fractional Parts
 //	Integar Part
       
   

//Integar part

             function Num_int(A_place){   

              A_place_int=[];
             var H_d=Holder_dot(A_place);
              for (i=0; i<H_d[0];i++){
                     A_place_int.push(A_place[i])       
                   }
      return   A_place_int ;  
         }


 //Fractional  part
    function Num_frac(A_place){  

             var A_place_frac=[];
             var H_d=Holder_dot(A_place);
              for (i=H_d[0]+1; i<A_place.length;i++){
                     A_place_frac.push(A_place[i])       
                   }
      return   A_place_frac ;
          }
  

 //Holder Subroutine

    function Holder_dot(A_p){
          H_dot=[]
     for (i=0; i<A_p.length;i++){
           
                   if(A_p[i]=="."){
                        H_dot.push(i)
                        break;}
                  else if(i==A_p.length-1){
                        H_dot.push(A_p.length)}
                  else {}
                               }
        return H_dot } 
  
    

    function int_Norm_Index (A_q){
    var A_place_in=((Holder_dot(A_q))[0]) ;
                  return A_place_in }

    function frac_Norm_Index(A_r){
    var A_place_frac=A_r.length-int_Norm_Index (A_r) ;
                 return A_place_frac }


/* A_places signing the return of function, put extra bracket... the whole, 
inclue [a] part in bracket */
    
  
                        

//Intergar and Fraction parts END