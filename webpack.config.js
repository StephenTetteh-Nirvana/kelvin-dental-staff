const path = require('path')


module.exports = {
    entry: {
     index: './index.js',
     patientsList: './List Patients/script.js',
     futureAppointments: './Future Appointments/script.js',
     pastAppointments: './Past Appointments/script.js'
    },
    output: {
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    mode:"development"
}
