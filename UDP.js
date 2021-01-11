const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message',(msg , info)=> {
    console.log(`server received : ${msg} from ${info.address}: ${info.port}`)
});
socket.bind(8093);

/* 
Connect to UDP server from terminal:
echo "Hi Server, from command line" |  nc -w1 -u 127.0.0.1 8091
*/

/*
OUTPUT 
 server received : Hi Server, from command line
 from 127.0.0.1:56009
 */
