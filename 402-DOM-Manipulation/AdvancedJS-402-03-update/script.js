
    const AddingElements=document.getElementById('AddingElements')
    const parent=document.getElementById('gparent')
    console
    let html=''
    function addItem(){
    html +=`  <div id="parent">
    <div id="main_container">
     <ul>
            <li>${AddingElements.value}</li>
        </ul>
    
    </div>
    <button id="item_delete_button" onclick="deleteButton(this)">delete</button> 

</div>`
        parent.innerHTML=html;
       
        // console.log(ele)
        
    }
// const button=document.getElementById("item_delete_button").target

    function deleteButton(buttonNode){
        // const parent=document.getElementById('gparent')
        // parent.remove();
        // const ele=document.querySelector("#gparent").lastChild
        // parent.removeChild(parent.childNodes[0])
        // console.log(ele)
        buttonNode.parentElement.remove()
        
    }