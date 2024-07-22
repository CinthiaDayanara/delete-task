const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3009;

const uri = 'mongodb+srv://admin:admin@cluster0.acc1is2.mongodb.net/task_db?retryWrites=true&w=majority&appName=Cluster0';;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error('Error al conectar a MongoDB Atlas:', error.message));

// Middleware para JSON
app.use(express.json());


app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Rutas
app.use('/api', taskRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
