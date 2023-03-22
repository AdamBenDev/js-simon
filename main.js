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
