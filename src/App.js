import React from "react";

function App() {
  var style = {
    fontSize: 50,
    backgroundColor: "red",
    color: "#00FFFF"
  };
  var input = "password";
  var submit = "submit";
  return (
    <div>
      <p style={style}> Let's see some operations </p>
      <form>
        <label forName="field"> This is the start of root element </label>
        <input type = {input} name="field"></input>
        <input type = {submit}></input>
      </form>
      <ul>
        <li> 5 + 10 = {5 + 10} </li>
        <li> 5 - 10 = {5 - 10} </li>
        <li> 5 * 10 = {5 * 10} </li>
        <li> 5 / 10 = {5 / 10} </li>
      </ul>
    </div>
  );
}

export default App;
