const fs = require ("fs");

const quote = "hello everyone"

// TO CREATE A NEW FILE OF ANY FORMAT

// fs.writeFile("./createfile.html", quote, (err)=>{
//     console.log("file created with the inputs given");
// } );

// const [ , , n] = process.argv;

// const quote2 = " live more, worry less !"

// for (let i=1; i<=n; i++){
//     fs.writeFile(`./backup/text${i}.html`, quote2, (err)=>{
//         console.log("file created with the inputs given");
//     } );
// }

//  TO READ FILE
// fs.readFile("./fun.txt", "utf-8", (err, data)=>{
//     if (err){
//         console.log( "error occureed" (err))
//     } console.log(data);
// });

//  to update or edit the contents inside the existing file

//  const quote3 = "welcome you all"
// fs.appendFile("./fun.txt","\n" + quote3, (k)=>{
//     console.log("completed updating");
// });

// TO GET THE CONTENTS OF ONE FILE AND UPDATE IN ANOTHER FILE

fs.readFile("./mk.txt", "utf-8", (err, data)=>{
    if (err){
        console.log( "error occureed" (err))
    } fs.appendFile("./fun.txt","\n" + (data), (k)=>{
        console.log("completed updating");
    });
});