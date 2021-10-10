import {
  collection,
  query,
  where,
  getDocs,
  limit,
  doc,
  setDoc,
  increment,
  orderBy,
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

export const updateCompany = async (db, region, name, state) => {
  const compRef = doc(db, "company", name);
  setDoc(compRef, { regions: { [region]: { state } } }, { merge: true });
};

export const getSentCompanies = async (region, db, lim) => {
  let docs = [];
  let lims = 4 - lim;
  const q = query(
    collection(db, "company"),
    where(`regions.${region}.covered`, "==", true),
    where(`regions.${region}.state`, "==", true),
    limit(lims)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

export const coverByRegion = async (region, db) => {
  let docs = [];
  const q = query(
    collection(db, "company"),
    where(`regions.${region}.covered`, "==", true)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

export const updateCompanyCount = async (db, name) => {
  const compRef = doc(db, "company", name);
  setDoc(
    compRef,
    { monthlyLimit: { currentMonth: increment(1) } },
    { merge: true }
  );
};
