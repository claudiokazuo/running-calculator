const globalConfig = require('./src/config/global')
const app = globalConfig()
const port = 3000

app.listen(port, ()=> console.log(`Server is running on port ${port}`))

