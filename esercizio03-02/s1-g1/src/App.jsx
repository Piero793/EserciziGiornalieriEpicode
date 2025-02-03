import "./App.css";
import ButtonComponent from "./assets/components/ButtonComponent";
import ImageComponent from "./assets/components/ImageComponent";

function App() {
  return (
    <>
      <ButtonComponent textButton="cliccami" />
      <ButtonComponent textButton="cliccami di nuovo" />

      <ImageComponent
        src="https://plus.unsplash.com/premium_photo-1738503913441-492589911717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="immagine1"
      />

      <ImageComponent
        src="https://images.unsplash.com/photo-1738070593303-fbb151013701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="renne che lottano"
      />
    </>
  );
}

export default App;
