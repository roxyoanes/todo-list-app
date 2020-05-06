import React from "react";
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

const App = () => {
  const [listItems, setListItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [toggle, setToggle] = React.useState(false);


  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setToggle(!toggle);
  }; 

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      const item = {
      id: uuidv4(),
      text: e.target.value,
      completed: false,
    }
      setListItems([...listItems, item]);
    }
  };

  const deleteItem = (id) => {
    const newArray = listItems.filter((item) => item.id !== id);
    setListItems(newArray);
  }

  const handleCompleted = (id) => {
    const newArr = listItems.map((item) => item.id === id ? {...item, completed: !item.completed} : item);
    console.log(newArr)
    setListItems(newArr);
  }

  return (
    <div className="App">
      <p>To-do list</p>
      <button onClick={handleClick}>Add to-do item</button>
      {toggle ? (
        <div>
          <input
            className="input"
            type="text"
            onChange={handleInput}
            onKeyDown={keyPress}
            value={inputValue}
          />
          <div>
            {listItems.map((item) => (
              <div key={item.id} className="ingredient-container">
                <li key={item.id}>{item.text}</li>
                {item.completed ? <p>completed</p> : ""}
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete item
                </button>
                <button onClick={() => handleCompleted(item.id)}>Complete task</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
