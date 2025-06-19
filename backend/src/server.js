import express from "express"
import dotenv from 'dotenv'
import router from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";

dotenv.config()

const app = express();

const port = process.env.PORT || 5001;

//Middleware
app.use(express.json());

connectDB()

//router
app.use("/api/notes", router)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
