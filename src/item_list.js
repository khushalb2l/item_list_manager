import React, { useState } from "react";
import "./App.css";

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src="/hr.png" alt="Your Logo" />
        <h1>Item List Manager</h1>
      </div>

      <div className="content-container">
        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Enter item"
            value={newItem}
            onChange={handleInputChange}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
