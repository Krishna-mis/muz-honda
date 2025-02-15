import { useState } from "react";
import { FileText, Table, Printer } from "lucide-react";

const FinanceReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [data] = useState([
    {
      name: "Speedy Motors",
      mobile: "9812345678",
      email: "info@speedymotors.com",
      model: "DIO",
      loanAmount: "20000",
      comment: "Looking for finance options.",
      enqDate: "12-02-2021",
      enqTime: "10:45:30",
    },
    {
      name: "Elite Auto",
      mobile: "9876543210",
      email: "contact@eliteauto.com",
      model: "SHINE",
      loanAmount: "18000",
      comment: "Need urgent assistance.",
      enqDate: "15-03-2021",
      enqTime: "14:20:45",
    },
    {
      name: "Metro Honda",
      mobile: "9898765432",
      email: "sales@metrohonda.com",
      model: "ACTIVA 6G",
      loanAmount: "22000",
      comment: "Interested in test ride.",
      enqDate: "25-04-2021",
      enqTime: "09:15:20",
    },
    {
      name: "City Bikes",
      mobile: "9954321987",
      email: "info@citybikes.com",
      model: "CB HORNET 160R",
      loanAmount: "25000",
      comment: "Looking for best EMI options.",
      enqDate: "30-05-2021",
      enqTime: "16:50:10",
    },
    {
      name: "Rider's Point",
      mobile: "9988776655",
      email: "support@riderspoint.com",
      model: "UNICORN",
      loanAmount: "19000",
      comment: "Want details on interest rates.",
      enqDate: "05-06-2021",
      enqTime: "12:30:40",
    },
    {
      name: "Skyline Motors",
      mobile: "9900112233",
      email: "info@skylinemotors.com",
      model: "X-BLADE",
      loanAmount: "23000",
      comment: "Need quotation.",
      enqDate: "10-07-2021",
      enqTime: "11:10:55",
    },
    {
      name: "Fast Track Honda",
      mobile: "9777665544",
      email: "contact@fasttrackhonda.com",
      model: "CBR 150R",
      loanAmount: "30000",
      comment: "Interested in insurance details.",
      enqDate: "20-08-2021",
      enqTime: "17:05:15",
    },
    {
      name: "Prime Automobiles",
      mobile: "9666554433",
      email: "support@primeautomobiles.com",
      model: "LIVO",
      loanAmount: "16000",
      comment: "Looking for exchange offers.",
      enqDate: "05-09-2021",
      enqTime: "08:40:50",
    },
    {
      name: "Urban Wheels",
      mobile: "9555443322",
      email: "info@urbanwheels.com",
      model: "GRAZIA 125",
      loanAmount: "21000",
      comment: "Please call me for details.",
      enqDate: "18-10-2021",
      enqTime: "15:30:25",
    },
    {
      name: "Velocity Motors",
      mobile: "9444332211",
      email: "sales@velocitymotors.com",
      model: "ACTIVA 125",
      loanAmount: "24000",
      comment: "Need finance approval process.",
      enqDate: "22-11-2021",
      enqTime: "13:20:35",
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
        Finance Report
      </h1>

      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
          <label className="text-red-800 mb-1">From Date</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4">
          <label className="text-red-800 mb-1">To Date</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <button className="bg-green-700 text-white px-4 py-2 rounded w-full sm:w-auto">
          SEARCH
        </button>
      </div>

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
                "Loan Amount",
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
                <td className="py-2 px-4 border-b">{item.loanAmount}</td>
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

export default FinanceReport;
