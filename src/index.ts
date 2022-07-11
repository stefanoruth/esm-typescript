import fetch from 'node-fetch'
import pino from 'pino'

const logger = pino()

async function run() {
    logger.info('Test')
    console.log(await (await fetch('https://icanhazip.com')).text())
}

run().catch(console.error)
