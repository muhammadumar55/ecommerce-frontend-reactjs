import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-4">
          <Link to="/admin/products" className="block hover:text-[var(--color-primary)]">
            Manage Products
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-[var(--color-bg)]">
        <h1 className="text-3xl font-bold">
          Welcome to Admin Dashboard
        </h1>
      </div>

    </div>
  );
};

export default AdminDashboard;