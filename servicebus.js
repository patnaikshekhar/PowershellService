const azure = require('azure')
const log = require('./logger')

const QUEUE_NAME = process.env.QUEUE || 'powershellresults'

const service = azure.createServiceBusService()


module.exports = {
    sendMessage: (msg) => {

        const message = {
            body: JSON.stringify(msg)
        }

        log.info(`Sending message to queue ${message.body}`)

        service.sendQueueMessage(QUEUE_NAME, message, (err) => {
            if (err) {
                log.error(`Error writing to queue ${err.toString()}`)
            } else {
                log.info(`Sent message to queue successfully ${message.body}`)
            }
        })
    }
}
