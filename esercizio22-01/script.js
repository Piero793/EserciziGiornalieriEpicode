fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseobj) => {
    if (responseobj.ok) {
      console.log(responseobj);
      return responseobj.json();
    }
  })
  .then((books) => {
    console.log("Dati dei libri ricevuti:", books);
    const booksContainer = document.getElementById("books-container");
    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col col-sm-6 col-md-3 col-lg-4 mb-4";
      col.innerHTML = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="${book.title}" />
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.category}</p>
            <p class="card-text">$${book.price}</p>
            <button class="btn btn-primary discard-button">Scarta</button>
          </div>
        </div>
      `;
      booksContainer.appendChild(col);
      /*console.log("Card creata per:", book.title);*/
    });

    document.querySelectorAll(".discard-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log("Eliminazione card:", event.target.closest(".col"));
        event.target.closest(".col").remove();
      });
    });
  })
  .catch((error) => console.error("Errore:", error));
