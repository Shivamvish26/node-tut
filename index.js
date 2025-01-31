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

const http = require("http");
const app = require("./app");
http.createServer((req, resp) => {
  resp.writeHead(200,{'Content-Type':'application/json'})
  resp.write(JSON.stringify(app));
  resp.end();
}).listen(3000);

// console.log(process.argv[2]);