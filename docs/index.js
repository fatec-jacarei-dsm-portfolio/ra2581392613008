const languages = document.getElementById("languages");
const ptButton = document.getElementById("pt-br-button");
const enButton = document.getElementById("en-button");

var selectedLanguage = "pt-br";

function changeSelectedLanguage(){
    if(selectedLanguage == "pt-br"){
        ptButton.className = "link";
        enButton.className = "link pressed";
        selectedLanguage = "en";
    } else {
        ptButton.className = "link pressed";
        enButton.className = "link";
        selectedLanguage = "pt-br";
    }
}

languages.addEventListener("click", changeSelectedLanguage);
