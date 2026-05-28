import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { toast } from "react-hot-toast";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/admin/products`)
      .then((response) => {
        const found = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(found);
      });
  }, [id]);

  const handleUpdate = async (data) => {
    await axios.put(
      `http://127.0.0.1:8000/api/admin/products/${id}`,
      data
    );

    toast.success("Product updated successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">
        Edit Product
      </h2>

      <ProductForm
        initialData={product}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditProduct;