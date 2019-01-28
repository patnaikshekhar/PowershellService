# Powershell Service for Logic Apps

This is a service that can be called via a custom logic app connector to run a Powershell script in a container or in a VM (Windows based). After the script runs it puts the result into a service bus queue.

## Usage

If installed on a VM then it needs [node](https://nodejs.org/en/download/) to be installed.

```powershell
$env:SCRIPTS_PATH = 'C:\Scripts'
$env:PORT = 8080
$env:QUEUE = 'scriptresults'
$env:AZURE_SERVICEBUS_CONNECTION_STRING = 'put your endpoint for the service bus'

node main.js

```