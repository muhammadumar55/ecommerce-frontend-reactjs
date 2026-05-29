import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ category }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      axios
        .get(`/api/products/category/${category}`)
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [category]);

  if (!category) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          {category} Collection
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategoryProducts;