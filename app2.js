
function getMessage() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('Hello asynchronous world!');
      }, 0);
    });
  }
  
  getMessage().then(function(message) {
    console.log(message);  
  });

// const fs=require('fs');
// const paths=['./views/hello2.html','./views/hello.html'];
// function readContent(file,callback) {
//     fs.readFile(file,'utf8', function (err, content) {
//         if (err) return callback(err,null)
//         callback(null, content);
//     })
// }
// function PushResults(paths) {
//     var anArr=[];
//     paths.forEach( (file,key,paths)=> {
//         readContent(file,function (err, content) {
//         anArr.push(content);
//         if (Object.is(paths.length - 1, key)) {
//             console.log (anArr);  
//         }
//         })
//     })

// }
//  PushResults(paths);

//    fileRead=function (path) {
//         fs.readFile(path,'utf8',(err,data)=>{
//             if (!err){
//              return data;
//             }
//         })
// }

// paths.forEach(function(file){
//   content= fileRead(file);
//   console.log(content);
// })


//fileRead('./views/hello2.html');

// var result =fileReadFromArray (paths,function (content) {
//     console.log(content);    
// });

//console.log(filesData); 

// doFileReading=function () {
//     return new Promise(function (resolve,reject) {
//         fs.readFile('./views/hello2.html','utf8',function (err,data) {
//             if (!err){
//                 console.log('here');
//                 resolve(data);

//             }
//         })
//     })
// } 
// doFileReading().then((data,err)=>{
//     console.log(data);
// })
