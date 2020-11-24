const express = require('express');
const dotenv = require('dotenv');

// Load config file
dotenv.config({ path: __dirname + '/config/config.env' });

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Parser setup
app.use(express.json());

// Mount Routers
app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
