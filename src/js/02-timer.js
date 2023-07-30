import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const start=document.querySelector("button[data-start]");
const days=document.querySelector("span[data-days]");
const hours=document.querySelector("span[data-hours]");
const minutes=document.querySelector("span[data-minutes]");
const spanSeconds=document.querySelector("span[data-seconds]");
const datetimePicker=document.querySelector("input#datetime-picker");
let currentTime = (new Date).getTime();
const dateProcess=function(seconds, currentTime){
    if (seconds - currentTime < 0) {
        return false;
    }
    const _convertMs = convertMs(seconds - currentTime);
    days.textContent = addLeadingZero(_convertMs.days);
    hours.textContent = addLeadingZero(_convertMs.hours);
    minutes.textContent = addLeadingZero(_convertMs.minutes);
    spanSeconds.textContent = addLeadingZero(_convertMs.seconds);
}

start.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
        const seconds = selectedDates[0].getTime();

        if (seconds < currentTime) {
            // alert('Please choose a date in the future');
            Notiflix.Notify.warning('Please choose a date in the future');

            start.disabled = true;
            return false;
        }
        else {
            start.disabled = false;
        }
        dateProcess(seconds, currentTime);
    },
};
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
 function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
 }

 flatpickr(datetimePicker, options);


start.addEventListener('click', ()=>{
    setInterval(()=>{
        currentTime = (new Date).getTime();
        const date=new Date(datetimePicker.value + ':00');
        const seconds= date.getTime();
        // console.log(currentTime, seconds);
        dateProcess(seconds, currentTime);
    }, 1000);
})