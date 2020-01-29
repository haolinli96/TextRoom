$(() => {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendClickHandler, false);
    const textArea = document.getElementById("sendText");
    textArea.addEventListener("input", (e) => 
      textArea.value ? sendButton.removeAttribute("disabled") : sendButton.setAttribute("disabled", ""), false);
    const typeBox = document.getElementsByClassName("type_msg")[0];
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        typeBox.addEventListener(eventName, preventDefaults, false)
    })
    ;['dragenter', 'dragover'].forEach(eventName => {
        typeBox.addEventListener(eventName, () => typeBox.classList.add('highlight'), false) 
    })
    ;['dragleave', 'drop'].forEach(eventName => {
        typeBox.addEventListener(eventName, () => typeBox.classList.remove('highlight'), false)
    })
    typeBox.addEventListener('drop', sendFile, false);

    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
   
})
const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
}
const sendClickHandler = (e) => {
    console.log("!!!!!");
    let textContent = document.getElementById("sendText").value;
    console.log(textContent);
    if(textContent) {
        const outgoingNode = document.getElementsByClassName("outgoing_msg")[0];
        const newOutgoing = outgoingNode.cloneNode(true);
        newOutgoing.childNodes[1].childNodes[1].innerHTML = textContent;
        //newOutgoing.firstChild.firstChild.innerHTML = textContent;
        let date = new Date();
        let timeString = (date.getHours() + 1) + ':' + (date.getMinutes() + 1) + ' | '
         + (date.getMonth() + 1) + '/' + (date.getDate() + 1)
         console.log(timeString)
        newOutgoing.childNodes[1].childNodes[3].innerHTML = timeString;
        const messageHistory = document.getElementsByClassName("msg_history")[0];
        messageHistory.appendChild(newOutgoing);
        messageHistory.scrollTop = messageHistory.scrollHeight;
        document.getElementById("sendText").value = "";

        const sendButton = document.getElementById("sendButton");
        sendButton.setAttribute("disabled", "");
    }
}

const sendFile = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;

    const read = (file) => {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            let img = document.createElement('img');
            img.src = reader.result;
            img.title = file.name;
            img.classList.add("msg_image");
            imageEvents(img);

            const outgoingNode = document.getElementsByClassName("outgoing_msg")[0];
            const newOutgoing = outgoingNode.cloneNode(true);
            newOutgoing.childNodes[1].childNodes[1].replaceWith(img)
            let date = new Date();
            let timeString = (date.getHours() + 1) + ':' + (date.getMinutes() + 1) + ' | '
            + (date.getMonth() + 1) + '/' + (date.getDate() + 1)
            console.log(timeString)
            newOutgoing.childNodes[1].childNodes[3].innerHTML = timeString;
            
            const messageHistory = document.getElementsByClassName("msg_history")[0];
            messageHistory.appendChild(newOutgoing);
            messageHistory.scrollTop = messageHistory.scrollHeight;
            document.getElementById("sendText").value = "";
        }, false)
        reader.readAsDataURL(file);
    }
    for(let i = 0; i < files.length; ++i){
        if(files[i].type.startsWith('image/')) {
            console.log('!!!')
            read(files[i])
        }
    }
    
}
const imageEvents = (newImage) => {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("img01");
    newImage.addEventListener("click", function(e){
        modal.style.display = "block";
        modalImage.src = this.src;
    }, false);
}


