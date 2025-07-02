import express from 'express';
import connectDB from './lib/db.js';
import dotenv from 'dotenv';
import cors from "cors";

import routes from "./routes/email.routes.js"
import path from "path";


const _dirname = path.resolve();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
     origin:"http://localhost:5173",
     credentials:true
}
));

// Middleware
app.use(express.json());


// Routes
app.use('/api',routes)


//files samal
app.use(express.static(path.join(_dirname, "../frontend/dist"))); 
//jaa rha file ke pass


app.get("*", (req, res) => {
res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"));
});
// laa rhafile

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`,
        connectDB()
    );
});