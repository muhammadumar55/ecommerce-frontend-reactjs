import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-12">
          Our Collection
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Shop;