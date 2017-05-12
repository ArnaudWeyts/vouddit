import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';

import './Search.css';

const theme = {
  input: 'autosuggest_input',
  inputFocused: 'autosuggest_input--focused',
  suggestionsList: 'autosuggest_suggestions-list',
  suggestion: 'autosuggest_suggestion',
  suggestionHighlighted: 'autosuggest_suggestion--highlighted'
};

const renderSuggestion = (suggestion: string) => (
  <div>
    {suggestion}
  </div>
);

class Search extends React.Component<ISearchProps, { value: string, suggestions: Array<string> }> {
  constructor(props: ISearchProps) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event: any, { newValue }: { newValue: string }) => {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      suggestions: this.props.suggestions
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          inputProps={inputProps}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={(suggestion: string) => suggestion}
          renderSuggestion={renderSuggestion}
          theme={theme}
        />
      </div>
    );
  }
};

export default Search;