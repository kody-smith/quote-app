import { useState } from "react";
import './subscribe.css';
import { auth, db } from "../firebase.js"
import { doc, getDocs, collection, addDoc, QuerySnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const querySnapshot = await getDocs(collection(db, "emails"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

export default function Subscribe() {
    const [email, setEmail] = useState("");
    const nav = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email) {
            try {
                const docRef = await addDoc(collection(db, "emails"), { email });
                console.log("Document written with ID: ", docRef.id);
                alert("Thank you for subscribing!");
                nav("/");
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    }

    return (
        <div id="subscribeContainer">
            <form id="subscribeForm" onSubmit={handleSubmit}>
                <h1 className="form-heading">Get Daily Quote Emails</h1>
                <p className="form-desc">Enter your name and email address to receive daily quote emails.</p>
                <input placeholder="Email" type="email" id="emailInput" onChange={handleEmail}></input>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}
