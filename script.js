var Files= [];
var FileReaders= [];
var ImageLinksArray= [];

const imgdiv = document.getElementById("imagesDiv");
const selBtn = document.getElementById("addprodbtn");
const addBtn = document.getElementById("selimgsbtn");
const proglab = document.getElementById("loadlab");

const name = document.getElementById("nameimp");
const category = document.getElementById("catimp");
const description = document.getElementById("desarea");
const price = document.getElementById("pricelab");
const stock = document.getElementById("stocklab");

const p1 = document.getElementById("p1imp");
const p2 = document.getElementById("p2imp");
const p3 = document.getElementById("p3imp");
const p4 = document.getElementById("p4imp");

function OpenFileDialog(){
    let imp = document.createElement("input");
    imp.type="file";
    imp.multiple="multiple";

    imp.onchange = (e) => {
        AssignImgsToFilesArray(e.target.files);
        CreateImgTags();
    }
}

function AssignImgsToFilesArray(thefiles){
    let num = Files.length + thefiles.length;
    let looplim = (num <=10) ? thefiles.length : (10-Files.length);

    for ( let i = 0; i < looplim; i++){
        Files.push(thefiles[i]);
    }
    
    if(num>10) alert("maximum 10 images are allowed!");
}

function CreateImgTags(){
    imgdiv.innerHTML="";

    for(let i = 0; i < Files.length; i++) {
        FileReaders[i]= new FileReaders();

        FileReaders[i].onload = function(){
            var img = document.createElement("img");
            img.id= "imgNo" + i;
            img.classList.add("imgs");
            img.src= FileReaders[i].result;
            imgdiv.oppend(img);
        }

        FileReaders[i].readAsDataURL(Files[i]);
    }
}
//......event.....//









