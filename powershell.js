const shell = require('node-powershell')

const log = require('./logger')

const SCRIPTS_PATH = process.env.SCRIPTS_PATH || 'c:\\SCRIPTS'

module.exports = (scriptName, reqId, args, callback) => {
    let ps = new shell({
        executionPolicy: 'Bypass',
        noProfile: true
    })
    
    // Set the command for the script
    ps.addCommand(`${SCRIPTS_PATH}\\${scriptName} ${args ? args : ''}`)

    log.info(`Running powershell for ${reqId}`)

    ps.invoke()
        .then(output => {
            callback(output)
        })
        .catch(e => log.error(`Error running powershell ${e.toString()}`))
}