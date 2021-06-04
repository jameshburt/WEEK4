function countdownTimerRun() {
    var currTime = 10;
    //timer for 10 sec left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}

function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2;

    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;

    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}

function funWithLoops() {
    for (var i = 0; i <= 50; i = i + 5) {
        document.write("The count is " + i + "<br>");
    }
}

function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Reading Data...";
}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("index.html");
    }
}

function start(){
    console.log("start button pushed");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log("stop button pushed");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();

function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);


    this.play = function(){
        this.sound.play();

    }

    this.stop = function(){
        this.sound.pause();

    }
}
}
