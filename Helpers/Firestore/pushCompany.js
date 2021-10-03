import { doc, setDoc } from "firebase/firestore/lite";

export const pushCompany = async (db) => {
  const company = {
    setup: new Date().toLocaleDateString(),
    contact: {
      website: "mypropertyconveyancer.co.uk",
      location: "Manchester",
      email: "test@hotmail.com",
      shortName: "legalseat",
      logo: "mypropertyconveyancer.co.uk",
    },
    monthlyLimit: { currentMonth: 0, limit: 30 },
    sale: {
      disbursements: { officialCopies: 20 },
      price: {
        100000: 1,
        200000: 2,
        300000: 3,
        500000: 4,
        700000: 5,
        1000000: 6,
      },
      fixedFees: { ttFee: 1, mortgageFee: 3, leaseholdFee: 2 },
    },
    regions: {
      westMidlands: { covered: true, state: true },
      yorkshireAndTheHumber: { covered: true, state: true },
      northEast: { covered: true, state: true },
      eastOfEngland: { covered: true, state: true },
      southEast: { state: true, covered: true },
      northWest: { covered: true, state: true },
      london: { covered: true, state: true },
      southWest: { state: true, covered: true },
      eastMidlands: { covered: true, state: true },
    },
    active: true,
    remortgage: {
      price: {
        100000: 1,
        200000: 1,
        300000: 1,
        500000: 1,
        700000: 1,
        1000000: 1,
      },
      fixedFees: { ttFee: 1 },
      hmLandRegistry: {
        80000: 1,
        100000: 1,
        200000: 1,
        500000: 1,
        1000000: 1,
        Other: 1,
      },
      disbursements: {
        officialCopies: 3,
        landRegistrySearch: 1,
        bankruptcySearch: 2,
      },
    },
    integrations: { dropbox: false, whatsapp: false },
    purchase: {
      disbursements: {
        bankruptcySearch: 20,
        lawyerChecker: 20,
        searchPack: 20,
        landRegistrySearch: 20,
      },
      fixedFees: { ttFee: 20, mortgageFee: 20, leaseholdFee: 20 },
      hmLandRegistry: {
        80000: 1,
        100000: 2,
        200000: 3,
        500000: 4,
        1000000: 5,
        other: 6,
      },
      price: {
        100000: 1,
        200000: 2,
        300000: 3,
        500000: 4,
        700000: 5,
        1000000: 6,
      },
    },
  };

  await setDoc(doc(db, "company", company.contact.shortName), company);
};
