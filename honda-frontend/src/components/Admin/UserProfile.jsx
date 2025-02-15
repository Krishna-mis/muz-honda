import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    userId: "gandhihonda",
    name: "Gandhi Honda",
    email: "gandhihonda@gmail.com",
    mobile: "8380087455",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = () => {
    console.log("Updated user details:", user);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center text-orange-600 mb-4">
        User Profile
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            name="userId"
            value={user.userId}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-full bg-teal-700 text-white p-2 rounded mt-2 hover:bg-teal-800"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
