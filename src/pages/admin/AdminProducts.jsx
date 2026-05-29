import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminProducts = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      `/api/admin/products`
    );
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await axios.delete(
      `/api/admin/products/${id}`
    );

    toast.success("Product deleted successfully!");
    fetchProducts();
  };

  return (
    <div className="p-10">

      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Products
        </h2>

        <Link
          to="/admin/products/create"
          className="px-6 py-3 rounded-xl text-white bg-[var(--color-primary)]"
        >
          Add Product
        </Link>
      </div>

      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{product.name}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4 space-x-4">
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  className="text-blue-600 text-bold cursor-pointer"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 text-bold cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default AdminProducts;