/* Headline */

var headline:string = "Weltweite CO2 Emission pro Region von 2008 bis 2018";
console.log (headline)

/* Variablen */

var eu:string = "Europa";
var eu2008:number = 4965.7;
var eu2018:number = 4209.3;

var af:string = "Afrika";
var af2008:number = 1028;
var af2018:number = 1235.5;

var sa:string = "Süd Amerika";
var sa2008:number = 1132.6;
var sa2018:number = 1261.5;

var na:string = "Nord Amerika";
var na2008:number = 6600.4;
var na2018:number = 6035.6;

var as:string = "Asien";
var as2008:number = 12954.7;
var as2018:number = 16274.1;

var aus:string = "Australien";
var aus2008:number = 1993;
var aus2018:number = 2100.5;

/* Sätze */
var em2018:string = "Die Emission im Jahr 2018 betrug: ";
var mtCO2:string = " Mt CO2.";
var relativgesamt:string = "Relativ zur Gesamtemission der Welt sind es somit ";
var veränderung:string = "Die Veränderung der Emission von 2008 zu 2018 beträgt ";
var vergleich:string = "2018 im Vergleich zu 2008 sind das ";
var percent:string = " %."

/* Funktionen */

function europe () {
    document.querySelector("#heading").innerHTML = "Europa";
    document.querySelector("#absolute2018").innerHTML = "4209,3";
    document.querySelector("#relativ_world").innerHTML = "13.53";
    document.querySelector("#percent_growthrate").innerHTML = "84,78";
    document.querySelector("#absolute_growthrate").innerHTML = "-756.4";
    var euworld:number = eu2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + euworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", europe);
});

function africa () {
    document.querySelector("#heading").innerHTML = "Afrika";
    document.querySelector("#absolute2018").innerHTML = "1235,5";
    document.querySelector("#relativ_world").innerHTML = "3,97";
    document.querySelector("#percent_growthrate").innerHTML = "120,18";
    document.querySelector("#absolute_growthrate").innerHTML = "207,5";
    var afworld:number = af2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + afworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", africa);
});

function southamerica () {
    document.querySelector("#heading").innerHTML = "Südamerika";
    document.querySelector("#absolute2018").innerHTML = "1261,5";
    document.querySelector("#relativ_world").innerHTML = "4,05";
    document.querySelector("#percent_growthrate").innerHTML = "111,38";
    document.querySelector("#absolute_growthrate").innerHTML = "128,9";
    var saworld:number = sa2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + saworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", southamerica);
});

function northamerica () {
    document.querySelector("#heading").innerHTML = "Nordamerika";
    document.querySelector("#absolute2018").innerHTML = "6035,6";
    document.querySelector("#relativ_world").innerHTML = "19,4";
    document.querySelector("#percent_growthrate").innerHTML = "91,44";
    document.querySelector("#absolute_growthrate").innerHTML = "-564,8";
    var naworld:number = na2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + naworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", northamerica);
});

function asia () {
    document.querySelector("#heading").innerHTML = "Asien";
    document.querySelector("#absolute2018").innerHTML = "16274,1";
    document.querySelector("#relativ_world").innerHTML = "52,3";
    document.querySelector("#percent_growthrate").innerHTML = "125,62";
    document.querySelector("#absolute_growthrate").innerHTML = "3319,4";
    var asworld:number = as2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + asworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", asia);
});

function australia () {
    document.querySelector("#heading").innerHTML = "Australien";
    document.querySelector("#absolute2018").innerHTML = "2100,5";
    document.querySelector("#relativ_world").innerHTML = "6,75";
    document.querySelector("#percent_growthrate").innerHTML = "105,39";
    document.querySelector("#absolute_growthrate").innerHTML = "107,5";
    var ausworld:number = aus2018/weltemission2018*100;
    document.querySelector(".chart").setAttribute("style", "height:" + ausworld + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", australia);
});

/* Kosolenausgaben */

/* Weltgesamt */
var weltemission2018:number = eu2018+af2018+sa2018+na2018+as2018+aus2018;
console.log ("Die Weltweite Gesamtemission beträgt: " + weltemission2018 + mtCO2)

/* Europa */
console.log (eu);
console.log (em2018 + eu2018 + mtCO2);
console.log (relativgesamt + (eu2018/weltemission2018*100) + percent);
console.log (veränderung + (eu2018/eu2008*100) + percent);
console.log (vergleich + (eu2018-eu2008) + mtCO2);

/* Afrika */
console.log (af);
console.log (em2018 + af2018 + mtCO2);
console.log (relativgesamt + (af2018/weltemission2018*100) + percent);
console.log (veränderung + (af2018/af2008*100) + percent);
console.log (vergleich + (af2018-af2008) + mtCO2);

/* Südamerika */
console.log (sa);
console.log (em2018 + sa2018 + mtCO2);
console.log (relativgesamt + (sa2018/weltemission2018*100) + percent);
console.log (veränderung + (sa2018/sa2008*100) + percent);
console.log (vergleich + (sa2018-sa2008) + mtCO2);

/* Nordamerika */
console.log (na);
console.log (em2018 + na2018 + mtCO2);
console.log (relativgesamt + (na2018/weltemission2018*100) + percent);
console.log (veränderung + (na2018/na2008*100) + percent);
console.log (vergleich + (na2018-na2008) + mtCO2);

/* Asien */
console.log (as);
console.log (em2018 + as2018 + mtCO2);
console.log (relativgesamt + (as2018/weltemission2018*100) + percent);
console.log (veränderung + (as2018/as2008*100) + percent);
console.log (vergleich + (as2018-as2008) + mtCO2);

/* Australien */
console.log (aus);
console.log (em2018 + aus2018 + mtCO2);
console.log (relativgesamt + (aus2018/weltemission2018*100) + percent);
console.log (veränderung + (aus2018/aus2008*100) + percent);
console.log (vergleich + (aus2018-aus2008) + mtCO2);