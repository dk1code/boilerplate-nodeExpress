const dotenv = require("dotenv")

/** LOAD ENVIRONMENT CONFIGURATION */
  // special variable __dirname always gives us the current directory => "config" in this case)
let envPath = __dirname + "/" 

  // production environment?
  // hint: on deployment services like Heroku or Vercel NODE_ENV will be set to production!
if(process.env.NODE_ENV == "production") {
  envPath += '.env'
}
  // no environment set? assume "development environment" => load local configuration 
else {
  envPath += '.env.dev'
}

// load env file content and store key-value pairs in process.env
let config = dotenv.config({ path: envPath })
console.log(config)
console.log(__dirname)
