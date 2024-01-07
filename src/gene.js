import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';


const GeneAutocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allGeneNames, setAllGeneNames] = useState([]);
  const [searchTypes, setSearchTypes] = useState([]);

  useEffect(() => {
    // Load cell names from the text file
    const filePath = require('./cell_names.txt');

    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        // Split the data into an array of cell names
        const cellNamesArray = data.split('\n').filter(name => name.trim() !== '');
        setAllGeneNames(cellNamesArray.slice(0, 5)); // Limit to top 5 gene names

        // Set searchTypes based on cell names
        setSearchTypes(cellNamesArray.map(name => name.toLowerCase()));
      })
      .catch(error => console.error('Error loading cell names:', error));
  }, []); // Empty dependency array to ensure it runs only once

  // Update suggestions based on input value
  useEffect(() => {
    const inputValueLowerCase = value.trim().toLowerCase();
    setSuggestions(allGeneNames.filter(name => name.toLowerCase().includes(inputValueLowerCase)));
  }, [value, allGeneNames]);

  // Autosuggest functions
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(allGeneNames.filter(name => name.toLowerCase().includes(value.trim().toLowerCase())));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const inputProps = {
    placeholder: 'Type a cell name',
    value,
    onChange: onChange,
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />

      <div>
        <p>Possible search types:</p>
        <ul>
          {searchTypes.slice(0, 5).map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneAutocomplete;
