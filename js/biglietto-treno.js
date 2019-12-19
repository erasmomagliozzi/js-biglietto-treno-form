// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// // quanti chilometri vuoi percorrere
// var kmViaggio = parseInt(prompt('Quanto lungo è il tuo viaggio in km?'));
// console.log(kmViaggio);
//
// // età del passeggero
// var eta = parseInt(prompt('Quanti anni hai?'));
// console.log(eta);
//
// // prezzo totale del viaggio per persone tra i 19 e 64 anni
// // 0.21€ al km
// var prezzoBiglietto = kmViaggio * 0.21;
// console.log(prezzoBiglietto);
// // sconto
// // 20% under 18
// // 40% over 65
// if (eta <= 18){
//   var calcoloScontoUnder = ((prezzoBiglietto * 20) / 100 );
//   var bigliettoUnder = prezzoBiglietto - calcoloScontoUnder;
//   console.log(bigliettoUnder);
// }else if (eta >= 65){
//   var calcoloScontoOver = ((prezzoBiglietto * 40) / 100 );
//   var bigliettoOver = prezzoBiglietto - calcoloScontoOver;
//   console.log(bigliettoOver);
// }
