const CReadable = require('./modules/readable');
const CWritable = require('./modules/writable');
const CTransform = require('./modules/transform').CTransform;

//Дополнительное задание

const input = new CReadable();
const transform = new CTransform();
const output = new CWritable();

input.pipe(transform).pipe(output);