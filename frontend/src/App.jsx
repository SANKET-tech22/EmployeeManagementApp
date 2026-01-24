import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: ''
  });

  const fetchEmployees = async () => {
    const res = await axios.get(`${API_URL}/api/employees`);
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/api/employees`, form);
    setForm({ name: '', email: '', department: '' });
    fetchEmployees();
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Employee Management System</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} — {emp.email} — {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
