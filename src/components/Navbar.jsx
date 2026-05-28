import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[var(--color-dark)]"
        >
          VELORA
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">

          <Link
            to="/"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            Shop
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-[var(--color-primary)] transition duration-300"
          >
            Cart
            <span className="ml-2 text-xs bg-[var(--color-accent)] text-white px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <>
              <button
                onClick={logout}
                className="hover:text-[var(--color-primary)] cursor-pointer"
              >
                Logout
              </button>
              <button
                onClick={() => {
                  navigate("/orders");
                }}
                className="hover:text-[var(--color-primary)] cursor-pointer"
              >
                Orders
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-[var(--color-primary)] cursor-pointer">
                Login
              </Link>
              <Link to="/register" className="hover:text-[var(--color-primary)] cursor-pointer">
                Register
              </Link>
            </>
          )}
          {user?.role === "admin" && (
            <Link to="/admin" className="hover:text-[var(--color-primary)] cursor-pointer">
              Admin
            </Link>
          )}

        </nav>

      </div>
    </header>
  );
};

export default Navbar;