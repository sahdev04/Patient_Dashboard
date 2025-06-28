const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === data.user.email && password === data.user.password) res.json({ success: true, user: data.user });
  else res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.get('/dashboard', (req, res) => res.json(data.dashboard));
app.get('/shipments', (req, res) => res.json(data.shipments));

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
