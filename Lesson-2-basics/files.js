const fs = require ("fs");

// read 

/**

fs.readFile('./Docs/Hello.txt', (err,data) => {
if (err) {
    console.log(err);
}
console.log(data.toString());


});
console.log ("Yeah !");

**/

// write


/** 
fs.writeFile ('./Docs/Hello.txt', "Yesh !", () => {

console.log ('file was written')

})

*/


// directories 

/** if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err)=> {
 if (err) {
console.log (err);
 }
 else 
 console.log('Folder successfully created ! ');
})
}
else {
    fs.rmdir('./assets' , (err)=>{
    if (err) {
        console.log(err);
            }
    })
console.log('folder deleted !')
}

*/


// deletefiles

if (fs.existsSync('./Docs/Hello.txt')){
    fs.unlink('./Docs/Hello.txt', (err) => {
        if (err) {
            console.log(err)
        }
        else console.log('file deleted !')
    } )
}
else {

    console.log('file donesnt exist');
}