import React, { useState } from "react";

const ShoppingList = (props) => {
  const [items, setItems] = useState(props.items);

  const removeItem = (id) => {
    let tempItems = [...items];
    const idx = tempItems.findIndex((item) => item.id === id);

    if (idx === -1) return;

    tempItems.splice(idx, 1);

    setItems(tempItems);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button
            id="removeBtn"
            onClick={() => removeItem(item.id)}
            type="button"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
