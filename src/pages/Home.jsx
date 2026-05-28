import { useState } from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import CategoryProducts from "../components/CategoryProducts";

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState('Men');

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories onSelect={setSelectedCategory} />
      <CategoryProducts category={selectedCategory} />
    </>
  );
};

export default Home;