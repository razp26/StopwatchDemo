// Global variables
var isRunning = false;
var currentTime = 0;
var interval;

// Function calls
init();

// Function definitions
function changeState()
{
    isRunning = !isRunning;
    if (isRunning)
    {
        interval = setInterval(function(){
            currentTime = currentTime + 0.01;
            document.getElementById("counter").innerHTML = currentTime.toFixed(2);
        },10);
    }
    else
    {
        clearInterval(interval);
    }
}

function resetTimer()
{
    clearInterval(interval);
    currentTime = 0;
    isRunning = false;
    document.getElementById("counter").innerHTML = "";
    document.getElementById("pastList").innerHTML = "";
}

function recordTimer()
{
    var list = document.getElementById("pastList");
    list.innerHTML = list.innerHTML + "<li>" + currentTime.toFixed(2) + "</li>";
}

function init()
{
    document.getElementById("startBtn").addEventListener("click", changeState);
    document.getElementById("resetBtn").addEventListener("click", resetTimer);
    document.getElementById("recordBtn").addEventListener("click", recordTimer);
    document.addEventListener("keypress", function(event){
        if (event.key == "s") {changeState();}
        if (event.key == "t") {resetTimer();}
        if (event.key == "r") {recordTimer();}
    });
}