const searchInput=document.getElementById("search_input");
const imgConatiner=document.getElementById("img_container")



init()

function init(){
    searchInput.addEventListener('keyup' ,(event)=>{
        if(event.key === 'Enter')
            fetchmeal()
    })

}
async function fetchmeal(){
    var value=searchInput.value
    const streamgData= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    const textData= await streamgData.text()
    const JsonData=JSON.parse(textData)
    console.log(JsonData)
    let html=''
    for(let i=0;i<JsonData.meals.length;i++)
    html +=`<img 
    src="${JsonData.meals[i].strMealThumb}" alt="" height="100px;"width="200px">`

    imgConatiner.innerHTML=html
    
}