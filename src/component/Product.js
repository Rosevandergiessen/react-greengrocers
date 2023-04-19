export const Product = ({item, index, addToCart, amount}) => {

  const addItem = (product) => {
    const productToAdd = {...product, amount: 1}
    addToCart(productToAdd)
  }

  return(
  <li>
    <div className="store--item-icon">
      <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
    </div>
    <p>{item.name}</p>
    <button onClick={() => addItem({item})}>Add to cart</button>
  </li>
  )
}
