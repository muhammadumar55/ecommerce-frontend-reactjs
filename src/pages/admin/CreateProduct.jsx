import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { toast } from "react-hot-toast";


const CreateProduct = () => {

  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await axios.post(
      "http://127.0.0.1:8000/api/admin/products",
      data
    );

    toast.success("Product created successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">
        Add New Product
      </h2>

      <ProductForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateProduct;