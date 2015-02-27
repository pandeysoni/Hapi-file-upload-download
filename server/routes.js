// Load modules

var	UD = require('./controller/uploadDownload'),
	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

	{ method: 'GET',  path: '/{somethingss*}', config: Static.get },
    // { method: 'GET', path: '/', config: UD.display_form},
    { method: 'POST', path: '/upload', config: UD.uploadFile},
    { method: 'GET', path: '/get/{file}', config: UD.getFile},
    { method: 'GET', path: '/fileList', config: UD.fileList}
];