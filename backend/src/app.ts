import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// API routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

export default app; 