import { useState } from "react";
import { FaEdit } from "react-icons/fa";
const ManagePrice = () => {
  const [bikes, setBikes] = useState([
    { id: 1, name: "DIO 125 OBD2 Repsol Edition", price: 92300 },
    { id: 2, name: "HORNET 2.0 ABS OBD2 Repsol Edition", price: 140000 },
    { id: 3, name: "HORNET 2.0 ABS", price: 139000 },
    { id: 4, name: "SP125 Disc OBD2 Sports Edition", price: 90567 },
    { id: 5, name: "ACTIVA SMART LTD ED-OBD2", price: 82734 },
    { id: 6, name: "SP 160", price: 117500 },
  ]);

  return (
    <div className="container p-4">
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Manage Price
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white border  border-gray-300 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border  text-left text-sm font-semibold text-gray-700">
                S No.
              </th>
              <th className="py-2 px-4 border  text-left text-sm font-semibold text-gray-700">
                Model Name
              </th>
              <th className="py-2 px-4 border 0 text-left text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="py-2 px-4 border  text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike, index) => (
              <tr key={bike.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {bike.name}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {bike.price.toLocaleString()}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700 text-center">
                  <FaEdit className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePrice;
