// console gibt auf der Konsole aus
console.log("Das ist ein Test!");

// globale Variablen
var x = "Hallo";
var y = 42;
var zahl = "42";

// lokale Variablen
let i = "hallo";
let k = "test" + 42;

//prompt ruft ein Eingabefenster auf
var name = prompt("Bitte geben Sie ihren Namen ein")
var alter = prompt("Bitte geben Sie Ihr Alter ein")

var nalter = alter + " " + name

console.log (nalter)

//alert("Hallo Welt!")
//ruft ein Pop-up Fenster mit dem entsprechenden Text aus

//Arrays erstellen:
var liste = ['Erste', 2, "dritte"];
//dise müssen nicht den gleichen "datentyp" haben

for(let i in liste){
    console.log(i+5)
    //console.log(liste[i])


}
//Bei der for - in - schleife wird die 
//zu den array-positionen (1,2,3)


for(let i of liste)
{
    console.log(i)
}
//Bei der for - of - schleife wird die variable
//zu den array-werten ('Erste', 2, "dritte")

if(i == x)
{
    console.log("ja")
}
else
{
    console.log("nein")
}