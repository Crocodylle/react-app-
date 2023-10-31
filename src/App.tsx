import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new york", "Adelaide", "Tokyo", "Longon", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
