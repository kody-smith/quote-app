import React, { useEffect, useState } from "react";
// import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase.js"
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
// import { uid } from "uid";
// import { set,ref, onValue, remove, update } from "firebase/database";
import './homepage.css';
import quotes from "../quotes.json";
import IosShareIcon from '@mui/icons-material/IosShare';


export default function Homepage() {
    const [data, setData] = useState(quotes);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const nav = useNavigate();


    useEffect(() => {
        // Fetch the data from the JSON file
        fetch("/quotes.json")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    useEffect(() => {
        // Set initial quote and author when data is loaded
        if (data.length > 0) {
            const randomElement = getRandomElement(data);
            setQuote(randomElement.quote);
            setAuthor(randomElement.author);
        }
    }, [data]);

    const getRandomElement = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomElement = data[randomIndex];
        return randomElement;
    }

    const handleClick = () => {
        const randomElement = getRandomElement();
        setQuote(randomElement.quote);
        setAuthor(randomElement.author);
    };


    return (
        <>
       <div id="homepageContainer">
            <div id="quoteContainer">
                <h1 className="page-title">Daily Quote</h1>
                <h2 className="quote">"{quote}"</h2>
                <p className="author">{author}</p>
                <button className="new-btn" onClick={handleClick}>+ New Quote</button>
                {/* <IosShareIcon className="share-btn">Share</IosShareIcon> */}
                <p className="subscribe-anchor">Want Daily Quote Emails? <a href="/subscribe" className="subscribe-link">Subscribe Here</a></p>
            </div>
        </div>
        </>
    );
}