import React, { useState } from "react";

const SearchBar = props => {
  const { setsearchTerm } = props;
  const [input, setInput] = useState("");

  return (
    <div className="ellipse">
      <form
        onSubmit={event => {
          event.preventDefault();
          setsearchTerm(input);
        }}
      >
        <input
          placeholder="Que recherchez vous"
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        ></input>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};
export default SearchBar;
