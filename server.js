const express = require('express');
const mongoose = require('mongoose');
const Todo=require('./models/Todo');
const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/todoDB')
  .then(() => {
    console.log('Connected to MongoDB');

    // Add
    const todo = new Todo({ title: 'Initial todo for schema verification ' });
   todo.save();
  })
  .then(() => {
    console.log('Manual todo inserted successfully');

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error:', err.message);
  });