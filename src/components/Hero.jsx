import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          
          <p className="font-semibold uppercase tracking-widest text-sm text-[var(--color-accent)]">
            New Collection 2026
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-dark)]">
            Elevate Your Everyday Style
          </h1>

          <p className="mt-6 text-lg max-w-lg text-[var(--color-grayText)]">
            Discover curated fashion pieces designed to bring confidence and elegance to your daily life.
          </p>

          <div className="mt-10 flex space-x-6">
            
            <Link
              to="/shop"
              className="px-8 py-4 rounded-xl font-semibold text-white bg-[var(--color-primary)] hover:opacity-90 transition duration-300 shadow-lg"
            >
              Shop Now
            </Link>

            <button className="px-8 py-4 rounded-xl font-semibold border border-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white transition duration-300">
              Explore Lookbook
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop"
            alt="Fashion Model"
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
            <p className="text-sm text-[var(--color-grayText)]">
              Trending Item
            </p>
            <p className="font-semibold text-[var(--color-dark)]">
              Summer Linen Blazer
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;