import axios from "axios";
import * as Constants from "../Constants/Config";

//axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: `https://${Constants.InvoiceApi}/`,
  params: {},
});
