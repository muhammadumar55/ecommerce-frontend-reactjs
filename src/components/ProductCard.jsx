import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Product Info */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-dark)]">
                    {product.name}
                </h3>

                <p className="mt-2 text-[var(--color-grayText)]">
                    ${product.price}
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-6 w-full py-3 rounded-xl font-medium text-white bg-[var(--color-primary)] hover:opacity-90 transition duration-300 cursor-pointer"
                >
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default ProductCard;