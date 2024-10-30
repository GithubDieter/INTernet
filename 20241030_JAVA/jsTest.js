//Etwas in die Browser-Konsole schreiben
console.log("Das ist ein Test!");

//globale Variablen
var x = "Hallo";
var y = 42;
var zahl = "42";

//Lokale Variablen
let i = "hallo";
let k = "test "+42;

//var name = prompt("Bitte geben Sie ihren Namen ein");
//prompt ruft ein Eingabefenster auf

//alert("Hallo Welt!")
//ruft ein Pop-up Fenster mit dem entsprechenden Text auf

//Arrays erstellen:
var liste = ['Erste', 2, "dritte"];
//diese müssen nicht den gleichen "datentyp" haben
for(let i in liste){
    console.log(i)
    console.log(liste[i])
}
//Bei der for - in - schleife wird die variable 
//zu den array-positionen (0,1,2) 
for(let i of liste){
    console.log(i)
}
//Bei der for-of -schleife wird die variable
//zu den array-werten ('Erste', 2, "dritte")




