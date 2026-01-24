// const express = require('express');
// const cors = require('cors');
// const pool = require('./db');


// const app = express();
// const PORT = process.env.port || 5000;

// app.use(cors());
// app.use(express.json());


// // Health checkpoint endpoint () for kubernetes probes)
// app.get('/health', (req ,res)=>{
//     res.status(200).send('OK');
// });


// // Create Employee
// app.post('/api/employee', async( req,res)=>{
//     try{
//       const{name,email,department} = req.body;

//       const result = await pool.query(
//         'INSERT INTO employees (name, email, department) VALUES ($1, $2, $3) RETURNING * ',
//         [name, email, department]
//       );

//       res.status(201).json(result.rows[0]);
//     }catch (err) {
//         console.error(err.message);
//         res.status(500).json({error:err.message});
//     }
// });



// // GET ALL EMPLOYEES
// app.get('/api/employees', async (req, res)=>{
//     try{
//         const result = await pool.query('SELECT * FROM employees');
//         res.json(result.rows);
//     }catch (err) {
//         console.log(err.message);
//         res.status(500).json({error:err.message});
//     }
// });


// app.listen(PORT, ()=>{
//     console.log(`Backend running on port${PORT}`);
// });













const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory storage (temporary)
let employees = [];

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Create employee
app.post('/api/employees', (req, res) => {
  const { name, email, department } = req.body;

  const employee = {
    id: employees.length + 1,
    name,
    email,
    department
  };

  employees.push(employee);

  res.status(201).json(employee);
});

// Get all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
