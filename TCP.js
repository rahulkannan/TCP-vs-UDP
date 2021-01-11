const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Hi from TCP Server');
    socket.pipe(socket);
});

server.listen(8089, '127.0.0.1');

/* netcat 127.0.0.1 8089
Connect with TCP client from command line using netcat.
Output:
Hi from TCP Server
*/

const client = new net.Socket();

client.connect(8089, '127.0.0.1', () => {
    console.log('Connecting with TCP server');
    client.write('\nHello server from client');
});

client.on('data', (data) => {
    console.log('Received from server: ' + data);
    client.destroy();
});

client.on('client', () => {
    console.log('Connection closed.')
});

/*
OUTPUT :
Connecting with TCP server
Received from server: Hi from TCP Server
Hello server from client
*/