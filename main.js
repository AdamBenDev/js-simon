var numeri = [];
var interval;



function genera() {
    numeri = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
    document.getElementById("input").value = numeri.join(" ");
    interval = setTimeout(() => {
      document.getElementById("input").value = "";
      numeri = [];
    }, 30000);
  }

  
  function controlla() {
    var input = document.getElementById("input").value.trim();
    var indovinati = numeri.filter((n) => input.includes(n)).sort();
    document.getElementById("risultato").textContent = `Hai indovinato ${indovinati.length} numeri: ${indovinati.join(", ")}`;
    clearTimeout(interval);
    numeri = [];
    document.getElementById("input").value = "";
  }
