const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {

    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const body = request.url;
    fs.readFile(body, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            response.end(data);
        }
    });
});

const port = process.env.PORT || 7777;

server.listen(port);

console.log(`Server started on port ${port}!`);