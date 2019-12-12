var myMP3: any;
var beat: string [] = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "hihat.mp3"]
var record: boolean = false;

window.addEventListener("load", function (): void {
    document.querySelector("#btn1").addEventListener("mousedown", function(): void {playSample("kick.mp3"); });
    document.querySelector("#btn2").addEventListener("mousedown", function(): void {playSample("snare.mp3"); });
    document.querySelector("#btn3").addEventListener("mousedown", function(): void {playSample("hihat.mp3"); });
    document.querySelector("#btn4").addEventListener("mousedown", function(): void {playSample("F.mp3"); });
    document.querySelector("#btn5").addEventListener("mousedown", function(): void {playSample("G.mp3"); });
    document.querySelector("#btn6").addEventListener("mousedown", function(): void {playSample("A.mp3"); });
    document.querySelector("#btn7").addEventListener("mousedown", function(): void {playSample("C.mp3"); });
    document.querySelector("#btn8").addEventListener("mousedown", function(): void {playSample("laugh-1.mp3"); });
    document.querySelector("#btn9").addEventListener("mousedown", function(): void {playSample("laugh-2.mp3"); });

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

function playSample(myMP3: string): void  {
    var sound: HTMLAudioElement = new Audio("assets/" + myMP3);
    sound.play();
    if (record == true) {
        beat.push(myMP3);
    }
}

var kick: any;

function beatstart(): void {
    var index: number = 0;
    
    if ( document.getElementById("play").classList.contains("fa-play") ) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        kick = setInterval(myBeat, 300);
        record = false;
        console.log("Beatplay");
    
    } else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(kick);
        console.log("Beatstop");
    }
    
    function myBeat (): void {
        playSample(beat [index]);
        index ++;
        if (index > (beat.length - 1)) index = 0;
        console.log(beat [index] );
    }
}

function beatdelete (): void {
    beat.length = 0;
    console.log("Der Beat wird gelöscht");
}

function beatrecord (): void {
    record = true;
    console.log("Ein neuer Beat wird aufgenommen");
}


/*
zweite Parameter: Zeitspanne 1000=1s
Hilfe:
https://www.w3schools.com/jsref/met_win_setinterval.asp
*/