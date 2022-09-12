// /* ============== To get current date =============*/
let date = document.getElementById("date");
let newDate = new Date();
let year = newDate.getFullYear();
let month = newDate.getMonth();

// /* ============== To get current time =============*/
let time = document.getElementById("time");

// creating the date object and getting the date and time
let todaySDate = newDate.getDate();
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
date.innerHTML = " " + todaySDate + "/ " + month + "/ " + year;
time.innerHTML = hours + ": " + minutes + ": " + seconds;
