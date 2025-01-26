import express from 'express';

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes
import notificationRoutes from './routes/notification.route';

app.use('/notification' , notificationRoutes);

export default app;