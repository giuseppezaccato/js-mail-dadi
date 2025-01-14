/*-----DADI-----*/
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//* raccolta dati
const Player = prompt("scrivi qui il tuo nome, lancerò un Dado due volte e chi dei due avrà estratto il numero piu alto sarà il vincitore!....SI GIOCA!.... ", "Giuseppe")

console.log(`CPU vs ${Player}`);
document.getElementById("test").innerHTML = `Ciao ${Player}, giochiamo!!!`;

//!RICORDA SEMPRE! 
//! math.random()= numero da 0(incluso) a 1(escluso)
//! math.floor()= numero arrotondato per difetto
//! math.floor(math.random() *10) = numero da 0 a 9
//! math.floor(math.random() *10) +1 = numero da 1 a 10 

const PlayerNumber = Math.floor(Math.random() * 6) + 1;
const CpuNumber = Math.floor(Math.random() * 6) + 1;

console.log(`${Player} => ${PlayerNumber} - CPU => ${CpuNumber}`); //* controllo numeri estratti!
document.getElementById("result").innerHTML = `hai totalizzato ${PlayerNumber} - Io invece ${CpuNumber}`;

//*player vince
if (PlayerNumber > CpuNumber) {
    console.log(`Complimenti ${Player} mi hai battuto`)
    document.getElementById("winner").innerHTML = `HAI VINTO COMPLIMENTI!!`;

}
//*banco vince
else if (PlayerNumber < CpuNumber) {
    console.log(` Mi spiace ${Player} stavolta Vinco io, Ritenta! `)
    document.getElementById("winner").innerHTML = `HAHAHA IL BANCO VINCE SEMPRE!`;
} else {
    //*pareggio
    console.log(`AH! per un pelo! abbiamo pareggiato!`)
    document.getElementById("winner").innerHTML = `AH! per un pelo! abbiamo pareggiato!`;
}
