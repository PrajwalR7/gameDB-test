const {db} = require('../db');
const Patient = require('../models/patient');
const {getFirestore} = require('firebase/firestore')

const firestore = db.firestore();

const addPatient = async (req, res) => {
    try {
        const data = req.body;
        const hname = data.hname;
        console.log(data);
        const hospref = await firestore.collection('hospital').where('name','==',`${hname}`).get();
        const hidarray = hospref.docs.map(data => data.id);
        data.hid = hidarray[0];
        console.log(data.hid);
        console.log(data);
        await firestore.collection('patient').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllPatient = async (req, res) => {
    try {
        const data = await firestore.collection('patient').get();
        const patientArray = [];
        if(data.empty) {
            res.status(404).send('No patient record found');
        }else {
            data.forEach(doc => {
                const patient = new Patient(
                    doc.id,
                    doc.data().name,
                    doc.data().age,
                    doc.data().hname,
                    doc.data().hid
                );
                patientArray.push(patient);
            });
            res.send(patientArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addPatient,
    getAllPatient
}