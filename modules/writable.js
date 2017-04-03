const Writable = require("stream").Writable;

class CWritable extends Writable{
	constructor(options){
		super(options);
	}
	
	_write(chunk, encoding, callback){
		process.stdout.write(chunk);
		callback();	
	}

}

module.exports = CWritable;