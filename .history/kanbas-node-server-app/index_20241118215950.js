import express from 'express';
const express = require('express')
const app = express()
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {
  res.send('Welcome tofd Full Stack Development!')})
app.listen(4000)