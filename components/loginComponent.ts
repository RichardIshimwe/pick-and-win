import firebase_app from "../app/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

interface props {
    email: string,
    password: string 
}

const loginComponent = async ({email, password}: props) => {
let result = null,
    error = null;
    try {
        result = await signInWithEmailAndPassword(auth,email,password);
    } catch (e) {
        error = e;
    }
    return {result, error}
}

export default loginComponent
