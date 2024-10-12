const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const corsOptions = {
	origin: '*', // Allow only requests from this origin
	methods: 'GET,POST, PUT', // Allow only these methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
};

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.error('Failed to connect to MongoDB', err);
	});

// Routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

const benificiaryRoutes = require('./routes/benificiary');
app.use('/api/benificiary', benificiaryRoutes);

const policyRoutes = require('./routes/policy');
app.use('/api/policy', policyRoutes);

const applicationRoutes = require('./routes/application');
app.use('/api/application', applicationRoutes);

const queryRoutes = require('./routes/query');
app.use('/api/query', queryRoutes);

const messageRoutes = require('./routes/message');
app.use('/api/message', messageRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
