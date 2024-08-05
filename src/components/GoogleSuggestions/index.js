import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ""}

  onChechSuggection = (event) => {
    this.setState({searchInput: event.target.value})
  }

  onSelectSuggection = (suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggection => (
      eachSuggection.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    ))

    return (
      <div className="google-suggestion-main-container">
        <div className="goggle-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-suggestion-container">
            <div className="search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChechSuggection}
                value={searchInput}
              />
            </div>
            <ul className="suggestion-container">
              {
                searchResult.map(eachSuggection => (
                  <SuggestionItem
                    suggestionLists={eachSuggection}
                    key={eachSuggection.id}
                    onSelectSuggection={this.onSelectSuggection}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
