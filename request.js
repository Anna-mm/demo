// import { request } from 'http';
const http = require('http');

const requestOptions = {
    method: 'get',
    protocol: 'http:',
    host: 'ff.baidu-int.com',
    path: `/utopia/cpdOnline/moduleInfo`,
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(requestOptions, res => {
    res.setEncoding('utf8');

    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', (e) => {
        // const parsedBody = JSON.parse(body);

        console.log(`body : ${body}`);
    });

    res.on('error', e => {
        console.error(`get started cards error with e: ${e}`);
    });
});

req.end();

req.on('error', e => {
    console.error(`get started cards error with message: ${e.message}`);
});