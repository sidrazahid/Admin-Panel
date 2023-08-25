var files= [];
var FileReaders = [];
var ImageLinksArray= [];

const imgdiv = document.getElementById("imagesDiv");
const selBtn = document.getElementById("selimgsbtn");
const addBtn = document.getElementById("addprodbtn");
const proglab = document.getElementById("loadlab");

const name = document.getElementById("nameinp");
const category = document.getElementById("catinp");
const description = document.getElementById("desarea");
const price = document.getElementById("pricelab");
const stock = document.getElementById("stocklab");

const p1 = document.getElementById("p1inp");
const p2 = document.getElementById("p2inp");
const p3 = document.getElementById("p3inp");
const p4 = document.getElementById("p4inp");

function OpenFileDialog(){
    let inp = document.createElement("input");
    inp.type="file";
    inp.multiple="multiple";

    inp.onchange = (e) => {
        AssignImgsToFilesArray(e.target.files);
        CreateImgTags();
    }

    inp.click();

}

// function AssignImgsToFilesArray(thefiles){
//     let num = files.length + thefiles.length;
//     let looplim = (num <=10) ? thefiles.length : (10-Files.length);

//     for ( let i = 0; i < looplim; i++){
//         files.push(thefiles[i]);
//     }
    
//     if(num>10) alert("maximum 10 images are allowed!");
// }
function AssignImgsToFilesArray(thefiles) {
    let num = files.length + thefiles.length;
    let looplim = (num <= 10) ? thefiles.length : (10 - files.length);

    for (let i = 0; i < looplim; i++) {
        files.push(thefiles[i]);
    }

    if (num > 10) alert("maximum 10 images are allowed!");
}



function CreateImgTags(){
    imgdiv.innerHTML=" ";
    imgdiv.classList.add("imagesDivStyle");

    for(let i = 0; i <files.length; i++) {
        FileReaders[i]= new FileReader();

        FileReaders[i].onload = function(){
            var img = document.createElement("img");
            img.id= "imgNo" + i;
            img.classList.add("imgs");
            img.src= FileReaders[i].result;
            imgdiv.append(img);
        }

        FileReaders[i].readAsDataURL(files[i]);
    }
}
//......event.....//

   selBtn.addEventListener("click", OpenFileDialog);











