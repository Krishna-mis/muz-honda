import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const ManageOffer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Sample Offer",
      image:
        "https://storage.googleapis.com/a1aa/image/KFp4K7EIqaYaR95gapaytdoRF2abiEQ49Vxhuz6xwF4.jpg",
      description: "Hiii",
    },
  ]);

  const [newOffer, setNewOffer] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleAddOffer = () => {
    setOffers([...offers, { id: offers.length + 1, ...newOffer }]);
    setNewOffer({ title: "", image: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="container p-4">
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Manage Offers
      </h1>
      <div className="bg-gray-300 p-1 rounded-t-lg flex justify-between items-center">
        <span></span>
        <button
          className="text-black font-semibold flex items-center cursor-pointer bg-white rounded p-2"
          onClick={() => setIsModalOpen(true)}
        >
          <MdOutlineAdd className="text-red-900" />
          New
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-orange-100">
            <th className="py-2 px-4 border border-gray-300 text-left text-black font-semibold">
              S No.
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left text-black font-semibold">
              Title
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left text-black font-semibold">
              Image
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left text-black font-semibold">
              Description
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left text-black font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={offer.id}>
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">
                {offer.title}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <img
                  src={offer.image}
                  alt="Offer"
                  className="border border-red-500 rounded-md"
                  width="50"
                  height="50"
                />
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {offer.description}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                <FaEdit />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-orange-600 text-lg font-semibold mb-4">
              Add Offer
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Offer Title"
                className="w-full p-2 border rounded"
                value={newOffer.title}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, title: e.target.value })
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  setNewOffer({
                    ...newOffer,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
              <textarea
                placeholder="Enter Description"
                className="w-full p-2 border rounded"
                value={newOffer.description}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, description: e.target.value })
                }
              ></textarea>
              <button
                className="bg-green-700 text-white px-4 py-2 rounded w-full"
                onClick={handleAddOffer}
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded w-full mt-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ManageOffer;
