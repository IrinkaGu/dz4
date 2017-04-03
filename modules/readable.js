const Readable = require("stream").Readable;
const random = require("./random");

class CReadable extends Readable{
	constructor(options){
		super(options);
		this.max = 9;
		this.min = 0;
	}
	
	_read(){
		this.push(random(this.min, this.max).toString());	
	}

}

module.exports = CReadable;