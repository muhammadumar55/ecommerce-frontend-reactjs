import { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/orders")
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  return (
    <div className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12">
        Your Orders
      </h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-8 rounded-2xl shadow mb-8"
        >
          <h3 className="font-semibold mb-4">
            Order #{order.id}
          </h3>

          <p>Total: ${order.total_amount}</p>

          <div className="mt-4 space-y-2">
            {order.items.map((item) => (
              <div key={item.id}>
                {item.product.name} x {item.quantity}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;