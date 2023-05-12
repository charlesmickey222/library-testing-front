const SerachResultCard = (props) => {
  const book = props.book
  return ( <div>
    <h4>{book.name}</h4>
  </div> );
}

export default SerachResultCard;