const input = document.querySelector('#input');
const display = document.querySelector('#display');
const edit = document.querySelector('#forEdit');

input.addEventListener('change',displayData);

var index=0;
var editedRow;

function displayData(event){
    let text = document.createElement('tr');
    text.innerHTML=`<th scope="row">${++index}</th> <td class='data'>${event.target.value}</td> 
    <td> <input type="image" src='img/edit.png' height=20 width=20 onclick="funcEdit(this)"></td>
    <td> <input type="image" src='img/delete.png' height=20 width=20 onclick="funcDelete(this)"></td>`;
    display.appendChild(text);
    event.target.value=""; 
}

function funcDelete(img){
    img.parentElement.parentElement.remove();
    console.log(img);
    updateIndex();
}

function funcEdit(img) {
    editedRow = img;
    let input_tag = document.createElement('input');
    input_tag.value = img.parentElement.parentElement.children[1].innerText;
    input_tag.setAttribute('class','form-control');
    input_tag.addEventListener('change', modify);
    edit.appendChild(input_tag);
}

function modify(event){
    editedRow.parentElement.parentElement.children[1].innerText=event.target.value;
    edit.children[0].remove();
}

function updateIndex() {
    for(var i=0;i<display.children.length;++i){
        display.children[i].children[0].innerText=i+1;
    }
    index=i;
}