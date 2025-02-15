import { useState } from "react";
import { FileText, Table, Printer } from "lucide-react";

const EWReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [data, setData] = useState([
    {
      name: "Santosh Kumar",
      mobile: "7696353042",
      email: "s@gmail.com",
      model: "SHINE",
      regNo: "DL9SAC5532",
      purchaseYear: "2011",
      comment: "dd",
      enqDate: "27-01-2021",
      enqTime: "16:35:43",
    },
  ]);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobile.includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-auto max-h-screen max-w-full p-4">
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Extended Warranty Report
      </h1>

      {/* Date Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
          <label className="text-orange-600 mb-1">From Date</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
          <label className="text-orange-600 mb-1">To Date</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <button className="bg-teal-900 text-white px-4 py-2 rounded w-full sm:w-auto">
          SEARCH
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between mb-4">
        <div className="flex gap-2 flex-wrap">
          <button className="border px-3 py-1 rounded flex items-center gap-1">
            <FileText size={16} /> PDF
          </button>
          <button className="border px-3 py-1 rounded flex items-center gap-1">
            <Table size={16} /> CSV
          </button>
          <button className="border px-3 py-1 rounded flex items-center gap-1">
            <Printer size={16} /> Print
          </button>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <span>Search:</span>
          <input
            type="text"
            className="border p-1 rounded w-full sm:w-auto"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "Name",
                "Mobile",
                "Email ID",
                "Model",
                "Reg. No.",
                "Purchase Year",
                "Comment",
                "Enq. Date",
                "Enq. Time",
              ].map((header, index) => (
                <th key={index} className="py-2 px-4 border-b text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="text-gray-800">
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.mobile}</td>
                <td className="py-2 px-4 border-b">{item.email}</td>
                <td className="py-2 px-4 border-b">{item.model}</td>
                <td className="py-2 px-4 border-b">{item.regNo}</td>
                <td className="py-2 px-4 border-b">{item.purchaseYear}</td>
                <td className="py-2 px-4 border-b">{item.comment}</td>
                <td className="py-2 px-4 border-b">{item.enqDate}</td>
                <td className="py-2 px-4 border-b">{item.enqTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-4 text-sm">
        <div className="text-gray-700">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-gray-700">{currentPage}</span>
          <button
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
            disabled={currentPage * itemsPerPage >= filteredData.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EWReport;
