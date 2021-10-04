import {
  collection,
  query,
  where,
  getDocs,
  limit,
  doc,
  setDoc,
} from "firebase/firestore";

export const getCompanies = async (db) => {
  const companies = await collection(db, "company");
  const companySnapshot = await getDocs(companies);
  const companyList = companySnapshot.docs.map((doc) => doc.data());
  return companyList;
};

export const companyByRegion = async (region, db) => {
  let docs = [];
  const q = query(
    collection(db, "company"),
    where(`regions.${region}.covered`, "==", true),
    where(`regions.${region}.state`, "==", false),
    limit(4)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

export const updateCompany = async (db, region, name) => {
  const compRef = doc(db, "company", name);
  setDoc(compRef, { regions: { [region]: { state: true } } }, { merge: true });
};
