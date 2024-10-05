const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log('Incoming message from', rinfo.address, 'on port', rinfo.port);
    console.log('Message:', msg.toString());

    // You can respond to the client here
    const response = Buffer.from('Hello from DNS Server');
    server.send(response, rinfo.port, rinfo.address, (err) => {
        if (err) console.error('Error sending response:', err);
        else console.log('Response sent');
    });
});

server.on('error', (err) => {
    console.error('Server error:', err);
    server.close();
});

server.bind(53, () => {
    console.log('DNS Server is running on port 53');
});
