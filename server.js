// server.js
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express");
const fs = require('fs');

const app = express();
app.use(express.json());

/* important - CORS - describes the security conditions for the  data transfer */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.get("Origin")||"*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
   
	   
app.post("/upload_files",upload.array("files"), uploadFiles);

function uploadFiles(req, res) {	
	
	const receiveRF = req.files;
	const dirname = "./uploads/" + req.body.name + "/";
		
		fs.mkdir(dirname, function(err) {
			if (err) {
			console.log(err)
			} else {
			console.log("New directory successfully created.")
				}
		})		


    const len = req.files.length;
    for (let i = 0; i < len; i++){
           SlowDown();

		function SlowDown() {
			setTimeout(function() {
				
			let objMy = receiveRF[i];
			console.log('objMy: ',objMy.originalname);
			console.log('codenamepath: ',objMy.path);
			var ObjMP = objMy.path;
			var ObjMO = objMy.originalname;			
			
			

					}, 55000);
				} 
				RenameFile(ObjMP, dirname, ObjMO);
			}
          SendAnswer();    
}




/* function called from function uploadFiles(req, res) */
function RenameFile(ObjMP, dirname, ObjMO) {
			fs.rename(ObjMP, dirname + ObjMO,function (err) {
				if (err) throw err;
				console.log('Nazwa zmieniona, plik zapisany ',ObjMO);	
	 
 });
}

function SendAnswer() {
data = [
    {
        "id": 0,
        "info": "skonczylem"
    }
];

app.use(express.static("data"));

app.get('/api', function(req, res){
 console.log('json: ',data); 
    res.json(data);
    
         });

     }

app.listen(8080, () => {
    console.log(`Server started...`);
});




