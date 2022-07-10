const dotenv = require('dotenv')
dotenv.config()

const { mongo, apollo } = require('./app')

const main = async () => {
    await mongo.connect()

    const { app } = require('./app')

    await apollo.start()
    apollo.applyMiddleware({ app })

    const port = process.env.API_PORT || 8000
    const webServer = await app.listen(port, () => console.log(`Graphql listening to port ${port}...`))
    webServer.setTimeout(60000)
}

main()

