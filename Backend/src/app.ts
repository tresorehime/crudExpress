import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentsRoutes from "./routes/StudentsRoutes";
import userRoutes from "./routes/UserRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use('/crud', studentsRoutes );
app.use('/auth', userRoutes);

app.listen(PORT, () => {
    console.log(`serveur demarré sur http://localhost:${PORT}`)

});

export default app;



