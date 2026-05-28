import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleCheckout = async () => {

    if (cartItems.length === 0) return;

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/orders",
        {
          items: cartItems,
        }
      );

      alert("Order placed successfully!");

      clearCart();
      navigate("/order-success");

    } catch (error) {

      console.error(error);
      alert("Order failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-[var(--color-grayText)]">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-8">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md"
              >

                {/* Image + Info */}
                <div className="flex items-center space-x-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-[var(--color-grayText)]">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4 mt-6 md:mt-0">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[var(--color-accent)] mt-6 md:mt-0"
                >
                  Remove
                </button>

              </div>
            ))}

            {/* Total Section */}
            <div className="text-right mt-12">
              <h3 className="text-2xl font-bold">
                Total: ${totalPrice}
              </h3>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 px-8 py-4 rounded-xl text-white bg-[var(--color-primary)] hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;