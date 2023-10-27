import BankingDetails from "../Components/InvoiceForm/BankingDetails";
import ClientAddress from "../Components/InvoiceForm/ClientAddress";
import CompanyAddress from "../Components/InvoiceForm/CompanyAddress";
import CompanyContact from "../Components/InvoiceForm/CompanyContact";
import CreateInvoice from "../Components/InvoiceForm/CreateInvoice";
import LineItems from "../Components/InvoiceForm/LineItems";
import { createInvoice } from "../Services/InvoiceService";
import React, { useState } from "react";
import Toast from "../Components/ErrorHandling/Toast";

const Invoice = () => {
  const [toast, setToast] = useState({ message: "", type: "" });
  const [invoiceData, setInvoiceData] = useState({});

  const handleInputChange = (e, section = null, index = null) => {
    const { name, value } = e.target;
    setInvoiceData((prevState) => {
      let newState = { ...prevState };
      if (section) {
        newState[section] = newState[section] || {};
        if (Array.isArray(newState[section])) {
          newState[section][index] = newState[section][index] || {};
          newState[section][index][name] = value;
        } else {
          newState[section][name] = value;
        }
      } else {
        newState[name] = value;
      }
      return newState;
    });
  };

  const handleCreateInvoice = async () => {
    try {
      const pdfBlob = await createInvoice(invoiceData);

      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      setToast({ message: "Failed to create invoice", type: "error" });
    }
  };

  return (
    <div className="container invoice-form-container mt-5">
      {toast.message && (
        <Toast message={toast.message} type={toast.type} setToast={setToast} />
      )}
      <h2 className="mb-4">Create Invoice</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <CreateInvoice
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
        />

        <h3 className="mt-4">Client Address</h3>
        <ClientAddress
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
        />
        <h3 className="mt-4">Company Address</h3>
        <CompanyAddress
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
        />

        <h3 className="mt-4">Company Contact</h3>
        <CompanyContact
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
        />
        <h3 className="mt-4">Banking Details</h3>
        <BankingDetails
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
        />
        <h3 className="mt-4">Line Items</h3>
        <LineItems invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
        <div>
          <button className="btn btn-success" onClick={handleCreateInvoice}>
            Create Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default Invoice;
