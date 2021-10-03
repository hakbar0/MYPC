import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../Config/config.js";

export const signInToFirebase = async () => {
  const { email, password } = authentication;
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
};
