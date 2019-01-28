const log = require('./logger')

module.exports = (req, res) => {
    const scriptName = req.body.scriptName
    const reqId = req.body.requestID

    let message

    if (!reqId) {
        message = 'requestID is missing in the request'
        log.error(`Request validations failed for ${reqId} with the message ${message}`)

        res.status(400).json({
            error: message
        })

        return false
    }

    if (!scriptName) {
        message = 'scriptName is missing in the request'
        log.error(`Request validations failed for ${reqId} with the message ${message}`)

        res.status(400).json({
            status: 'error',
            error: message
        })

        return false
    }

    log.info(`Request validations passed for ${reqId}`)

    return true
}