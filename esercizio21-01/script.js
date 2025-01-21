document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name-input");
  const saveBtn = document.getElementById("save-btn");
  const removeBtn = document.getElementById("remove-btn");
  const savedNameDiv = document.getElementById("saved-name");

  // Visualizzo nella pagina
  function updateSavedName() {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      savedNameDiv.textContent = `Nome salvato: ${savedName}`;
      console.log(savedName);
    } else {
      savedNameDiv.textContent = "Nessun nome salvato";
      console.log("Nessun nome presente in localStorage.");
    }
  }

  // Salvo nel localStorage
  saveBtn.addEventListener("click", () => {
    const name = nameInput.value;
    localStorage.setItem("name", name);
    updateSavedName();
    console.log(`Nome salvato in localStorage: ${name}`);
  });

  // Rimuovo dal localStorage
  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    updateSavedName();
    console.log("Nome rimosso da localStorage.");
  });

  updateSavedName();
});
