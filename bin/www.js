#!/usr/bin/env node
// const dotenv = require('dotenv');
const app = require('../index');
// dotenv.config();
console.log('www is working')
const port = 8081;
app.set('port', port )


// const server = app.listen(port, () => {
// 	console.log('🚀 Server ready at Port ' + port )
// })
// console.log('server is',server)