function totalamount(){
const serchInput=document.getElementById("search_input").value;
var bill=Number(serchInput);
// for(let i=0;i<document.querySelectorAll('option');i++){
// document.getElementsByClassName("rating")[i].addEventListener('clcik',function(){
//     var buttontext=Number(this.innerHTML);
//     console.log(buttontext);
// })
// }
const dropDownList=document.getElementById("drop_down_list").value
var rating=Number(dropDownList)
const howManyPeoples=document.getElementById("how_many_peoples").value;
var peoples=Number(howManyPeoples)
console.log(peoples)
const tipAmount=document.getElementById('Tip_amount')


     var tip=Number(Number(bill) *Number(rating))/Number(peoples);
    //  console.log(Number(tip))
     let html=''
     html +=`<p>Tip Amount</p>
     <p>${tip}</p>
     <p>each</p>`
tipAmount.innerHTML=html

 }