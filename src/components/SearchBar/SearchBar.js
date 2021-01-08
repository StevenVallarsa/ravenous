import React, {useState} from 'react'
import './SearchBar.css'


function SearchBar(props) {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [sortBy, setSortBy] = useState('best_match')
  
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}> {sortByOption}</li>)
    }   
    )}

  const getSortByClass = (sortByOption) => {
    return (sortBy === sortByOption) ? 'active' : ''
  }

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption)
  }

  const handleTermChange = (e) => {
    setTerm(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    props.searchYelp(term, location, sortBy)
    setTerm('')
    setLocation('')
  }


    return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
          <input onChange={handleTermChange} value={term} placeholder="Search Businesses" />
          <input onChange={handleLocationChange} value={location} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
          <a href="#" onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  )
}

export default SearchBar