export const Product = ({item, index}) => {
  return(
  <li>
    <div className="store--item-icon">
      <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
    </div>
    <p>{item.name}</p>
    <button>Add to cart</button>
  </li>
  )
}
