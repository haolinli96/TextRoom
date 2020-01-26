$(() => {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendClickHandler, false);
})
const sendClickHandler = () => {
    console.log("!!!!!");
    let textContent = document.getElementById("sendText").value;
    if(textContent) {
        const outgoingNode = document.getElementsByClassName("outgoing_msg")[0];
        const newOutgoing = outgoingNode.cloneNode(true);
        console.log(newOutgoing);
        //newOutgoing.firstChild.firstChild.innerHTML = textContent;
        document.getElementsByClassName("msg_history")[0].appendChild(newOutgoing);
    }
}