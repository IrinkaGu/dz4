const Transform = require("stream").Transform;
const crypto = require('crypto');

class CTransform extends Transform{
	constructor(options){
		super(options);
	}
	
	_transform(chunk, encoding, callback){
		setTimeout (() => {
		this.push(`"${chunk}";`);	
			callback();	
		}, 1000 * 1)	
	}

}

class CTransformHash extends Transform{
	constructor(options){
		super(options);
	}
	
	_transform(chunk, encoding, callback){
		let hash = crypto.createHash('md5');
		this.push(hash.update(chunk).digest("hex"));	
		callback();		
	}

}

module.exports = {
		CTransform,
		CTransformHash
	}