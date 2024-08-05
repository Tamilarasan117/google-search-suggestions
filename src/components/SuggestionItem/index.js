import './index.css'

const SuggestionItem = (props) => {
  const {suggestionLists,onSelectSuggection} = props
  const {suggestion} = suggestionLists

  const selectSuggection = () => {
    onSelectSuggection(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={selectSuggection}
      />
    </li>
  )
}

export default SuggestionItem
