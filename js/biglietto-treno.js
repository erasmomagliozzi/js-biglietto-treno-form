// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
var buttonGenera = document.getElementById('button_genera');
buttonGenera.addEventListener('click',
 function() {
   var inputNome = document.getElementById('nome');
   var nome = inputNome.value;
   console.log(nome);

   var fasciaEta = document.getElementById('fascia');
   var fascia = fasciaEta.value;
   console.log(fascia);

   var inputKm = document.getElementById('km');
   var kmViaggio = inputKm.value;
   console.log(kmViaggio);
   // prezzo totale del viaggio per persone tra i 19 e 64 anni
   // 0.21€ al km
   var costoBiglietto = kmViaggio * 0.21;
   console.log(costoBiglietto);

   var offerta = 'Tariffa Standard'
   // sconto
   // 20% under 18
   // 40% over 65
   if (fascia == 'minorenne'){
     var calcoloScontoUnder = ((costoBiglietto * 20) / 100 );
     var costoBiglietto = costoBiglietto - calcoloScontoUnder;

     offerta = 'Sconto Minorenne'
   }else if (fascia == 'over 65'){
     var calcoloScontoOver = ((costoBiglietto * 40) / 100 );
     var costoBiglietto = costoBiglietto - calcoloScontoOver;

     offerta = 'Sconto Over 65'
   }
  var carrozza = Math.floor(Math.random()*9) + 1;
  var cp = Math.floor(Math.random() * (100000 - 90000 + 1)) +90000;


   document.getElementById('nome_passeggero').innerHTML = nome;
   document.getElementById('offerta').innerHTML = offerta;
   document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2);
   document.getElementById('codice-cp').innerHTML = cp;
   document.getElementById('carrozza').innerHTML = carrozza;

}
);
var buttonAnnulla = document.getElementById('button_annulla');
buttonAnnulla.addEventListener('click',
 function(){
   document.getElementById('nome_passeggero').innerHTML = "";
   document.getElementById('offerta').innerHTML = "";
   document.getElementById('costo').innerHTML = "";
   document.getElementById('codice-cp').innerHTML = "";   document.getElementById('carrozza').innerHTML = "";

   document.getElementById('nome').value = "";
   document.getElementById('fascia').value = "";
   document.getElementById('km').value = "";
 }

);
