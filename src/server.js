const express = require('express');
const { findUserByName } = require('./db');
const { exportUser } = require('./export');

const app = express();

app.get('/health', (req, res) => res.json({ ok: true }));

app.get('/users/:name', async (req, res) => {
  const user = await findUserByName(req.params.name);
  if (!user) return res.status(404).json({ error: 'not found' });
  res.json(user);
});

app.get('/export', exportUser);

app.listen(process.env.PORT || 3000);
