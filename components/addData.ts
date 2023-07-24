// Assuming the correct path to the 'firebase_app' module and its type declarations
// import firebase_app from "../config";
import firebase_app from "../app/config";
import { getFirestore, doc, setDoc, FirestoreDataConverter } from "firebase/firestore";

const db = getFirestore(firebase_app);

interface AddDataResult {
  result: void;
  error: Error | null;
}

export default async function addData(collection: string, id: string, data: any): Promise<AddDataResult> {
  let result: void | undefined;
  let error: Error | null = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e as Error;
  }

  return { result, error };
}
