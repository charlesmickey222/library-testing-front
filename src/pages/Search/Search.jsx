import {  useState } from 'react';
import * as apiService from '../../services/apiService.js'
import SearchResultsDisplay from '../../components/SearchResultsDisplay/SearchResultsDisplay.jsx';
const Search = () => {
  const [searchForm, setSearchForm] = useState({entry:'',searchType:'any'})
  const [searchResults,setSearchResults] = useState([])
  async function handleSearch(evt){
    evt.preventDefault()
    if(searchForm.searchType === 'any'){
    const results = await apiService.generalQuery(searchForm.entry)
    setSearchResults(results.docs)
    }else if (searchForm.searchType === 'title'){
    const results = await apiService.titleQuery(searchForm.entry)
    setSearchResults(results.docs)
    }else{
    const results = await apiService.authorQuery(searchForm.entry)
    setSearchResults(results.docs)
    }
  }
  function handleChange(evt){
    evt.preventDefault()
    setSearchForm({...searchForm, [evt.target.name]:evt.target.value})
  }
  return ( 
  <>
  <form onSubmit={handleSearch}>
    <input name='entry' type="text" id="search-input" value={searchForm.entry} onChange={handleChange}></input>
    <label htmlFor='search-types'>search by:</label>
    <select id='search-types' name='searchType' defaultValue='any' onChange={handleChange}>
      <option value='any'>all</option>
      <option value='title'>title</option>
      <option value='author'>author</option>
    </select>
    <button type="submit">Search</button>
  </form>
  <SearchResultsDisplay results={searchResults}/>
  </> );
}

export default Search;