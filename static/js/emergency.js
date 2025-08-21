
function showExitPlan() {
    alert("Stay calm. Use nearest safe exit. Do not use elevators. Help others if possible.");
}
function showCPR() {
    document.getElementById("cprDetails").style.display = "block";
}

function showKit() {
    document.getElementById("kitDetails").style.display = "block";
}

function showFlashlight() {
    document.getElementById("flashlightBox").style.display = "block";
}

function showLocation() {
    document.getElementById("locationBox").style.display = "block";
}

function showFireTips() {
    document.getElementById("fireTipsBox").style.display = "block";
}

function playAlarm() {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
}
function hideBox(id) {
    document.getElementById(id).style.display = "none";
}
