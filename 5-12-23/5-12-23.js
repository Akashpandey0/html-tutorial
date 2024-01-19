let inputBox = document.querySelector('#input');
let itemList = document.querySelector('.list');
inputBox.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter'){
    addItem();}
});
function addItem(){
    let inputValue = inputBox.value.trim();
    if(inputValue !==''){
        let listItem = document.createElement('li');
        listItem.textContent = inputValue;
        let deletebutton=document.createElement('button');
        deletebutton.textContent = 'Delete';
        deletebutton.addEventListener('click', ()=>{
            listItem.remove(); 
            
    });
    
    
    itemList.appendChild(listItem);
    listItem.appendChild(deletebutton);
    inputBox.value = '';
    }
}