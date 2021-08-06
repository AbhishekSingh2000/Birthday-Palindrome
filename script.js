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

        if(yyyy>=2000 && yyyy<=2113){
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

        else if(yyyy<2000){
            output.innerHTML="Your Birthday is not a palindrome dates but the nearest palindrome date to your birthday is 10-02-2001";
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
        else if(yyyy<2000){
            output.innerHTML="Your Birthday is not a palindrome dates but the nearest palindrome date to your birthday is 10-02-2001";
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

     if(forDated===backDated){
        output.innerHTML=`Congratulations! Your Birthday is a Palindrome Date i.e.,<br> ${date.split("-").reverse().join("-")}`;
     }

     else if(fDate.getFullYear<2000||bDate.getFullYear<2000){
        output.innerHTML="Your Birthday is not a palindrome dates but the nearest palindrome date to your birthday is 10-02-2001";  
     }

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
        output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dc}-${mc}-${yc}, <br> Ahhh! you missed it by  <br> ${Math.abs(forDated)} days`;
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
        output.innerHTML=`Sorry, Your Birthday is not a palindrome date but the nearest palindrome date to your birthday is: <br> ${dd}-${md}-${yd},<br> Ahhh! you missed it by <br> ${Math.abs(backDated)} days`;
    }
    
    
    }


}

buttoncheck.addEventListener("click", enterCheck);