import { useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const ManageAccount = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: "gandhihonda",
      password: "123",
      name: "Gandhi Honda",
      mobile: "8380087455",
      email: "gandhihonda@gmail.com",
      city: "",
      createDate: "21-02-2023",
      expiryDate: "20-02-2024",
      status: "Active",
    },
  ]);

  return (
    <>
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Manage Accounts
      </h1>
      <table className="min-w-full bg-white border border-gray-300 border-collapse mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border ">S No.</th>
            <th className="py-2 px-4 border ">User ID</th>
            <th className="py-2 px-4 border ">Password</th>
            <th className="py-2 px-4 border ">Name</th>
            <th className="py-2 px-4 border ">Mobile</th>
            <th className="py-2 px-4 border ">Email</th>
            <th className="py-2 px-4 border ">City</th>
            <th className="py-2 px-4 border ">Create Date</th>
            <th className="py-2 px-4 border ">Expiry Date</th>
            <th className="py-2 px-4 border ">Status</th>
            <th className="py-2 px-4 border ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">
                {user.userId}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {user.password}
              </td>
              <td className="py-2 px-4 border border-gray-300">{user.name}</td>
              <td className="py-2 px-4 border border-gray-300">
                {user.mobile}
              </td>
              <td className="py-2 px-4 border border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border border-gray-300">
                {user.city || "N/A"}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {user.createDate}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {user.expiryDate}
              </td>
              <td
                className={`py-2 px-4 border border-gray-300 font-semibold ${
                  user.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.status}
              </td>
              <td className="py-2 px-4 border border-gray-300 flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaRegEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageAccount;
