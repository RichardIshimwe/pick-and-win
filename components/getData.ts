// Assuming the correct path to the 'firebase_app' module and its type declarations
import firebase_app from "../app/config";
import { getFirestore, doc, getDoc, DocumentSnapshot } from "firebase/firestore";

const db = getFirestore(firebase_app);

interface GetDocumentResult {
  result: DocumentSnapshot | null;
  error: Error | null;
}

export default async function getDocument(collection: string, id: string): Promise<GetDocumentResult> {
  let docRef = doc(db, collection, id);

  let result: DocumentSnapshot | null = null;
  let error: Error | null = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e as Error;
  }

  return { result, error };
}
