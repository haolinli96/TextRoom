$(() => {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendClickHandler, false);
})
const sendClickHandler = () => {
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
        document.getElementsByClassName("msg_history")[0].appendChild(newOutgoing);
    }
}