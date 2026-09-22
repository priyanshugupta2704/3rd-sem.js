const fs=require('fs');
fs.writeFileSync('example.txt','this is experiment 2 in FSD workshop','utf8');
console.log('create file run successfully');
// const data =fs.readFileSync('example.txt','utf8');
// console.log('file content is :',data);
fs.appendFileSync('example.txt','\nthis is appended data in example.txt file','utf8');
console.log('Example Fileis appended ');
fs.unlinkSync('example.txt');
console.log('Example file is deleted ');
fs.mkdirSync('sample folder');
console.log('a new folder is created');
fs.rmdirSync('sample folder');
console.log('sample folder is deleted');
if (fs.existsSync('example.txt')) {
    console.log('file is exist');
}   
else {
    console.log('file is not found ,need to create this file');
}
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
console.log('error in reading file',err);
    }
    console.log('file content is :',data);
})
// append 
fs.appendFile('sample.txt','\nsemester 3',(err) =>{
    if(err){
        console.log('error in updating file: ',err);
    }
    else{
        console.log('file is updated successfully!');
    }
})
// delete
fs.unlink('example.txt',(err)=>{
    if(err){
        console.log('error in deleting file: ',err);
    }
    else{
        console.log('file is deleted successfully!');
    }
})