var myMP3;
var beat = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "hihat.mp3"];
var record = false;
window.addEventListener("load", function () {
    document.querySelector("#btn1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#btn2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#btn3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#btn4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#btn5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#btn6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#btn7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#btn8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#btn9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("mousedown", beatstart);
    document.querySelector("#record").addEventListener("mousedown", beatrecord);
    document.querySelector("#delete").addEventListener("mousedown", beatdelete);
});
/* function handlebutton(_event: MouseEvent): void {
    let buttonTag: string = (<HTMLElement>_event.target).id;
    var sound: HTMLAudioElement = new Audio("assets/" + myMP3)
    sound.play();
    if (record == true) {
        beat.push(myMP3);
    }
    switch (buttonTag) {
        case "btn1":
            playSample("kick.mp3");
            break;
        case "btn2":
            playSample("snare.mp3");
            break;
        case "btn3":
            playSample("hihat.mp3");
            break;
        case "btn4":
            playSample("F.mp3");
            break;
        case "btn5":
            playSample("G.mp3");
            break;
        case "btn6":
            playSample("A.mp3");
            break;
        case "btn7":
            playSample("C.mp3");
            break;
        case "btn8":
            playSample("laugh-1.mp3");
            break;
        case "btn9":
            playSample("laugh-2.mp3");
            break;
    }
} */
function playSample(myMP3) {
    var sound = new Audio("assets/" + myMP3);
    sound.play();
    if (record == true) {
        beat.push(myMP3);
    }
}
/*
function playSample(mp3assets: string) {
    var sound: HTMLAudioElement = new Audio(mp3assets);
    sound.play();
} */
/* 7.2: */
/* function beatstart() {
    var beat: string[] = ["assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/hihat.mp3"]
    var index: number = 0;
    var time = setInterval(beatplay, 500);
    function beatplay() {
        /** playSample(); **/
/*      var sound: HTMLAudioElement = new Audio(beat[index]);
     sound.play();
     index++;
     if (index > 4) {
         index = 0;
     }
 }
 document.querySelector("#stop").addEventListener("mousedown", stopbeat);
 function stopbeat() {
     clearInterval(time);
 }
}
*/
var kick;
function beatstart() {
    var index = 0;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        kick = setInterval(myBeat, 300);
        record = false;
        console.log("Beatplay");
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(kick);
        console.log("Beatstop");
    }
    function myBeat() {
        playSample(beat[index]);
        index++;
        if (index > (beat.length - 1))
            index = 0;
        console.log(beat[index]);
    }
}
function beatdelete() {
    beat.length = 0;
    console.log("Der Beat wird gelöscht");
}
function beatrecord() {
    record = true;
    console.log("Ein neuer Beat wird aufgenommen");
}
/*
zweite Parameter: Zeitspanne 1000=1s
Hilfe:
https://www.w3schools.com/jsref/met_win_setinterval.asp
*/ 
//# sourceMappingURL=drumpad8script.js.map