import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

      {/* Mobile Overlay */}
      

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-6 space-y-6">

            <button
              onClick={() => setIsOpen(false)}
              className="text-right w-full text-xl"
            >
              ✕
            </button>

            <Link to="/" onClick={() => setIsOpen(false)} className="block font-medium">
              Home
            </Link>

            <Link to="/shop" onClick={() => setIsOpen(false)} className="block font-medium">
              Shop
            </Link>

            <Link to="/cart" onClick={() => setIsOpen(false)} className="block font-medium">
              Cart ({cartItems.length})
            </Link>

            {user ? (
              <>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block font-medium text-left"
                >
                  Logout
                </button>

                <button
                  onClick={() => {
                    navigate("/orders");
                    setIsOpen(false);
                  }}
                  className="block font-medium text-left"
                >
                  Orders
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="block font-medium">
                  Login
                </Link>

                <Link to="/register" onClick={() => setIsOpen(false)} className="block font-medium">
                  Register
                </Link>
              </>
            )}

            {user?.role === "admin" && (
              <Link to="/admin" onClick={() => setIsOpen(false)} className="block font-medium">
                Admin
              </Link>
            )}


          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl focus:outline-none fixed top-0 right-0 z-50 m-2 p-2 bg-white rounded-lg shadow-lg"
        >
          ☰
        </button>
        </>
      );
};

      export default Navbar;