import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/products/featured`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Featured Products
        </h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">

          {products.map((product) => (
            <div key={product.id} className="min-w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;