var http = require("http");
var employeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8083;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    }

    if (req.url === '/') {
        // Display message "<h1>Welcome to Lab Exercise 03</h1>"
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } 
    
    else if (req.url === '/employee') {
        // Display all details for employees in JSON format
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employeeModule));
    } 
    
    else if (req.url === '/employee/names') {
        // Display only all employees {first name + lastname} in Ascending order in JSON Array
        let employeeNames = employeeModule
            .map(emp => `${emp.firstName} ${emp.lastName}`)
            .sort();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employeeNames));
    } 
    
    else if (req.url === '/employee/totalsalary') {
        // Calculate and display the sum of all employees' salary
        let totalSalary = employeeModule.reduce((total, emp) => total + emp.Salary, 0);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ "total_salary": totalSalary }));
    }

    // Handle 404 for all other routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
