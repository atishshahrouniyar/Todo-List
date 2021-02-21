const input = document.querySelector('#input');
const display = document.querySelector('#display');

input.addEventListener('change',displayData);

var index=1;

function displayData(event){
    let text = document.createElement('tr');
    text.innerHTML=`<td>${index++}</td> <td>${event.target.value}</td>`;
    display.appendChild(text);
    event.target.value=""; 
}