const fs= require ('fs');

// read stream

/** 
//const readSream = fs.createReadStream('./Docs/bloc3.txt');
const readSream = fs.createReadStream('./Docs/bloc3.txt', {encoding : 'utf-8'});
readSream.on('data', (chunk) => {
    console.log(' ---- new chunk ! -----');
    //console.log(chunk.toString());
    console.log (chunk);

})

*/

// read & write streams
/** 
//const readSream = fs.createReadStream('./Docs/bloc3.txt');
const writeStram = fs.createWriteStream('./Docs/bloc4.txt');
const readSream = fs.createReadStream('./Docs/bloc3.txt', {encoding : 'utf-8'});
readSream.on('data', (chunk) => {
    console.log(' ---- new chunk ! -----');
    //console.log(chunk.toString());
    console.log (chunk);
    writeStram.write('\n NEW CHUNK : \n');
    writeStram.write(chunk);

})

*/

// pipe

const readSream = fs.createReadStream('./Docs/bloc3.txt');
const writeStram = fs.createWriteStream('./Docs/bloc4.txt');
readSream.pipe(writeStram);