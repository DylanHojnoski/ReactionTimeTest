var date;
var startTime;
var endTime;
var start = false;
var bestTime;

function onStart()
{
    document.getElementById("start").style.backgroundColor ="#3b5169"
    var time = (Math.random()* 3) +1; 
    var remainingTime = setInterval(function() {

        time--;
        if (time <= 0)
        {
            colorChange();
            clearInterval(remainingTime);
        }
    },1000);
}

function colorChange() {
    start = true;
    document.getElementById("circle").style.backgroundColor = "#f02727";
    date = new Date();
    startTime = date.getTime();
}

function stop() {
    if(start == true)
    {
            date = new Date();
            endTime = date.getTime();
            var reactionTime = endTime - startTime;
            document.getElementById("reactionTime").innerHTML = "Your reaction time is " + reactionTime + " milliseconds";
            document.getElementById("result").style.display = "block";
            if(reactionTime < bestTime)
            {
                bestTime = reactionTime;
                document.getElementById("bestTime").innerHTML = "Best time is " + bestTime + " milliseconds";
            }
            else if(bestTime == null)
            {
                bestTime = reactionTime;
                document.getElementById("bestTime").innerHTML = "Best time is " + bestTime + " milliseconds";
            }
            start = false;
    }
    else
    {
        document.getElementById("reactionTime").innerHTML = "You clicked too fast";
        document.getElementById("result").style.display = "block";
        start = false;
    }
}

function tryAgain()
{
    document.getElementById("result").style.display = "none";
    document.getElementById("circle").style.backgroundColor = "#27f063";
    document.getElementById("start").style.backgroundColor ="#5486be"
}