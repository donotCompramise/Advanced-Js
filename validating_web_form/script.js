


const submitbutton=document.getElementById("submit_button");
const nameCondition=document.getElementById("name_condition")
const lastNameCondition=document.getElementById("last_name_condition");
const telephoneCondition=document.getElementById("telephone_condition")
const bioCondition=document.getElementById("bio_condition");
const emailCondition=document.getElementById("Email_condition");
const passwordCondition=document.getElementById("password_condition")

submitbutton.addEventListener('click',submitAllFields)


function submitAllFields(){
const nameSearch = document.getElementById("name_search").value;
const lastNameSearch= document.getElementById("last_name_search").value;
const emailSearch=document.getElementById('email_search').value;
const passwordSearch=document.getElementById("password_search").value;
const telephoneSearch=document.getElementById("telephone_search").value;
const bioSearch=document.getElementById("bio_search").value;

const nameColor = document.getElementById("name_search")
const lastNameColor= document.getElementById("last_name_search")
const emailColor=document.getElementById('email_search')
const passwordColor=document.getElementById("password_search")
const telephonecolor=document.getElementById("telephone_search")
const bioColor=document.getElementById("bio_search")
const telephoneColor=document.getElementById("telephone_search");

    var Regex=/[A-za-z]/;
    var RegEmail=/[@]gmail[.com]/;
    var RegPassword=/[a-z][@,_,-]/
    var Regtelephone=/[0-9]/;
    var Regbio=/[a-z,_,-]/;
//First Name
    if(nameSearch ===""){
        nameCondition.innerText="This field is Required"
        nameCondition.style.color="red";
        nameColor.style.border="3px solid red"
    }else{
        if(nameSearch.match(Regex)){
            if(nameSearch.length > 3){
        nameCondition.innerText="First name must be alphanumaric and contain 3 - 16 characters"
        nameColor.style.border="3px solid green";
            }
    else{
        nameCondition.innerText="First name must be alphanumaric and contain 3 - 16 characters"
        nameCondition.style.color="red";
        nameColor.style.border="3px solid red";
    }
}
}
//Lst Name
if(lastNameSearch ===""){
    lastNameCondition.innerText="This field is Required"
    lastNameCondition.style.color="red";
    lastNameColor.style.border="3px solid red"
}else{
    if(Regex.test(lastNameSearch)){
        if(lastNameSearch.length>3){
    lastNameCondition.innerText="last name must be alphanumaric and contain 3 - 16 characters"
    lastNameCondition.style.color="green";
    lastNameColor.style.border="3px solid green"
    }else{
    lastNameCondition.innerText="last name must be alphanumaric and contain 3 - 16 characters"
    lastNameCondition.style.color="red";
    lastNameColor.style.border="3px solid red"
}
}
}
//Email
if(emailSearch ===""){
    emailCondition.innerText="This field is Required"
    emailCondition.style.color="red";
    emailColor.style.border="3px solid red"
}else{
    if(RegEmail.test(emailSearch)){
        emailCondition.innerText="Email must be a valid address,e.g. @example.com"
    emailCondition.style.color="green";
    emailColor.style.border="3px solid green"
}else{
    emailCondition.innerText="Email must be a valid address,e.g. @example.com"
    emailCondition.style.color="red";
    emailColor.style.border="3px solid red"
}
}
//password
if(passwordSearch ===""){
    passwordCondition.innerText="This field is Required"
    passwordCondition.style.color="red";
    passwordColor.style.border="3px solid red"
}else{
  if(RegPassword.test(passwordSearch)){
        if(passwordSearch.length>=6 && passwordSearch.length<=20){
        passwordCondition.innerHTML="Password must be alphanumaric (@,_ and - are also allowed) and between 6-20 characters"
        passwordCondition.style.color="green"
        passwordColor.style.border="3px solid green"
    } else {
        passwordCondition.innerHTML="Password must be alphanumaric (@,_ and - are also allowed) and between 6-20 characters"
        passwordCondition.style.color="red"
        passwordColor.style.border="3px solid red"
        }
    
    }
    else {
        passwordCondition.innerHTML="Password must be alphanumaric (@,_ and - are also allowed) and between 6-20 characters"
        passwordCondition.style.color="red"
        passwordColor.style.border="3px solid red"
        }
}
//telephone
if(telephoneSearch ===""){
    telephoneCondition.innerText="This field is Required"
    telephoneCondition.style.color="red";
   telephoneColor.style.border="3px solid red"
}else{
    if(Regtelephone.test(telephoneSearch)){
        if(telephoneSearch.length===10){
        telephoneCondition.innerText="A valid telephone number(11 digits and 333-333-3334)"
        telephoneCondition.style.color="green"
        telephoneColor.style.border="3px solid green"
        } else{
        telephoneCondition.innerText="A valid telephone number(11 digits and 333-333-3334)"
        telephoneCondition.style.color="red"
        telephoneColor.style.border="3px solid red"
    }
    }
}
if(bioSearch ===""){
    bioCondition.innerHTML="This field is Required"
    bioCondition.style.color="red";
    bioColor.style.border="3px solid red"
}else{
    if(Regbio.test(bioSearch)){
        if(bioSearch.length > 8){
            bioCondition.innerHTML="Bio must be only lowercase letters, underscores,hypens and 8-50 characters."
            bioCondition.style.color="green";
            bioColor.style.border="3px solid green"
        }
        else{
            bioCondition.innerHTML="Bio must be only lowercase letters, underscores,hypens and 8-50 characters."
            bioCondition.style.color="red";
            bioColor.style.border="3px solid red"
        }
}else{
    bioCondition.innerHTML="Bio must be only lowercase letters, underscores,hypens and 8-50 characters."
    bioCondition.style.color="red";
    bioColor.style.border="3px solid red"
}


}
}


