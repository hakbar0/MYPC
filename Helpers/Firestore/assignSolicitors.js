import { getAdrDetails } from "../APIS/postcode.js";

export const assignSolicitors = async (client) => {
  const postcode = client.postcode.toUpperCase().replace(/[^\w\s]/gi, "");
  const adrDetail = await getAdrDetails(postcode);
  if (adrDetail.status === 200) {
    const { region } = adrDetail.result;
  }
};
