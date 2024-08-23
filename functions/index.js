/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const Filter = required("bad-words");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

//Function to detect evil users
//This function will be triggered when a new message is created
exports.detectEvilUsers = functions.firestore
  .document("messages/{msgId}")
  .onCreate(async (doc, ctx) => {
    const filter = new Filter();
    const { text, uid } = doc.data();
    if (filter.isProfane(text)) {
      const cleaned = filter.clean(text);
      await doc.ref.update({ text: `Ah ah ah, ${cleaned} is not allowed!` });
      await db.collection("banned").doc(uid).set({});

      const userData = (await userRef.get()).data();

      if (userData.msgCount >= 7) {
        await db.collection("banned").doc(uid).set({});
      } else {
        await userRef.set({ msgCount: (userData.msgCount || 0) + 1 });
      }
    }
  });
