const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Asegúrate de que la ruta sea correcta

// Eliminar una tarea por su ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;

    // Verificar si la tarea existe por su ID
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'No se encontró la tarea' });
    }

    // Eliminar la tarea de la base de datos
    await Task.deleteOne({ _id: taskId });

    res.json({ message: 'Tarea eliminada exitosamente', task });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea', details: error.message });
  }
});

module.exports = router;

