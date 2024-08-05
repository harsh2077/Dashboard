const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json({ limit: '10mb' }));
//express.json({ limit: '10mb' })
// MongoDB connection 
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);
// Route to insert data
// app.post('/api/data', async (req, res) => {
//   try {
//       const insertedData = await DataModel.insertMany(data);
//       res.status(201).json(insertedData);
//   } catch (error) {
//       res.status(500).json({ message: 'Error inserting data', error });
//   }
// });
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
