import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser =  (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser =  () => {
  return auth.signOut(); //auth object, signOut function
};
