import express from 'express';
import connectDB from './lib/db.js';
import dotenv from 'dotenv';
import cors from "cors";

import routes from "./routes/email.routes.js"
import path from "path";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();


app.use(cors({
     origin:"http://localhost:5173, https://emailcollecter.onrender.com",
     credentials:true
}
));

// Middleware
app.use(express.json());


// Routes
app.use('/api',routes)


//files samal



if(process.env.NODE==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist"))); 

app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

};


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`,
        connectDB()
    );
});
