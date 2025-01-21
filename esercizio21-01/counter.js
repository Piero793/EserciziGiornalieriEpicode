document.addEventListener("DOMContentLoaded", () => {
  const counterDiv = document.getElementById("counter");

  //azzeriamo il valore mettendolo in una variabile e non costante

  let count = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

  function updateCounter() {
    count++;
    counterDiv.textContent = count;
    sessionStorage.setItem("count", count);
    console.log(`secondo corrente: ${count}`);
  }

  setInterval(updateCounter, 1000);
  counterDiv.textContent = count;
  console.log(`Valore iniziale del contatore: ${count}`);
});
