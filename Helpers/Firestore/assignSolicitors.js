import { getAdrDetails } from "../APIS/postcode.js";
import {
  companyByRegion,
  updateCompany,
  getSentCompanies,
  coverByRegion,
  updateCompanyCount,
} from "./queries.js";

export const assignSolicitors = async (client, db) => {
  const postcode = client.postcode.toUpperCase().replace(/[^\w\s]/gi, "");
  const adrDetail = await getAdrDetails(postcode);
  if (adrDetail.status === 200) {
    const { region } = adrDetail.result;
    let sols = await companyByRegion(region, db),
      sentSols,
      allSols;

    if (sols.length < 4) {
      sentSols = await getSentCompanies(region, db, sols.length);
      sols = [...sols, ...sentSols];
      allSols = await coverByRegion(region, db);
      allSols.forEach((el) => {
        updateCompany(db, region, el.contact.shortName, false);
      });
    }

    sols.forEach((el) => {
      updateCompany(db, region, el.contact.shortName, true);
      updateCompanyCount(db, el.contact.shortName);
    });
  }
};
