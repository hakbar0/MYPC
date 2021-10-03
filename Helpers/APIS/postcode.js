import fetch from "node-fetch";
import { location } from "../../Config/config.js";

export const getAdrDetails = async (postcode) => {
  const url = location.getUrl + postcode;
  const settings = { method: "GET" };
  try {
    const res = await fetch(url, settings);
    const resBody = await res.json();
    return resBody;
  } catch (err) {
    return err;
  }
};
