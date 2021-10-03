import { collection, query, where, getDocs } from "firebase/firestore";

export const getCompanies = async (db) => {
  const companies = await collection(db, "company");
  const companySnapshot = await getDocs(companies);
  const companyList = companySnapshot.docs.map((doc) => doc.data());
  return companyList;
};

export const companyByRegion = async (region, db) => {
  const q = query(
    collection(db, "company"),
    where(`regions.${region}.covered`, "==", true),
    where(`regions.${region}.state`, "==", false)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().contact.shortName);
  });
};
