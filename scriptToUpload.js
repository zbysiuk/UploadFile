// scriptToUpload.js

/* main form and sending to server */
const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const files = document.getElementById("files");
    const formData = new FormData();
    formData.append("name", name.value);
        for(let i =0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
            console.log("files ", files.files[i]);
    }
    fetch("http://localhost:8080/upload_files", {
        method: 'post',
        body: formData
    })
        .then((res) => console.log("res of Front: ", res))
        .catch((err) => ("Error occured", err));
        
        takeMe();
}

function takeMe() {
var dataName = [];
 
var request = async () => {
var response = await fetch('http://localhost:8080/api');
  
    var data = await response.json();
    dataName = data[0];
    console.log('data: ',dataName.info); 
    
var name = document.getElementById('TextOn').value = dataName.info;
timeRefresh();
    function timeRefresh() {
		 var time = 9999;
        var setT = setTimeout("location.reload(true);", time);
        
        if (setT != 1) {
        document.getElementById('id01').style.display='none';
		}
      }		 	    
   }
   
request();
/* sending request */
}
