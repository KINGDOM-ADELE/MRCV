// CREATE A SERVER
// const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})



const app = require('./app')



let  HOST;
 if(process.env.NODE_ENV === "development"){
    console.log("NODE_ENV: development")
    HOST = process.env.DEV_HOST
}
else{
    console.log("NODE_ENV: production")
    HOST = process.env.PROD_HOST 
}


    

const port = process.env.PORT || 7300
const serverName = "Kingdom_Portfolio"
const server = app.listen(port, () => {
    const host= server.address().address 
    console.log(`${serverName} server already running on port ${port}`)
    console.log(`server URL: http://${host}:${port}`)
    console.log(`client URL: http://${HOST}`)

})