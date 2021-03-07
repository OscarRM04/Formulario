const express = require('express');
const router = express.Router();

const Task = require('../models/tareas');

router.get('/', async (req,res) => {
   const tasks = await Task.find();
   console.log(tasks);
   res.render ('index');
});


router.post('/add', async(req,res) => {

   const task = new Task(req.body);
   await task.save();
   res.send('recibido');
});

router.get('/cv',(req,res) =>{
   res.render('cv');
});

module.exports = router;