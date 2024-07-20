const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3009;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/task_db', {
 
});

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/api', taskRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
