/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

function prezzoViaggio(){

    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    
    const prezzoKm = 0.21;
    
    let prezzoBiglietto = km * prezzoKm;
    
    let totale = prezzoBiglietto

    if (eta < 18){
        totale = (prezzoBiglietto - ((prezzoBiglietto / 100) * 20));
        console.log(totale)
    } 
    else if (eta > 65){
        totale = (prezzoBiglietto - ((prezzoBiglietto / 100) * 40));
    }

    let costoTotale = `Il costo totale del viaggio è: ${(totale.toFixed(2))}€`

    document.getElementById('risultato').innerHTML = costoTotale;
}

