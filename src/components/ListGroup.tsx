import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["new york", "Adelaide", "Tokyo", "Longon", "Paris"];

  // Hook
  const [selectedIndex, setSelectedTndex] = useState(-1);

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedTndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
