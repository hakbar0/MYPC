import { getAdrDetails } from "../APIS/postcode.js";
import { companyByRegion } from "./queries.js";

export const assignSolicitors = async (client, db) => {
  const postcode = client.postcode.toUpperCase().replace(/[^\w\s]/gi, "");
  const adrDetail = await getAdrDetails(postcode);
  if (adrDetail.status === 200) {
    const { region } = adrDetail.result;
    companyByRegion(region, db);
  }
};
