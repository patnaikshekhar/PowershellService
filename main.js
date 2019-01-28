const express = require('express')
const bodyParser = require('body-parser')

// Used for validating the request
const validate = require('./validations')
const ps = require('./powershell')
const log = require('./logger')
const serviceBus = require('./servicebus')

// PORT to run application on
const PORT = process.env.PORT || 80

// Initialize Express Application
const app = express()

// Setup Body Parsing for JSON payloads
app.use(bodyParser.json())

// Start HTTP server listening on port 80
app.listen(PORT, '0.0.0.0', () => console.log('Server started'))

// Map route
app.post('/api/powershell', (req, res) => {
    const scriptName = req.body.scriptName
    const args = req.body.arguments
    const reqId = req.body.requestID

    log.info(`Recieved request for /api/powershell ${JSON.stringify(req.body)}`)

    // Validate request
    if (validate(req, res)) {
        
        // If validation passes then run powershell
        ps(scriptName, reqId, args, (output) => {
            serviceBus.sendMessage({ requestID: reqId, output })
        })
        res.json({
            status: 'success'
        })
    }
})