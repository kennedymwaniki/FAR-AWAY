/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";
import Logo from "./logo.jsx";
import Form from "./form.jsx";
import PackingList from "./packinglist.jsx";
import Stats from "./Stats.jsx";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id)); //how we delete elements from an array
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "are sure you want too delete everything? "
    );
    if (confirmed) setItems([]);
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggle}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
