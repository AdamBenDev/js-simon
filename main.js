/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//"numeri" è un array che contiene i numeri casuali generati dall'utente

var numeri = [];
var interval;


//genera un array di 5 numeri casuali compresi tra 0 e 9 utilizzando il metodo "Array.from" e "Math.random"
function genera() {
    numeri = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
    document.getElementById("input").value = numeri.join(" ");
    //L'intervallo di tempo di 30 secondi viene impostato utilizzando la funzione "setTimeout", dopo il quale l'input dell'utente viene ripulito e l'array "numeri" viene resettato.
    interval = setTimeout(() => {
      document.getElementById("input").value = "";
      numeri = [];
    }, 30000);
  }

  //La funzione "controlla()" viene chiamata quando l'utente invia i numeri indovinati
  function controlla() {
    var input = document.getElementById("input").value.trim();
    var indovinati = numeri.filter((n) => input.includes(n)).sort();
    document.getElementById("risultato").textContent = `Hai indovinato ${indovinati.length} numeri: ${indovinati.join(", ")}`;
    clearTimeout(interval);
    numeri = [];
    document.getElementById("input").value = "";
  }
