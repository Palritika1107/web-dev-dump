const fs = require('fs');

//reading
// fs.readFile("./docs/ninjas.txt",(err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//     console.log(data.toString());
//     }
// })


//writing
// fs.writeFile("./docs/ninjas.txt","hello ritika!",(err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("written to file");
//     }
// })

//create directory
// if(!fs.existsSync('./assest')){
//     fs.mkdir('./assest',(err) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("folder created");
//         }
//     })
// }else{
//     fs.rmdir('./assest',(err) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("folder deleted");
//         }
//     } );
    
// }


//delete file

if(fs.existsSync('./docs/deleteme.txt')){
fs.unlink('./docs/deleteme.txt',(err) => {
    if(err){
        console.log(err);
    }else{

        console.log("file deleted");
    }
})


}

