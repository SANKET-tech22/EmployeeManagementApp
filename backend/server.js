const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check (for Kubernetes readiness/liveness)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Create Employee
app.post('/api/employees', async (req, res) => {
  try {
    const { name, email, department } = req.body;

    const result = await pool.query(
      'INSERT INTO employees (name, email, department) VALUES ($1, $2, $3) RETURNING *',
      [name, email, department]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get All Employees
app.get('/api/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
