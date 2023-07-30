
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const start=document.querySelector("button[data-start]");
const stop=document.querySelector("button[data-stop]");
let interval;
start.addEventListener('click', function(event){
    this.disabled=true;
interval=setInterval(()=>{
    document.body.style.backgroundColor=getRandomHexColor()
}, 1000);
});
stop.addEventListener('click', function(event){
    clearInterval(interval);
    start.disabled=false;
});