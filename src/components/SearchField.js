import React, { useState } from 'react';
import dummyNodes from "../assets/dummynodes.js";
import "../styles/SearchField.css";

const SearchField = ({ addNode }) => {

  //using useState Hook to create State Variables: searchText and suggestions
  //searchText - stores current value of the search input field
  //suggestions - stores array of nodes that matches the search

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //Function updateSuggestions- updates the suggestion 
  //Filters dummyNodes and change into lowercase

  const updateSuggestions = () => {
    setSuggestions(dummyNodes.filter(node =>
      node.name.toLowerCase().includes(searchText.toLowerCase())
    ));
  };
   
  //Function selectSuggestion- called when a suggestion is clicked or enter key is pressed
  
  const selectSuggestion = (index = -1) => {
    if (index < 0) {
      index = suggestions.findIndex(suggestion =>
        suggestion.name.toLowerCase() === searchText.toLowerCase()
      );
    }

    if (index >= 0) {
      const selectedNode = suggestions[index];
      setSearchText("");
      setSuggestions([]);
      addNode(selectedNode);
    }
  };

  return (
    <div className="input-container">
      <input
        className="search-input"
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          updateSuggestions();
        }}
        placeholder="Add new nodes..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => selectSuggestion(index)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchField;
