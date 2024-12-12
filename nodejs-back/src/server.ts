import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import compression from 'compression';
import routes from './routes/api.routes';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;

// compressing requests to minimize sizes
app.use(compression())

const corsEnabled: string[] = ['*']
app.use(cors({
    origin: corsEnabled,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-reset-token', 'x-invite-token', 'x-api-key', 'x-www-form-urlencoded'],
    credentials: true
}));

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Node.js!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});