import { createServer } from 'node:http';
import dotenv from 'dotenv'

// Configuring the env file path
dotenv.config({ path: 'server.env.exemple' })

// Create port and ip variables that are equal to the port
let port = Number(process.env.PORT)
let ip = process.env.IP

// Displays a port and/or IP if found

if(port) {
    console.log("Port found = " + process.env.PORT)
}

if(ip) {
    console.log("IP found = " + process.env.IP)
}

// Displays that the port and/or IP cannot be found, and sets default values.

if(!port) {
    console.log("Port found = Not found")
    console.log(`No port was found in .env, so it was launched on port: 3000\n`)
    port = 3000
}

if(!ip) {
    console.log("IP found = Not found")
    console.log(`No IP address was found in .env, so it was launched on the IP address: 127.0.0.1\n`)
    ip = "127.0.0.1"
}

// It starts the server on the IP and port specified in server.env.example.

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node.js server with dotenv\n');
});

server.listen(port, ip, () => {
  console.log(`Server started on ${ip}:${port}`);
});
