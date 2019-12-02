window.addEventListener("load", function () {
    document.querySelector("#btn1").addEventListener("mousedown", function () { playSample("assets/kick.mp3"); });
    document.querySelector("#btn2").addEventListener("mousedown", function () { playSample("assets/snare.mp3"); });
    document.querySelector("#btn3").addEventListener("mousedown", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#btn4").addEventListener("mousedown", function () { playSample("assets/F.mp3"); });
    document.querySelector("#btn5").addEventListener("mousedown", function () { playSample("assets/G.mp3"); });
    document.querySelector("#btn6").addEventListener("mousedown", function () { playSample("assets/A.mp3"); });
    document.querySelector("#btn7").addEventListener("mousedown", function () { playSample("assets/C.mp3"); });
    document.querySelector("#btn8").addEventListener("mousedown", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#btn9").addEventListener("mousedown", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("mousedown", beatstart);
});
function playSample(mp3assets) {
    var sound = new Audio(mp3assets);
    sound.play();
}
/* 7.2: */
function beatstart() {
    var beat = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/hihat.mp3"];
    var index = 0;
    var time = setInterval(beatplay, 500);
    function beatplay() {
        /* playSample(); */
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 4)
            index = 0;
    }
    document.querySelector("#stop").addEventListener("mousedown", stopbeat);
    function stopbeat() {
        clearInterval(time);
    }
}
/*
zweite Parameter: Zeitspanne 1000=1s
Hilfe:
https://www.w3schools.com/jsref/met_win_setinterval.asp
*/ 
//# sourceMappingURL=drumpadscript.js.map