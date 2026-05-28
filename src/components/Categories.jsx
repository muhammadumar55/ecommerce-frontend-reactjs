const categories = [
  "Women",
  "Men",
  "Shoes",
  "Accessories",
];

const Categories = ({ onSelect }) => {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Shop by Category
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category) => (
            <div
              key={category}
              onClick={() => onSelect(category)}
              className="cursor-pointer bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="font-semibold text-lg">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;