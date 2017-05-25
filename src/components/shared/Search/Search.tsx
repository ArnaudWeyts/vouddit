import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class Search extends React.Component<ISearchProps, { searchText: string, suggestions: Array<string> }> {
  constructor(props: ISearchProps) {
    super(props);

    this.state = {
      searchText: '',
      suggestions: props.suggestions
    };
  }

  componentWillReceiveProps(props: ISearchProps) {
    this.setState({
      suggestions: props.suggestions
    });
  }

  handleUpdateInput = (searchText: string) => {
    if (searchText === '') {
      this.props.onClear();
    }
    this.props.onChange(searchText);
    this.setState({
      searchText: searchText
    });
  }

  handleNewRequest = () => {
    this.props.onSelected(this.state.searchText);
    this.props.onClear();
    this.setState({
      searchText: '',
    });
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText={this.props.placeholder}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.state.suggestions}
          filter={(searchText, key) => (key.indexOf(searchText.toLowerCase()) !== -1)}
          openOnFocus={true}
          maxSearchResults={10}
          fullWidth={true}
        />
      </div>
    );
  }
}

export default Search;
