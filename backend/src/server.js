import express from "express"
import router from "./routes/notesRoutes.js";

const app = express();

const port = 5001;

//Middleware
app.use(express.json());

//router
app.use("/api/notes", router)


app.listen(port, () => {
    console.log("Server started on port 5001");
});
