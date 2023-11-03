import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

// needs to remove one of the functions to make it work properly
function App() {
  let items = ["new york", "Adelaide", "Tokyo", "Longon", "Paris"];

  const handSelectItem = (item: string) => {
    console.log(item);
  };

  function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        <Buttons color="secondary" onClick={() => setAlertVisibility(true)}>
          Botao
        </Buttons>

        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handSelectItem}
        />
      </div>
    );
  }
}

export default App;
