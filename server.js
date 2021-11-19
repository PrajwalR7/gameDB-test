const express = require('express');
const cors = require('cors')
const config = require('./config')
const hospRoute = require('./routes/hosp-route')
const patroute = require('./routes/patient-route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/hospital',hospRoute.routes)
app.use('/patient',patroute.routes)

app.listen(config.port ,() => {
    console.log(`Server listening at port ${config.port}`);
});

