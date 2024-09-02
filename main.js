let add = document.querySelector(".add");
let title = document.querySelector(".input");
let tasks = document.querySelector(".tasks");

// Create Product
let tsks;
if(localStorage.Tasks != null){
    tsks = JSON.parse(localStorage.Tasks)
}else{
    tsks =[];
}
add.onclick = function (){
    let newTask = {title: title.value}
    if(title.value != '' ){
        tsks.push(newTask);
        clearData()
    }
    localStorage.setItem("Tasks",JSON.stringify(tsks))
    showData();
    
}
// Clear data
function clearData(){
    title.value = '';
}
// show data
function showData() {
    let table = '';
    for(let i = 0 ; i < tsks.length; i++){
        table += `<div>${tsks[i].title}<input type="button" value="Delete" onclick="deleteData(${i})"></div>`;
    }
    tasks.innerHTML = table;
}
showData();

// Delete element
function deleteData (i){
    tsks.splice(i,1);
    localStorage.Tasks = JSON.stringify(tsks);
    showData();
}






// add Data 
function addData () {
    let newDiv = document.createElement("div");
    
    newDiv.innerHTML = `${tit}<input type="button" value="Delete">`;
    tasks.appendChild(newDiv)
    arr.push({title:tit})
    localStorage.setItem("data","afsasf")

}










































/*
let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment")
if(localStorage.getItem("color")) {
    div.style.backgroundColor = localStorage.getItem("color");
    
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active")
} 
lis.forEach(function (li) {
    li.addEventListener("click" , function (e) {
        lis.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active");
        localStorage.setItem("color",e.currentTarget.dataset.color);
        div.style.backgroundColor = localStorage.getItem("color");
    })
})

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <style>
        body {
            background-color: #eee;
        }
        ul {
            background-color: #ddd;
            padding: 20px;
            margin: 20px auto;
            width: 400px;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }
        ul li {
            width: 60px;
            height: 60px;
            border: 2px solid transparent;
            opacity: 0.4;
            cursor: pointer;
            transition: 0.3s;
        }
        ul li.active, ul li:hover {
            opacity: 1;
        }
        ul li:first-child {
            background-color: rgb(255, 73, 73);
        }
        ul li:nth-child(2) {
            background-color: greenyellow;
        }
        ul li:nth-child(3) {
            background-color: rgb(48, 48, 255);
        }
        ul li:nth-child(4) {
            background-color: black;
        }
        .experiment {
            background-color: rgb(255, 73, 73);
            width: 600px;
            height: 600px;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <ul>
        <li data-color="red"></li>
        <li data-color="green"></li>
        <li data-color="blue"></li>
        <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    
    
    <script src="main.js"></script>
</body>
</html>
*/









