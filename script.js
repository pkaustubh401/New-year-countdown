const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");
const year1 = document.getElementById("year-end1");
const year2 = document.getElementById("year-end2");
const year3 = document.getElementById("year-end3");


//gettting current year

const currentYear = new Date().getFullYear();


//get new year

const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);



function updateCountdown(){
    const currentTime= new Date();

    const diff = newYear - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;

    const m = Math.floor(diff / 1000 / 60) % 60;

    const s = Math.floor(diff / 1000) % 60;

    Days.innerHTML = d;
    Hours.innerHTML = h;
    Minutes.innerHTML = m;
    Seconds.innerHTML = s;

    Y=newYear.getFullYear().toString().slice(-1);
    //console.log(year);
    year1.innerHTML = Y ;
    year2.innerHTML = Y ;
    year3.innerHTML = Y ;

     
}

setInterval(updateCountdown, 1000);
