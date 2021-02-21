const input = document.querySelector('#input');
const display = document.querySelector('#display');

input.addEventListener('change',displayData);

var index=1;

function displayData(event){
    let text = document.createElement('tr');
    text.innerHTML=`<td>${index++}</td> <td>${event.target.value}</td> 
    <td > <input type="image" src='img/edit.png' height=20 width=20 id='edit${index}' onclick="funcEdit(this)"></td>
    <td > <input type="image" src='img/delete.png' height=20 width=20 id='delete${index}' onclick="funcDelete(this)"></td>`;
    display.appendChild(text);
    event.target.value=""; 
}

function funcDelete(img){
    document.getElementById(img.id).parentElement.parentElement.remove();
}

function funcEdit(img) {
    console.log(img);
    console.log(img.id);
    console.log(document.getElementById(img.id).parentElement.parentElement.remove());
}