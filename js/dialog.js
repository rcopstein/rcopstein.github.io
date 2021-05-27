function onCitationClick(event) {
    event.preventDefault();
    let srcElement = event.srcElement;
    let citationElement = srcElement.parentElement.parentElement.querySelector('.citation');
    var citationText = citationElement.innerText.toString().trim();
    citationText = citationText.replace(/\ \ +/g, " ");
    citationText = citationText.replace(" }", "}");

    dialogTextarea.value = citationText;
    dialogCopy.style.display = document.queryCommandSupported('copy') ? 'block' : 'none';

    dialog.showModal();
}

function onCopyClick(event) {
    event.preventDefault();
    dialogTextarea.select();
    document.execCommand('copy');
}

// Find components
let dialog = document.querySelector("dialog");
let dialogCopy = dialog.querySelector(".copy");
let dialogTextarea = dialog.querySelector("textarea");

// Register polyfill
dialogPolyfill.registerDialog(dialog);
