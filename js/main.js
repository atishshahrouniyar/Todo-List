const input = document.querySelector('#input');
const display = document.querySelector('#display');

input.addEventListener('change',displayData);

var index=0;

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
    input.value = img.parentElement.parentElement.children[1].innerText;
    funcDelete(img);
    updateIndex();
}

function updateIndex() {
    for(var i=0;i<display.children.length;++i){
        display.children[i].children[0].innerText=i+1;
    }
    index=i;
}