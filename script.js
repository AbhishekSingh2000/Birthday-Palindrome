var input1 = document.querySelector("#inArea1");
var buttoncheck = document.querySelector("#btnc");
var output = document.querySelector(".otpt");
var gif = document.querySelector(".giffy");


/*function callGif(){
    if(gif.style.display="none"){
        gif.style.display="block";
    }
}*/


function enterCheck(){

    gif.style.display="block";

    function callGif(){
        gif.style.display="none";  
    }
    setTimeout(callGif, 2500);

    output.style.display="none";

    function calloutput(){
        output.style.display="block";  
    }
    setTimeout(calloutput, 2500);


    var date= input1.value;
    console.log(date);

    if(date==""||date=="0"){
        output.innerText="Please enter an appropriate Date";
    }
    else{
        var fDate=new Date(date);
        var bDate=new Date(date);

        nearestPDateforward(fDate);
        nearestPDatebackward(bDate);
    }

        function nearestPDateforward(fDate){
        var dd= fDate.getDate();
        var mm= fDate.getMonth()+1;
        var yyyy= fDate.getFullYear();

        console.log(dd,mm,yyyy);

        if (dd<10){
            dd="0"+dd;
        }
    
        if(mm<10){
            mm="0"+mm;
        }

        if(yyyy>=1900 && yyyy<=2113){
            dd=yyyy.toString().substr(-2).split("").reverse().join("");
            mm=yyyy.toString().split("").reverse().join("").substr(-2);
            
            if(dd>31||dd==0){
                yyyy=yyyy+1;
                fDate.setFullYear(yyyy);
                nearestPDateforward(fDate);  
            }
            else if((dd==31||dd==30) && mm==2){
                yyyy=yyyy+1;
                cDate.setFullYear(yyyy);
                nearestPDateforward(fDate);
            }
            else{
                fDate.setFullYear(yyyy);
                fDate.setMonth(mm-1);
                fDate.setDate(dd);
            }
        }
      }


      function nearestPDatebackward(bDate){
        var dd= bDate.getDate();
        var mm= bDate.getMonth()+1;
        var yyyy= bDate.getFullYear();

        console.log(dd,mm,yyyy);

        if (dd<10){
            dd="0"+dd;
        }
    
        if(mm<10){
            mm="0"+mm;
        }

        if(yyyy>=1900 && yyyy<=2113){
            dd=yyyy.toString().substr(-2).split("").reverse().join("");
            mm=yyyy.toString().split("").reverse().join("").substr(-2);
            
            if(dd>31||dd==0){
                yyyy=yyyy-1;
                bDate.setFullYear(yyyy);
                nearestPDatebackward(bDate);  
            }
            else if((dd==31||dd==30) && mm==2){
                yyyy=yyyy-1;
                bDate.setFullYear(yyyy);
                nearestPDatebackward(bDate);
            }
            else{
                bDate.setFullYear(yyyy);
                bDate.setMonth(mm-1);
                bDate.setDate(dd);
            }
        }
      }

      console.log("final fdate", fDate);
      console.log("final bdate", bDate);

      absDate(fDate,bDate);

    function absDate(fDate,bDate){
    //var date=input1.value;
     console.log(fDate.getTime()); 
     console.log(bDate.getTime()); 
     var forDatems= new Date(fDate).getTime() - new Date(date).getTime();
     var forDated= forDatems/86400000;
     var backDatems= new Date(date).getTime() - new Date(bDate).getTime();
     var backDated= backDatems/86400000;

     //var yy = new Date(date).getFullYear;
     var dateonlyfor= (new Date("january 10, 2001 00:00:00:000").getTime()-new Date(date).getTime())/86400000;

     if(forDated==backDated){
        output.innerHTML=`Congratulations! Your Birthday is a Palindrome Date i.e.,<br> ${date.split("-").reverse().join("-")}`;
     }

     /*else if(yy<2000){
         output.innerHTML=`Sorry your birthday is not a palindrome date but the nearest palindrome date to your birthday is 10-02-2001 and you missed it by ${dateonlyfor}`;
     }*/

     else if(forDated<backDated){
        var dc=fDate.getDate();
        var mc=fDate.getMonth()+1;
        var yc=fDate.getFullYear();
        if (dc<10){
           dc="0"+dc;
       }
   
       if(mc<10){
           mc="0"+mc;
       }
       if(yc<2000){
        output.innerHTML=`Sorry your birthday is not a palindrome date but the nearest palindrome date to your birthday is 10-02-2001 and you missed it by ${(Math.abs(dateonlyfor)).toFixed(0)}`;  
       }
        else{output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dc}-${mc}-${yc}, <br> Ahhh! you missed it by  <br> ${Math.abs(forDated)} days`;}
    }

    else if(backDated<forDated){
        var dd=bDate.getDate();
        var md=bDate.getMonth()+1;
        var yd=bDate.getFullYear();
        if (dd<10){
           dd="0"+dd;
       }
   
       if(md<10){
           md="0"+md;
       }

       if(yd<2000){
        output.innerHTML=`Sorry your birthday is not a palindrome date but the nearest palindrome date to your birthday is 10-02-2001 and you missed it by ${(Math.abs(dateonlyfor)).toFixed(0)}`;  
       }
        else{output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dd}-${md}-${yd},<br> Ahhh! you missed it by <br> ${Math.abs(backDated)} days`;}
    }
    
    }


}




buttoncheck.addEventListener("click", enterCheck);























/*



function enterCheck(){
    var bDate=input1.value;

    if(bDate==""||bDate=="0"){
        output.innerText="Please enter an appropriate Date";
    }
    else{
        var cDate=new Date(bDate);
        var dDate=new Date(bDate);
        nearestPbDate(cDate,dDate);
    }

  function nearestPbDate(cDate,dDate){
    nearestPbDateforward(cDate);
    nearestPbDatebackward(dDate);
    }
    
    function nearestPbDateforward(cDate){
        var yyyy=cDate.getFullYear();
        var mm=cDate.getMonth()+1;
        var dd=cDate.getDate();
        if (dd<10){
            dd="0"+dd;
        }
    
        if(mm<10){
            mm="0"+mm;
        }

        if(yyyy>=2000||yyyy<=2113){
        dd=yyyy.toString().substr(-2).split("").reverse().join("");
        mm=yyyy.toString().split("").reverse().join("").substr(-2);
        if(dd>31||dd==00){
            yyyy=yyyy+1;
            cDate.setFullYear(yyyy);
            nearestPbDateforward(cDate);
        }
        else if((dd==31||dd==30)&&(mm==02)){
            yyyy=yyyy+1;
            cDate.setFullYear(yyyy);
            nearestPbDateforward(cDate);
        }
        else{
        cDate.setFullYear(yyyy);
        cDate.setMonth(mm-1);
        cDate.setDate(dd);
        }
    }
        console.log("for ",cDate);
  } 



function nearestPbDatebackward(dDate){
    var yyyy=dDate.getFullYear();
    var mm=dDate.getMonth()+1;
    var dd=dDate.getDate();
    if (dd<10){
        dd="0"+dd;
    }

    if(mm<10){
        mm="0"+mm;
    }

    if(yyyy<=2000){
       output.innerHTML="Your century doesn't consist any Palindrome dates so the nearest palindrome dates to your birthday are in 21St century only.";
    }     
    else if(yyyy>=2001||yyyy<=2113){
    dd=yyyy.toString().substr(-2).split("").reverse().join("");
    mm=yyyy.toString().split("").reverse().join("").substr(-2);
    if(dd>31||dd==00){
        yyyy=yyyy-1;
        dDate.setFullYear(yyyy);
        nearestPbDatebackward(dDate);
    }
    else if((dd==31||dd==30)&&(mm==02)){
        yyyy=yyyy-1;
        dDate.setFullYear(yyyy);
        nearestPbDatebackward(dDate);
    }
    else{
    dDate.setFullYear(yyyy);
    dDate.setMonth(mm-1);
    dDate.setDate(dd);
    }
  }
    dDate.setMonth(mm-1);
    console.log("back",dDate);
 }

    console.log("final forward date is:", cDate);
    console.log("final backward date is:", dDate);


    absDate(cDate,dDate);
    function absDate(cDate,dDate){
    //var date=input1.value;
     console.log(cDate.getTime()); 
     console.log(dDate.getTime()); 
     var forDatems= new Date(cDate).getTime() - new Date(bDate).getTime();
     var forDated= forDatems/86400000;
     var backDatems= new Date(bDate).getTime() - new Date(dDate).getTime();
     var backDated= backDatems/86400000;

     console.log(forDatems,"   ", forDated);
     console.log(backDatems,"   ", backDated);

         var db=cDate.getDate();
         var mb=cDate.getMonth()+1;
         var yb=cDate.getFullYear();
         
         if (db<10){
            db="0"+db;
        }
    
        if(mb<10){
            mb="0"+mb;
        } 
        output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is <br> ${db}-${mb}-${yb},<br> Ahhh! you missed it by ${Math.abs(forDated)} days`;
     }

     if(forDated===backDated){
        output.innerHTML=`Congratulations! Your Birthday is a Palindrome Date i.e.,<br> ${bDate.split("-").reverse().join("-")}`;
     }
     else if(forDated<backDated){
         var dc=cDate.getDate();
         var mc=cDate.getMonth()+1;
         var yc=cDate.getFullYear();
         if (dc<10){
            dc="0"+dc;
        }
    
        if(mc<10){
            mc="0"+mc;
        }
         output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dc}-${mc}-${yc}, <br> Ahhh! you missed it by  <br> ${Math.abs(forDated)} days`;
     }


    else if(backDated<forDated){
        var dd=dDate.getDate();
        var md=dDate.getMonth()+1;
        var yd=dDate.getFullYear();
        if (dd<10){
           dd="0"+dd;
       }
   
       if(md<10){
           md="0"+md;
       }
        output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dd}-${md}-${yd},<br> Ahhh! you missed it by <br> ${Math.abs(backDated)} days`;
    }
     
}

*/