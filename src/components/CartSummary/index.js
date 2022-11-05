import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachCartItem => {
        totalPrice += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary">
          <h1 className="order-heading">
            Order Total:
            <span className="total-price"> RS {totalPrice}/- </span>
          </h1>
          <p className="items-count">{cartList.length} Items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
