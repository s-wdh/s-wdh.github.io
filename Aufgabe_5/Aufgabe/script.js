var headline = "Weltweite CO2 Emission pro Region von 2008 bis 2018";
console.log(headline);
/* Länderzahlen */
var eu = "Europa";
var eu2008 = 4965.7;
var eu2018 = 4209.3;
var af = "Afrika";
var af2008 = 1028;
var af2018 = 1235.5;
var sa = "Süd Amerika";
var sa2008 = 1132.6;
var sa2018 = 1261.5;
var na = "Nord Amerika";
var na2008 = 6600.4;
var na2018 = 6035.6;
var as = "Asien";
var as2008 = 12954.7;
var as2018 = 16274.1;
/* Sätze */
var em2018 = "Die Emission im Jahr 2018 betrug: ";
var kgCO2 = " kg CO2.";
var relativgesamt = "Relativ zur Gesamtemission der Welt sind es somit ";
var veränderung = "Die Veränderung der Emission von 2008 zu 2018 beträgt ";
var vergleich = "2018 im Vergleich zu 2008 sind das ";
var percent = " %.";
/* Ausgaben */
var weltemission2018 = eu2018 + af2018 + sa2018 + na2018 + as2018;
console.log("Die Weltweite Gesamtemission beträgt: " + weltemission2018 + kgCO2);
/* Europa */
console.log(eu);
console.log(em2018 + eu2018 + kgCO2);
console.log(relativgesamt + (eu2018 / weltemission2018 * 100) + percent);
console.log(veränderung + (100 - (eu2018 / eu2008 * 100)) + percent);
console.log(vergleich + (eu2018 - eu2008) + kgCO2);
/* Afrika */
console.log(af);
console.log(em2018 + af2018 + kgCO2);
console.log(relativgesamt + (af2018 / weltemission2018 * 100) + percent);
console.log(veränderung + (100 - (af2018 / af2008 * 100)) + percent);
console.log(vergleich + (af2018 - af2008) + kgCO2);
/* Süd Amerika */
console.log(sa);
console.log(em2018 + sa2018 + kgCO2);
console.log(relativgesamt + (sa2018 / weltemission2018 * 100) + percent);
console.log(veränderung + (100 - (sa2018 / sa2008 * 100)) + percent);
console.log(vergleich + (sa2018 - sa2008) + kgCO2);
/* Nord Amerika */
console.log(na);
console.log(em2018 + na2018 + kgCO2);
console.log(relativgesamt + (na2018 / weltemission2018 * 100) + percent);
console.log(veränderung + (100 - (na2018 / na2008 * 100)) + percent);
console.log(vergleich + (na2018 - na2008) + kgCO2);
/* Asien */
console.log(as);
console.log(em2018 + as2018 + kgCO2);
console.log(relativgesamt + (as2018 / weltemission2018 * 100) + percent);
console.log(veränderung + (100 - (as2018 / as2008 * 100)) + percent);
console.log(vergleich + (as2018 - as2008) + kgCO2);
//# sourceMappingURL=script.js.map