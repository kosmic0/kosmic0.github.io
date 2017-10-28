const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//let hrPos =40; //Math.floor((Math.random() * 360) + 1);  
//let minPos =  150;
//let secPos =  40;

//function updateTime(){
kos = new Date();

zsec = kos.getSeconds();
zmin = kos.getMinutes();
zhour = kos.getHours();


let secPos = zsec * 6;  
let minPos = (zmin * 6) + (secPos/60) ; 
let hrPos = (zhour * 30) + (minPos/12) ; 



    
    

HOURHAND.style.transform = "rotate("  + hrPos + "deg)" ;
MINUTEHAND.style.transform = "rotate("  + minPos + "deg)" ;
SECONDHAND.style.transform = "rotate("  + secPos + "deg)" ;

}


setInterval(updateTime , 1000);

//===========================================================
//to test by putting my numbers
//let koshr =  3;
//let kosmin = 60;
//let kosec = 0;
//
//
//
//let kosecpos = kosec * 6 ;
//let kosminpos = (kosmin * 6) + (kosecpos/60) ; 
//let koshrpos = (koshr * 30) + (kosminpos/12) ; 
//
//HOURHAND.style.transform = "rotate("  + koshrpos + "deg)" ;
//MINUTEHAND.style.transform = "rotate("  + kosminpos + "deg)" ;
//SECONDHAND.style.transform = "rotate("  + kosecpos + "deg)" ;


//==============================================================
