import { useState, useEffect } from "react";

const ProductForm = ({ initialData = {}, onSubmit }) => {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  /* Populate form when editing */
  useEffect(() => {
    if (initialData.id) {
      setFormData({
        name: initialData.name || "",
        price: initialData.price || "",
        image: initialData.image || "",
        category: initialData.category || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await onSubmit(formData);
      setErrors({});
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow space-y-6"
    >
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name[0]}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Image */}
      <div>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

       {/* Image Preview */}
      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="w-32 h-32 object-cover mt-4 rounded"
        />
      )}

      {/* Category */}
      <div>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* Description */}
      <div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl text-white bg-[var(--color-primary)] cursor-pointer"
      >
        {loading ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
};

export default ProductForm;