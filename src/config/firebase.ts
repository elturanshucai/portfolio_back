import admin from "firebase-admin";
import serviceAccount from "../../serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "portfolioproject-27b50.appspot.com"
});

export const bucket = admin.storage().bucket();