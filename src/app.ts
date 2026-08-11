import express from 'express';
import dotenv from 'dotenv';
import studentsRoutes from "./routes/studentsRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/crud', studentsRoutes );

app.listen(PORT, () => {
    console.log(`serveur demarré sur http://localhost:${PORT}`)

});

export default app;



