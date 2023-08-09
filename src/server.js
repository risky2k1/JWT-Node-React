import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8081
//config viewengine
configViewEngine(app)

//init web routes
initWebRoutes(app)


app.listen(PORT, () => {
    console.log('JWT is running successfully on port:' + PORT);
})

