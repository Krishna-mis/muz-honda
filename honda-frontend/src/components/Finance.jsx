import React, { useState } from "react";
import {
  AlertCircle,
  User,
  Mail,
  Phone,
  CreditCard,
  Bike,
  MessageSquare,
  ChevronDown,
  FileText,
  ChevronRight,
} from "lucide-react";

const Finance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    loanAmount: "",
    model: "",
    message: "",
    agreed: false,
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/finance`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Finance Enquiry Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          loanAmount: "",
          model: "",
          message: "",
          agreed: false,
        });
      } else {
        setResponseMessage(`${data.message}`);
      }
    } catch (error) {
      setResponseMessage(" Failed to submit. Please try again later.");
    }
  };
  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const requiredDocs = [
    "Pass Photo - 1",
    "POI (Proof of Identity)",
    "POA (Proof of Address)",
    "Cheque - 4 / Bank Pass Book Copy (Updated Last 3 Months)",
    "Income Proof - Salary Slip / IT Returns (Last 2 Yrs)",
  ];

  const poaDocs = [
    "Electricity Bill",
    "Gas Bill",
    "Bank Account Statement",
    "Landline Bill",
    "Registered Lease / Rent Agreement",
  ];

  const poiDocs = [
    "Aadhar Card",
    "PAN Card",
    "Voter ID",
    "Driving License",
    "Passport",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            INTERESTED FOR FINANCE?
          </h1>
          <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <CreditCard size={20} />
            <span className="hidden md:inline">CALCULATE</span> EMI
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">REQUIRED DOCUMENTS</h2>
            <ul className="space-y-3">
              {requiredDocs.map((doc, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-red-600">✓</span>
                  {doc}
                </li>
              ))}
            </ul>

            <div className="relative">
              <button
                onClick={() => handleDropdownClick("poa")}
                className="w-full bg-gray-50 p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FileText className="text-red-600" />
                  <span className="font-semibold">POA (Proof of Address)</span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    openDropdown === "poa" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "poa" && (
                <ul className="mt-2 bg-white border rounded-lg p-4 space-y-2 absolute w-full z-10">
                  {poaDocs.map((doc, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={() =>
                        setFormData({ ...formData, selectedPOA: doc })
                      }
                    >
                      <ChevronRight className="text-red-600" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* POI Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick("poi")}
                className="w-full bg-gray-50 p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FileText className="text-red-600" />
                  <span className="font-semibold">POI (Proof of Identity)</span>
                </div>
                <ChevronDown
                  className={`transition-transform ${
                    openDropdown === "poi" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "poi" && (
                <ul className="mt-2 bg-white border rounded-lg p-4 space-y-2 absolute w-full z-10">
                  {poiDocs.map((doc, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={() =>
                        setFormData({ ...formData, selectedPOI: doc })
                      }
                    >
                      <ChevronRight className="text-red-600" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-500 mb-1">YOUR NAME</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full p-2 pl-10 border rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 mb-1">EMAIL ADDRESS</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full p-2 pl-10 border rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-500 mb-1">
                  CONTACT NUMBER
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="CONTACT NUMBER"
                    className="w-full p-2 pl-10 border rounded"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                    size={20}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-500 mb-1">LOAN AMOUNT</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="LOAN AMOUNT"
                    className="w-full p-2 pl-10 border rounded"
                    value={formData.loanAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, loanAmount: e.target.value })
                    }
                  />
                  <CreditCard
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                    size={20}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-500 mb-1">
                SELECT MODEL YOU WANT
              </label>
              <div className="relative">
                <select
                  className="w-full p-2 pl-10 border rounded appearance-none"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                >
                  <option value="">SELECT MODEL</option>
                  <option value="model1">Model 1</option>
                  <option value="model2">Model 2</option>
                </select>
                <Bike
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 mb-1">
                YOUR MESSAGE FOR US
              </label>
              <div className="relative">
                <textarea
                  placeholder="WRITE YOUR MESSAGE HERE"
                  className="w-full p-2 pl-10 border rounded h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <MessageSquare
                  className="absolute left-3 top-4 text-red-600"
                  size={20}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="rounded"
              />
              <span>
                Yes, I agree with all{" "}
                <span className="text-red-600">Terms & Conditions</span>
              </span>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <p className="bg-gray-100 p-5">
          <span className="text-red-600">Disclaimer:</span> Interest rate/
          Finance disbursal will depend on financial institution / banks
          discretion. The calculation performed by EMI Calculator is based on
          the information you entered on reducing rate of interest and is for
          illustrative purposes only. This calculation reflects amounts in
          Indian Rupee rounded to the nearest whole figure. Estimated monthly
          payments DO NOT include any processing or other possible fees which
          may depend on the financial institution / banks.
        </p>
      </div>
    </div>
  );
};

export default Finance;
