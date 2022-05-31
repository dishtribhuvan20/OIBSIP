console.log("this is first js project")
showRecord();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let s1 = document.getElementById("s1");
  let s2 = document.getElementById("s2");
  let s3 = document.getElementById("s3");
  let s4 = document.getElementById("s4");
  let s5 = document.getElementById("s5");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    notesObj.push([addTxt.value,s1.value,s2.value,s3.value,s4.value,s5.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
   else {
    notesObj = JSON.parse(notes);
    notesObj.push([addTxt.value,s1.value,s2.value,s3.value,s4.value,s5.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
  addTxt.value = "";
  s1.value = "";
  s2.value = "";
  s3.value = "";
  s4.value = "";
  s5.value = "";
  console.log(notesObj);
  showRecord();
});

function showRecord(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    let html='';
    notesObj.forEach(function(element,index) {
        html+=`<tr class='table-content'>
                        
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td> 
            <td>${element[5]}</td>
            <td>${element[0]}</td>
        <td><button id="${index}" onclick="deleteRecord(this.id)" class="btn-remove">X</button></td>
      </tr>
      `
    });
    let notesElm= document.getElementById('notes');
    if(notesObj.length !=0){
    notesElm.innerHTML=html
    }
    else{
        notesElm.innerHTML=`<td colspan="7" style="text-align: center;">NOTHING ADDED</td>`
    }
}
function deleteRecord(index){
    console.log("deleting "+ index);
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showRecord();
}