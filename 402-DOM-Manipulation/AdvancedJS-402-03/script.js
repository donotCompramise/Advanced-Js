
    const AddingElements=document.getElementById('AddingElements')
    const parent=document.getElementById('gparent');
    console
    let html=''
    function addItem(){
    html +=`  <div id="parent">
    <div id="main_container">
     <ul>
            <li>${AddingElements.value}</li>
        </ul>
    
    </div>
    <button id="item_delete_button" onclick="deleteButton()">delete</button> 
</div>`
        parent.innerHTML=html;
    }

    function deleteButton(){
        // const parent=document.getElementById('gparent')
        parent.remove();
    }