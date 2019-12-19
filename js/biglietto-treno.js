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
   var prezzoBiglietto = kmViaggio * 0.21;
   console.log(prezzoBiglietto);
   // sconto
   // 20% under 18
   // 40% over 65
   if (fascia == 'minorenne'){
     var calcoloScontoUnder = ((prezzoBiglietto * 20) / 100 );
     var bigliettoUnder = prezzoBiglietto - calcoloScontoUnder;
     console.log(bigliettoUnder);
   }else if (fascia == 'over 65'){
     var calcoloScontoOver = ((prezzoBiglietto * 40) / 100 );
     var bigliettoOver = prezzoBiglietto - calcoloScontoOver;
     console.log(bigliettoOver);
   }

   document.getElementById('nome_passeggero').innerHTML = nome;

}

)
