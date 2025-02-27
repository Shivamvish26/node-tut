// const app = require("./app");
// const colors = require("colors");

// console.log("Hello World".red);

// var a = 20;
// var b = 30;
// var c = a + b;
// console.log(c);

// var a = 20;
// if(a === 20)
// {
//     console.log("matched");
// }
// Output is matched because we are using === operator which is used for comparing the values and data types.

// var b = '20';
// if(b === 20)
// {
//     console.log("matched");
// }
// No output of the above coce because the value of b is string and we are comparing it with number.
// So, it will not match.

// var c = "20";
// if (c == 20) {
//   console.log("matched");
// }
// Output is matched because we are using == operator which is used for comparing the values only.
// It will not check the data type. It will only check the values. So, the output is matched.

// Array
// var a = [2,3,4,5,6,7,8,9]
// console.log(a[0]);
// console.log(app.z());

// const http = require("http");

// const datatcontrol = (req, resp) => {
//   resp.write("<h1>Hello World</h1>");
//   resp.end();
// };

// http.createServer(datatcontrol).listen(3000);

// console.log("Hello World".red);
// console.log("Hello Shubham".blue);

// Making basic server

// const http = require("http");
// const app = require("./app");
// http.createServer((req, resp) => {
//   resp.writeHead(200,{'Content-Type':'application/json'})
//   resp.write(JSON.stringify(app));
//   resp.end();
// }).listen(3000);

// console.log(process.argv[2]);

// const fs = require("fs");
// const path = require("path");
// const dirname = path.join(__dirname, "CRUD");
// const filepath = `${dirname}/example.txt`;

// To create the file
// fs.writeFileSync(filepath, "Hello World");

// To read the file
// fs.readFile(filepath,'utf8',(err,item)=>{
//   console.log(item)
// })

// To update the file
// fs.appendFile(filepath, "Hello Shubham",(err)=>{
//   if(!err)console.log("Data Added Successfully")
// })

// To Rename the file
// fs.rename(filepath, `${dirname}/example2.txt`, (err) => {
//   if (!err) console.log("File Renamed Successfully");
// });

// To delete the file
// fs.unlink(`${dirname}/example2.txt`, (err) => {
//   if (!err) console.log("File Deleted Successfully");
// });

// console.log("Hello World 1".red);
// setTimeout(() => {
//   console.log("Hello Shubham 2".blue);
// }, 3000);
// console.log("Hello Shubham 3".green);

// let a = 10;
// let b = 20;

// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     b = 50;
//     resolve(50);
//   }, 2000);
// });
// waitingData.then((data) => {
//   console.log(a + data);
// });

console.log("Started Now");

setTimeout(() => {
  console.log("2 sec log");
}, 2000);

setTimeout(() => {
  console.log("0 sec log");
}, 0);

console.log("Finishing Now");
