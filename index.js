const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log('Incoming message from', rinfo.address, 'on port', rinfo.port);
    console.log( 'Message:', msg.toString())});

// try nslookup 

server.bind(53, () => {
    console.log('DNS Server is running on port 53');
});

//nslookup @localhost  