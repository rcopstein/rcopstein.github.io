function onCitationClick(event) {
    event.preventDefault();
    let srcElement = event.srcElement;
    let citationElement = srcElement.parentElement.parentElement.querySelector('.citation');
    var citationText = citationElement.innerText.toString().trim();
    citationText = citationText.replace(/\ \ +/g, "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    dialogTextarea.innerHTML = citationText;
    dialog.showModal();
}

// Find dialog textbox
let dialog = document.querySelector("dialog");
let dialogTextarea = dialog.querySelector("p");
dialogPolyfill.registerDialog(dialog);

// Attach listener to all ".cite" buttons
let buttons = document.querySelectorAll('.cite');
// buttons.forEach((x) => x.addEventListener('click', onCitationClick))