const {db} = require('../db');
const Hospital = require('../models/hospital');
const {getFirestore} = require('firebase/firestore')

const firestore = db.firestore();

const addHospital = async (req, res) => {
    try {
        const data = req.body;
        await firestore.collection('hospital').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllHospital = async (req, res) => {
    try {
        const data = await firestore.collection('hospital').get();
        const hospArray = [];
        if(data.empty) {
            res.status(404).send('No hospital record found');
        }else {
            data.forEach(doc => {
                console.log("in for each")
                let record = new Hospital(
                    doc.id,
                    doc.data().name
                );
                hospArray.push(record);
            });
            res.send(hospArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addHospital,
    getAllHospital
}