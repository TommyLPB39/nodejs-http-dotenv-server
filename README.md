# nodejs-http-dotenv-server
🔨 A simple node.js HTTP server with dotenv to configure the port and IP address from an .env file.

🧩 Uses the default IP (*127.0.0.1*) and port (*3000*)

## Prerequisites
- Node.js
- Dotenv

## Launch
Change the values in ```server.env.example``` or use the default values.

Start the server with the command ```node server.js```

**⚠️ • Remember to rename the file ```server.env.example``` to ```server.env```. Remember to also change the path in : ```dotenv.config({ path: 'server.env.exemple' })```**
