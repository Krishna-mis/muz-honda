import React, { useState } from "react";
import { FileText, Table, Printer } from "lucide-react";

const BookingReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;

  const bookingData = Array(10).fill({
    bookingDate: "01-01-1970",
    name: "Your Name",
    mobile: "Contact Number",
    emailId: "Email Address",
    model: "UP5612a22",
    regNo: "Registration Number",
    serviceType: "Year Of Purchase",
    purchaseYear: "2023",
    comment: "katana",
    enqDate: "13-02-2025",
    enqTime: "20:38:45",
  });

  const paginatedData = bookingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="  overflow-auto max-h-screen max-w-full">
      <h1 className="text-[36px] text-center text-red-800 font-bold">
        Manage Accounts
      </h1>

      {/* Date Filters */}
      <div className="flex gap-4 mb-4 items-end overflow-auto">
        <div className="flex flex-col w-1/4">
          <label className="text-orange-600 mb-1">From Date</label>
          <input type="date" className="border p-2 rounded w-full" />
        </div>
        <div className="flex flex-col w-1/4">
          <label className="text-orange-600 mb-1">To Date</label>
          <input type="date" className="border p-2 rounded w-full" />
        </div>
        <button className="bg-teal-900 text-white px-4 py-2 rounded">
          SEARCH
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-4 overflow-auto">
        <div className="flex gap-2">
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
        <div className="flex items-center gap-2">
          <span>Search:</span>
          <input
            type="text"
            className="border p-1 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto max-w-full">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200">
            <tr>
              {[
                "Booking Date",
                "Name",
                "Mobile",
                "Email ID",
                "Model",
                "Reg. No.",
                "Service Type",
                "Purchase Year",
                "Comment",
                "Enq. Date",
                "Enq. Time",
              ].map((heading) => (
                <th
                  key={heading}
                  className="border p-2 text-left text-sm font-semibold"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {Object.values(booking).map((value, idx) => (
                  <td key={idx} className="border p-2 text-sm">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm overflow-auto">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, bookingData.length)} of{" "}
          {bookingData.length} entries
        </span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          >
            Previous
          </button>
          {[...Array(Math.ceil(bookingData.length / itemsPerPage)).keys()].map(
            (page) => (
              <button
                key={page + 1}
                className={`px-3 py-1 border rounded ${
                  currentPage === page + 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            className="px-3 py-1 border rounded"
            disabled={
              currentPage === Math.ceil(bookingData.length / itemsPerPage)
            }
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingReport;
