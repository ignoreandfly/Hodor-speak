var userInput = document.querySelector("#txt-input")
var userOutput = document.querySelector("#output")
var btnTranslate = document.querySelector('#btn-translate')
var url = "https://api.funtranslations.com/translate/hodor.json"

function finalurl(text) {
    return url + "?text=" + text
}

function clickHandler() {
    fetch(finalurl(userInput.value))
        .then(response => response.json())
        .then(json => {
                var translatedText = json.contents.translated;
                output.innerText = translatedText;
            }

        )
}
    
btnTranslate.addEventListener("click", clickHandler)