import InvoiceApi from "../APIs/InvoiceApi";

export const createInvoice = async (invoiceData) => {
  try {
    const response = await InvoiceApi.post("Invoice", invoiceData, {
      responseType: "blob", // We expect a PDF as a response
    });

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });

    // Use this Blob data to either download the PDF or display it.
    // For the sake of this example, let's assume we return it for further processing:
    return pdfBlob;
  } catch (error) {
    console.error("Error creating invoice:", error);
    return error;
  }
};
