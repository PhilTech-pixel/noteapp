import express from "express"
import dotenv from 'dotenv'
import router from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()

const app = express();

const port = process.env.PORT || 5001;

//Middleware
app.use(express.json());
app.use(rateLimiter)


//router
app.use("/api/notes", router)


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})



