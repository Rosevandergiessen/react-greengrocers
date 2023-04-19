export const CartItem = ({item}) => {
  return (
  <li>
    {console.log(item.item.id)}
    <img
      className="cart--item-icon"
      src={`/assets/icons/${item.item.id}.svg`}
      alt={`${item.item.name}`}
    />
    <p>{item.item.name}</p>
    <button className="quantity-btn remove-btn center">-</button>
    <span className="quantity-text center">{item.amount}</span>
    <button className="quantity-btn add-btn center">+</button>
  </li>
  )
}
