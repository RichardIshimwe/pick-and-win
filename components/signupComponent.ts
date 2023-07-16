import firebase_app from "../app/config";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(firebase_app);

interface props {
  email: string,
  password: string
}

const signupComponent = async ({email, password}:props) => {
    let result = null,
        error = null;
      try {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
        error = e;
      }
      return {result, error}
}

export default signupComponent
