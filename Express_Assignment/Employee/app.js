const { log, error } = require('console');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const employees = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/addEmployee', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_employee.html'));
});
app.get('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thankyou.html'));
});

app.get('/update_emp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'update_emp.html'));
});

app.get('/employee/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view_employee.html'));
});

app.get('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    const employee = employees.find(emp => emp.EmployeeID == id);
    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
});

app.delete('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    const index = employees.findIndex(emp => emp.EmployeeID == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    employees.splice(index, 1);
    res.status(204).send();
});

app.put('/update', (req, res) => {
    console.log(req.body.id)
    const id= req.body.id
    const employee = employees.find(e => e.id === parseInt(id));
    if (employee) {
        const { name, role, doj } = req.body;
        if (!name || !role || !doj) {
            return res.status(400).send('All fields are required');
        }
        employee.name = name;
        employee.role = role;
        employee.doj = doj;
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
});



app.post('/employee', (req, res) => {
    const { EmployeeID, name, role, dateOfJoin } = req.body;
    const newEmployee = { EmployeeID, name, role, dateOfJoin };
    employees.push(newEmployee);
    res.redirect('/thankyou');
});
port=3007;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
