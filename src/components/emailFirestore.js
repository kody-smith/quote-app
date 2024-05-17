import { doc, getDocs, collection, addDoc, QuerySnapshot } from "firebase/firestore";


const querySnapshot = await getDocs(collection(db, "emails"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});