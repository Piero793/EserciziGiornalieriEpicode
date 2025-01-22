fetch("https://striveschool-api.herokuapp.com/books").then((responseobj) => {
  if (responseobj.ok) {
    console.log(responseobj);
    return responseobj.json();
  }
});
