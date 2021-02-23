const inputForm = document.querySelector('#input-form');
const input = document.querySelector('#input');
const display = document.querySelector('#display');
const edit = document.querySelector('#forEdit');

var index = 0;

inputForm.onsubmit = function(){
    const input_text = input.value;
    let tr = document.createElement('tr');
    tr.innerHTML = `<td> ${++index}</td>
    <td> ${input_text} </td>
    <td> <input type="image" src='img/edit.png' height=20 width=20 onclick="funcEdit(this)"></td>
    <td> <input type="image" src='img/delete.png' height=20 width=20 onclick="funcDelete(this)"></td>`;
    display.append(tr);
    input.value='';
    return false;
}

var editedRow;

function funcDelete(img){
    img.parentElement.parentElement.remove();
    updateIndex();
}

function funcEdit(img) {
    editedRow = img;
    let form_tag = document.createElement('form');
    form_tag.setAttribute('id','editForm');
    form_tag.innerHTML = `<input type="text" id="editedText" value=${img.parentElement.parentElement.children[1].innerText}>
    <input type="submit" value="Edit" > `;
    edit.append(form_tag);

    var editForm = document.querySelector('#editForm');

    editForm.onsubmit = function(){
        console.log('submitted');
        editedRow.parentElement.parentElement.children[1].innerText = document.querySelector('#editedText').value;
        edit.children[0].remove();
        return false;
    }
}


// function modify(event){
//     editedRow.parentElement.parentElement.children[1].innerText=event.target.value;
//     edit.children[0].remove();
// }

function updateIndex() {
    for(var i=0;i<display.children.length;++i){
        display.children[i].children[0].innerText=i+1;
    }
    index=i;
}