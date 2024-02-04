const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Define your Express routes
app.get('/hello', (req, res) => {
  res.send('Hello from Firebase!');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('An error occurred!');
});

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
