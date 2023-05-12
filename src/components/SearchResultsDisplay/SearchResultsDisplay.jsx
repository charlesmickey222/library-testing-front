import SerachResultCard from "./SearchResultCard";

const SearchResultsDisplay = (props) => {
  const searchResults = props.searchResults
  return ( 
  <>
    {searchResults?searchResults.map(result=>
    <SerachResultCard book={result}/>
    ):
    <h2>search for a book</h2>}
  </> );
}

export default SearchResultsDisplay;