const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const quotes = require('../src/quotes.json');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Fetch emails from Firestore collection
const db = admin.firestore();
const emailsRef = db.collection('emails');

// Read quotes from JSON file
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  // Configure your email service
  service: 'gmail',
  auth: {
    user: 'krsmith1999@gmail.com',
    pass: 'fpeu aosw kwkx dhvk'
  }
});

// Function to send email to a single user
const sendEmail = async (email, quote) => {
  const mailOptions = {
    from: 'dailyquotez247@gmail.com',
    to: email,
    subject: 'Daily Quote',
    text: `Here's your daily quote:\n\n"${quote.quote}" - ${quote.author}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error);
  }
};

// Main function to send emails to all users
const sendDailyQuotes = async () => {
  try {
    // Fetch emails from Firestore
    const snapshot = await emailsRef.get();
    const emails = snapshot.docs.map(doc => doc.data().email);

    // Get random quote
    const randomQuote = getRandomQuote();

    // Send email to each user
    for (const email of emails) {
      await sendEmail(email, randomQuote);
    }

    console.log('All emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

// Run the script once a day
sendDailyQuotes();
setInterval(sendDailyQuotes, 24 * 60 * 60 * 1000);
