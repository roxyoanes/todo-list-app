import React from "react";
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
      setListItems([...listItems, e.target.value]);
    }
  };

  const deleteItem = (el) => {
    const newArray = listItems.filter((inputValue) => inputValue !== el);
    setListItems(newArray);
  }

  return (
    <div className="App">
      <p>hello</p>
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
            {listItems.map((item, index) => (
              <div className="ingredient-container">
                <li key={index}>{item}</li>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item)}
                >
                  Delete item
                </button>
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
