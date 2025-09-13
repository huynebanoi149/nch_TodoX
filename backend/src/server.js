import express from 'express';

import tasksRoutes from './routes/tasksRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();

//middleware
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

if(process.env.NODE_ENV !== "production"){
app.use(cors({origin : "http://localhost:5173"}));

}

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
}







connectDB().then (() =>{
    app.listen(PORT, () => {
    console.log(`Server da chay tren cong ${PORT}`);
    }); 
})

 
