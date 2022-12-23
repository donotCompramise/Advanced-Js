
const goButton = document.getElementById("go_button");
const searchInput = document.getElementById('search_input');
const profilesContainer = document.getElementById("profiles_container")
goButton.addEventListener('click',viewProfile)


// async function viewProfile(){
//     console.log("hello world")
//     const value = searchInput.value
//     console.log(value);
//     const streamData= await fetch(`https://api.github.com/search/users${value ? `?q=${value}` : ''}`);
//     const JsonText= await streamData.text();
//     const JSONData=-JSON.parse(JsonText);
//     console.log(JSONData.items)
//     renderUsers(JSONData.items)
// }

async function viewProfile() {
    const value = searchInput.value
    const streamResponse = await fetch(`https://api.github.com/search/users${value ? `?q=${value}` : ''}`)
    const textResponse = await streamResponse.text()
    const jsonResponse = JSON.parse(textResponse)
    renderUsers(jsonResponse.items)
    }


function renderUsers(userData) {
    let html = ''
    for (let i = 0; i < userData.length; i++) {
        const profilePictureUrl = userData[i]['avatar_url']
        const profileUrl = userData[i]['html_url']
        const username = userData[i]['login']
        html += `<div class="profile">
                    <img src="${profilePictureUrl}" class="profile_image" alt="profile" />
                    <div>
                        <h3 id="username">${username}</h3>
                        <a href="${profileUrl}">visit profile</a>
                    </div>
                </div>`
    }
    profilesContainer.innerHTML = html
}
