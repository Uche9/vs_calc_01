//DISPLAY ANSWER START                 
/* Screen print Function for calculation results
  it receives and renders numbers on the screen */                      
      //Global Variables    
         var  out_count=0;
         out_clear=[];

         function showAns(A_show){ 
               
           var outputContainer=A_show
           //alert(outputContainer)
          
// Show equals
          
          colr=Acolr;
          p=18, q=0;
          Equals()
          shiftCusor()
          setTimeout( shiftCusor,50)
          setTimeout( shiftCusor,100)
         for (i=0; i<outputContainer.length;i++){
            
            
             p=18,  q=4+4*i;
           
            
             if (outputContainer[i]==0){
                 out_count+=1;
                colr=Acolr;
                 Zero()}
            
             else if (outputContainer[i]==1){
                 out_count+=1;
                colr=Acolr;
                  One()}
            else if (outputContainer[i]==2){
                  out_count+=1;
                colr=Acolr; 
                   Two();}
            else if (outputContainer[i]==3){
                  out_count+=1;
                colr=Acolr;
                   Three();}
            else if (outputContainer[i]==4){
                  out_count+=1;
                colr=Acolr;
                  Four();}
            else if (outputContainer[i]==5){
                 out_count+=1;
                colr=Acolr;
                   Five();}
            else if (outputContainer[i]==6){
                  out_count+=1;
                colr=Acolr;
                      Six();}
            else if (outputContainer[i]==7){
                   out_count+=1;
                colr=Acolr;
                    Seven();}
            else if (outputContainer[i]==8){
                  out_count+=1;
                colr=Acolr;
                  Eight();}
            else if (outputContainer[i]==9){
                  out_count+=1;
                colr=Acolr;
                  Nine();}
           
            else if (outputContainer[i]=="+"){
                  out_count+=1;
                colr=Acolr;
                  Plus();}
            else if (outputContainer[i]=="-"){
                     out_count+=1;
                    colr=Acolr;
                   Minus();}

            else if (outputContainer[i]=="/"){
                     out_count+=1;
                     colr=Acolr;
                   Divide();}

             else if (outputContainer[i]=="."){
                     out_count+=1;
                     colr=Acolr;
                   Dot();}
             else if (outputContainer[i]==" "){
                     out_count+=1;
                     colr=Acolr;
                   spaceBar();}

            else if (outputContainer[i]=="***"){
                     out_count+=1;
                     colr=Icolr;
                   Delete();}

             else {out_count+=1;
                     }
             }
          }

//DISPLAY ANSWER STOP 