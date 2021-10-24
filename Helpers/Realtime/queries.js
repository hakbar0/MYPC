import { ref, update } from "@firebase/database";

export const updateRT = async (db, key, client, type) => {
  client.sent = true;
  const updates = {};
  updates[`/${type}/${key}/`] = client;
  return update(ref(db), updates);
};
