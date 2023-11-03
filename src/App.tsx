import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "Adelaide", "Tokyo", "Longon", "Paris"];

  const handSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello <h2>World</h2>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handSelectItem} />
    </div>
  );
}

export default App;
