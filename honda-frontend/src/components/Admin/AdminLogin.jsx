import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@gmail.com" && password === "admin@123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white flex justify-between items-center p-3">
        <div className="flex items-center">
          <div className="text-3xl font-bold">MH</div>
          <div className="ml-2 text-lg">Muzaffarpur Honda</div>
        </div>
        <div className="text-base">Admin Portal</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative flex items-center justify-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/ZfF8SKNEjLmjSsbjLQ3bqtZcaJqwNnfoh0cHom5ZORM.jpg"
          alt="A black motorcycle parked in front of an old rustic wall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 bg-red-600 p-6 rounded-lg shadow-lg w-72">
          <h2 className="text-white text-xl mb-3 text-center">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-white text-sm mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded border border-gray-300"
                defaultValue="admin@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-white text-sm mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 rounded border border-gray-300"
                defaultValue="admin@123"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-red-600 py-2 rounded font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
