const fs = require('fs');
const crypto = require('crypto');
const CTransformHash = require('./modules/transform').CTransformHash;

const transformHash = new CTransformHash();

const FILE_SOURCE = "file_source.txt";
const FILE_RES = "file_res.txt";

var streamR = fs.ReadStream(FILE_SOURCE,"utf-8");
var streamW = fs.createWriteStream(FILE_RES);

streamR.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("Файл не найден");
    } else {
        console.error(err);
    }
});

//Часть 1

let hash = crypto.createHash('md5'); 
let hashP1 = streamR.pipe(hash);

hashP1.pipe(process.stdout);
hashP1.pipe(streamW);
 

//Часть 2

let hashP2 = streamR.pipe(transformHash);
hashP2.pipe(streamW);
hashP2.pipe(process.stdout);