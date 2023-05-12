import {  useState } from 'react';
import * as apiService from '../../services/apiService.js'
import SearchResultsDisplay from '../../components/SearchResultsDisplay/SearchResultsDisplay.jsx';
const Search = () => {
  const [searchFrom, setSearchForm] = useState({entry:''})
  const [searchResults,setSearchResults] = useState([])
  async function handleSearch(evt){
    evt.preventDefault()
    const results = await apiService.generalQuery(searchFrom.entry)
    console.log(results)
    setSearchResults(results.docs)
  }
  function handleChange(evt){
    evt.preventDefault()
    setSearchForm({...searchFrom, [evt.target.name]:evt.target.value})
  }
  return ( 
  <>
  <form onSubmit={handleSearch}>
    <input name='entry' type="text" id="search-input" value={searchFrom.entry} onChange={handleChange}></input>
    <button type="submit">Search</button>
  </form>
  <SearchResultsDisplay/>
  </> );
}

export default Search;