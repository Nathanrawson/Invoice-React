import React from "react";
import TextInput from "../Inputs/TextInput";
import DateInput from "../Inputs/DateInput";
import NumberInput from "../Inputs/NumberInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const LineItem = ({
  index,
  item,
  handleInputChange,
  copyLineItem,
  removeLineItem,
}) => {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-md-6">
          <TextInput
            label="Description"
            type="text"
            name="Description"
            value={item.Description}
            onChange={(e) => handleInputChange(e, "LineItems", index)}
          />
        </div>
        <div className="col-md-6">
          <DateInput
            label="Date"
            name="Date"
            required={true}
            value={item.Date}
            onChange={(e) => handleInputChange(e, "LineItems", index)}
          />
        </div>
        <div className="col-md-6">
          <NumberInput
            label="Hour Rate (More options to come)"
            name="Rate"
            value={item.Rate}
            onChange={(e) => handleInputChange(e, "LineItems", index)}
          />
        </div>
        <div className="col-md-6">
          <NumberInput
            label="Rate Total $ (More options to come)"
            name="RateTotal"
            value={item.RateTotal}
            onChange={(e) => handleInputChange(e, "LineItems", index)}
          />
        </div>
        <div className="col-md-6">
          <NumberInput
            label="Overall Total $"
            name="Total"
            value={item.Total}
            onChange={(e) => handleInputChange(e, "LineItems", index)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <button
          className="btn btn-secondary copy-btn"
          type="button"
          onClick={() => copyLineItem(index)}
        >
          <FontAwesomeIcon icon={faCopy} /> Copy
        </button>
        <button
          className="btn btn-danger ml-2 remove-btn"
          type="button"
          onClick={() => removeLineItem(index)}
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Remove
        </button>
      </div>
    </div>
  );
};

export default LineItem;
