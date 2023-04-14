import React from "react";
import { useCartContext } from "../contexts/CartContext";
import "../style/cartP.css";
function CartPage() {
  const cartContext = useCartContext();

  // Доступ к данным корзины из контекста
  const { cart, deleteProductFromCart, clearCart } = cartContext;

  // Функция для удаления продукта из корзины
  const handleDeleteProduct = (id) => {
    deleteProductFromCart(id);
  };

  // Функция для очистки корзины
  const handleClearCart = () => {
    clearCart();
  };
  console.log(cart.products.map((product) => product));
  return (
    <div
      className="qweUL"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <h1>Корзина</h1>
      {cart.products.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          <ul>
            {cart.products.map((product) => (
              <li
                className="qweLI"
                style={{
                  display: "flex",
                  listStyle: "none",
                  border: "2px solid",
                  marginTop: "20px",
                  borderRadius: "20px",
                }}
                key={product.id}
              >
                <img
                  style={{ width: "50px", borderRadius: "50%" }}
                  src={product.image}
                  alt=""
                />
                <span style={{ marginTop: "10px", textAlign: "center" }}>
                  {product.title}
                </span>
                <span style={{ marginTop: "10px", textAlign: "center" }}>
                  {product.price} $
                </span>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "2px ",
                    marginLeft: "0",
                    marginTop: "0",
                    padding: "5px",
                    width: "30px",
                  }}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p>Total cost: {cart.totalPrice} $</p>
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid",
              borderRadius: "50px",
              marginLeft: "0",
              marginTop: "0",
              padding: "5px",
              width: "50px",
            }}
            onClick={handleClearCart}
          >
            Clear
          </button>
          <a href="/buy">
            <button
              style={{
                backgroundColor: "white",
                border: "2px solid",
                borderRadius: "50px",
                marginLeft: "80px",
                marginTop: "0",
                padding: "5px",
                width: "50px",
              }}
            >
              Buy
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default CartPage;
