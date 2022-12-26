const searchInput= document.getElementById('search_input');
const searchButton=document.getElementById('search_button');
const fruitDefinition=document.getElementById('fruit_definition');
const audioDef=document.getElementById('audio_def');

searchButton.addEventListener('click',definitionView)

async function definitionView(){
    // const value=searchInput.value;search
    const streamresponse= await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchInput.value}?key=0ec12cd4-acb3-4ef3-b328-fa2051908047`)
    const textResponse=await streamresponse.text()
    const JSONResponse=JSON.parse(textResponse)
    console.log(JSONResponse)
    const fruitDef=JSONResponse[0].shortdef[0];
    fruitDefinition.innerHTML=fruitDef;
if(JSONResponse[0].hwi){
    if(JSONResponse[0].hwi.prs){
        const audioName=JSONResponse[0].hwi.prs[0].sound.audio;
        const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${getAudioSubdirectory(audioName)}/${audioName}.mp3`
        audioDef.setAttribute('src', audioUrl)
}
}


}
function getAudioSubdirectory(audioName) {
    if (audioName.startsWith('bix')) {
        return 'bix'
    } else if (audioName.startsWith('gg')) {
        return 'gg'
    } else if (!isNaN(audioName[0])) {
        return 'number'
    } else {
        return audioName[0]
    }
}