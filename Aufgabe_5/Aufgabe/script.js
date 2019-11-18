var headline = "Weltweite CO2 Emission pro Region von 2008 bis 2018";
console.log(headline);
var europe = "Europa";
var eu2008 = 4965.7;
var eu2018 = 4209.3;
var africa = "Afrika";
var af2008 = 1028;
var af2018 = 1235.5;
var southamerica = "Süd Amerika";
var sa2008 = 1132.6;
var sa2018 = 1261.5;
var northamerica = "Nord Amerika";
var na2008 = 6600.4;
var na2018 = 6035.6;
var asia = "Asien";
var as2008 = 12954.7;
var as2018 = 16274.1;
var emission2018 = eu2018 + af2018 + sa2018 + na2018 + as2018;
console.log("Die Weltweite Gesamtemission beträgt: " + emission2018 + " kg CO2.");
/* Europa */
console.log(europe);
console.log("Die Emission von Europa ist: " + eu2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + (eu2018 / emission2018 * 100) + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (eu2018 / eu2008 * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (eu2018 - eu2008) + "kg CO2.");
/* Afrika */
console.log(africa);
console.log("Die Emission von Afrika ist: " + af2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + (af2018 / emission2018 * 100) + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (af2018 / af2008 * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (af2018 - af2008) + "kg CO2.");
/* Süd Amerika */
console.log(southamerica);
console.log("Die Emission von Süd Amerika ist: " + sa2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Süd Amerika damit " + (sa2018 / emission2018 * 100) + "%.");
console.log("Für Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (sa2018 / sa2008 * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (sa2018 - sa2008) + "kg CO2.");
/* Nord Amerika */
console.log(northamerica);
console.log("Die Emission von Nord Amerika ist: " + na2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nord Amerika damit " + (na2018 / emission2018 * 100) + "%.");
console.log("Für Nord Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (na2018 / na2008 * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (na2018 - na2008) + "kg CO2.");
/* Asien */
console.log(asia);
console.log("Die Emission von Asien ist: " + as2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + (as2018 / emission2018 * 100) + "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (as2018 / as2008) * 100 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + (as2018 - as2008) + "kg CO2.");
//# sourceMappingURL=script.js.map