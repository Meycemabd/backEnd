const http = require("http");
const PORT = 8000;
const host = "127.0.0.1";

// Eine Liste von Clients
const clients = [
  { id: 1, name: "Paulo" },
  { id: 2, name: "Meycem" },
  { id: 3, name: "Farouk" },
  { id: 4, name: "Mateus" },
  { id: 5, name: "Med" },
];

// Erstelle einen HTTP-Server
const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/clients") {
    // GET-Anfrage: Liefere die Clientliste als JSON
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(clients));
  } else if (request.method === "POST" && request.url === "/clients") {
    // POST-Anfrage: Füge einen neuen Client hinzu
    response.writeHead(201, { "Content-Type": "application/json" });
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      clients.push(JSON.parse(body));
      response.end(JSON.stringify(clients));
    });
  } else if (request.method === "DELETE" && request.url.includes("delete")) {
    // DELETE-Anfrage: Entferne einen Client anhand der ID
    response.writeHead(202, { "Content-Type": "application/json" });
    let deletedId = request.url.split("/")[2];
    let index = clients.findIndex((client) => client.id === +deletedId);
    if (index !== -1) {
      let deletedClient = clients.splice(index, 1)[0];
      response.end(JSON.stringify(clients));
    } else {
      response.end(JSON.stringify({ error: "Element not found" }));
    }
  } else if (request.method === "PUT" && request.url.includes("update")) {
    // PUT-Anfrage: Aktualisiere einen Client anhand der ID
    response.writeHead(201, { "Content-Type": "application/json" });
    let params = request.url.split("/");
    // Hier könntest du die Logik für die Aktualisierung ergänzen
  }
});

// Starte den Server
server.listen(PORT, host, () => {
  console.log(`Server läuft unter http://${host}:${PORT}`);
});