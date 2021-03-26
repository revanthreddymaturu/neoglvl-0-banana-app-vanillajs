console.log("You are getting this message from different file")
var btn=document.querySelector("#btn-t")
var textinput=document.querySelector("#txt-input")
var output=document.querySelector("#ans-txt")
var url="https://api.funtranslations.com/translate/minion.json"
function urlGenerator()
{
    return url+"?"+"text="+textinput.value;
}
btn.addEventListener("click",function clickEventHandler(){


fetch(urlGenerator())
.then(response => response.json())
.then(json => output.innerText=(json.contents.translated))
.catch(error => console.log(error))

})

