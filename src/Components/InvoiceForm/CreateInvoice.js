import React from "react";
import TextInput from "../Inputs/TextInput";
import DateInput from "../Inputs/DateInput";

const CreateInvoice = ({ invoiceData, handleInputChange }) => {
  return (
    <div>
      <TextInput
        label="Company / Your Name"
        name="CompanyName"
        value={invoiceData.CompanyName}
        onChange={handleInputChange}
        required={true}
      />
      <TextInput
        label="Company / Your Role SubHeader"
        name="CompanySubHeader"
        value={invoiceData.CompanySubHeader}
        onChange={handleInputChange}
      />
      <TextInput
        label="Invoice Number"
        name="InvoiceNumber"
        value={invoiceData.InvoiceNumber}
        onChange={handleInputChange}
      />
      <TextInput
        label="Purchase Order Number"
        name="OrderNumber"
        value={invoiceData.OrderNumber}
        onChange={handleInputChange}
      />
      <DateInput
        label="Invoice Date"
        name="InvoiceDate"
        value={invoiceData.InvoiceDate}
        onChange={handleInputChange}
      />
      <DateInput
        label="Payment Date"
        name="PaymentDate"
        value={invoiceData.PaymentDate}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CreateInvoice;
