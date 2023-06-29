import express from 'express';
import path from 'path';

import { app } from './app.js';
import { __dirname } from './globals.js';

app.use('/static', express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
});