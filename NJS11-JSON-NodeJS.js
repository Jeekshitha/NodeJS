const fs= require("fs");
const { json } = require("stream/consumers");
const BioData= {
    Name : "Jeekshitha",
    Age : 21,
    skills : "Mern Stack",
}
 const jsonData =JSON.stringify(BioData);
 fs.writeFile("testjson.json",jsonData,(err) =>{
    console.log("Process Completed");
 })
 fs.readFile("testjson.json","utf-8",(err,data) => {
    console.log(data);
 })