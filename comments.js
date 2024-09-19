// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const url = require('url');

// Função para manipular as requisições
function requestHandler(req, res) {
    const parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, este é o servidor web!');
}

// Criar o servidor
const server = http.createServer(requestHandler);

// Configurar o servidor para escutar na porta 3000
server.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});