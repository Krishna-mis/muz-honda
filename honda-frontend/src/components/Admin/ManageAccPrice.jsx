import React from "react";
import { FaEdit } from "react-icons/fa";

const ManageAccPrice = () => {
  const accessories = [
    {
      id: 1,
      name: 'GRIP COVER "TYPE 2"',
      partNo: "83540KOLD00",
      price: "926/-",
    },
    {
      id: 2,
      name: 'GRIP COVER "TYPE 1"',
      partNo: "08301KOPAO0",
      price: "63/-",
    },
    { id: 3, name: "BODY COVER", partNo: "SP300BBC900SL", price: "418/-" },
    { id: 4, name: "SET, SARI STEP", partNo: "83540KOLD00", price: "926/-" },
    {
      id: 5,
      name: "MAT FLOOR - COLORED",
      partNo: "08301K1JHOOZA",
      price: "356/-",
    },
  ];

  return (
    <div className="container p-4">
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Manage Accessories Price
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border   text-left text-sm font-semibold text-gray-700">
                S No.
              </th>
              <th className="py-2 px-4 border text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-4 border text-left text-sm font-semibold text-gray-700">
                Part No.
              </th>
              <th className="py-2 px-4 border text-left text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="py-2 px-4 border text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {accessories.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {item.name}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {item.partNo}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-sm text-gray-700">
                  {item.price}
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

export default ManageAccPrice;
