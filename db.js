const firebase = require('firebase-admin');
const config = require('./config');
const serviceAccount = require('./fir-test-ec601-firebase-adminsdk-88778-9f54708b64.json');
const db = firebase.initializeApp({
    credential:firebase.credential.cert(serviceAccount),
    databaseURL: "https://fir-test-ec601-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = {
    db
};