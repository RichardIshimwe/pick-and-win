// Import the necessary functions
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from './config';

// Initialize the Firestore instance
const db = getFirestore(firebaseApp);


// Function to get all documents from a collection
async function getAllDocuments(collectionName: string) {
  let result = null;
  let error = null;

  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    result = snapshot.docs.map((doc) => doc.data());
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export default getAllDocuments;
