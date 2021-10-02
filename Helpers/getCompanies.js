import { collection, getDocs } from "firebase/firestore/lite";

export const getCompanies = async (db) => {
  const companies = await collection(db, "company");
  const companySnapshot = await getDocs(companies);
  const companyList = companySnapshot.docs.map((doc) => doc.data());
  return companyList;
};
