import React from "react";
import LineItem from "./LineItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const LineItems = ({ invoiceData, setInvoiceData }) => {
  const addNewLineItem = () => {
    setInvoiceData((prevState) => ({
      ...prevState,
      LineItems: [
        ...(prevState.LineItems || []),
        {
          Description: "",
          Date: null,
          Rate: 0,
          RateTotal: 0,
          Total: 0,
          CompanyName: "",
        },
      ],
    }));
  };

  const copyLineItem = (indexToCopy) => {
    const itemToCopy = { ...invoiceData.LineItems[indexToCopy] };
    setInvoiceData((prevState) => ({
      ...prevState,
      LineItems: [
        ...prevState.LineItems.slice(0, indexToCopy + 1),
        itemToCopy,
        ...prevState.LineItems.slice(indexToCopy + 1),
      ],
    }));
  };

  const removeLineItem = (indexToRemove) => {
    setInvoiceData((prevState) => ({
      ...prevState,
      LineItems: prevState.LineItems.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleInputChange = (event, group, index) => {
    const { name, value } = event.target;
    setInvoiceData((prevState) => {
      const updatedItems = (prevState[group] || []).map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      });
      return {
        ...prevState,
        [group]: updatedItems,
      };
    });
  };

  return (
    <div className="line-item-container">
      <>
        {(invoiceData.LineItems || []).map((item, index) => (
          <LineItem
            key={index}
            index={index}
            item={item}
            handleInputChange={handleInputChange}
            copyLineItem={copyLineItem}
            removeLineItem={removeLineItem}
          />
        ))}
        <button
          className="btn btn-secondary mb-3"
          type="button"
          onClick={addNewLineItem}
        >
          <FontAwesomeIcon icon={faPlus} /> Add Line Item
        </button>
      </>
    </div>
  );
};

export default LineItems;
