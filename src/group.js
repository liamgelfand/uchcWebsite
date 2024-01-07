import React, { useState} from 'react';
import Autosuggest from 'react-autosuggest';

const GroupedByAutocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Possible search types
  const searchTypes = ['sex', 'disease state', 'cell-type'];

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    const filteredTypes = searchTypes.filter(
      (type) => type.toLowerCase().includes(inputValueLowerCase)
    );

    return filteredTypes;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={{
        placeholder: 'Type a search type...',
        value,
        onChange,
      }}
    />
  );
};

export default GroupedByAutocomplete;