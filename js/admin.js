window.addEventListener('load', () => {
    const groupFile = document.getElementsByClassName("group-file");
    for(let i = 0; i < groupFile.length; ++i){
        groupFile[i].addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const fileTabs = document.getElementsByClassName("file-tabs")[0];
            const findTab = alreadyOn(fileTabs, e.target.innerHTML);
            if(findTab){
                toggleFocus(fileTabs, findTab);
            }
            else{
                const newTab = fileTabs.childNodes[1].cloneNode(true);
                console.log(e.target.innerHTML)
                newTab.id = e.target.innerHTML;
                newTab.childNodes[1].text = newTab.id + ' ';
                newTab.childNodes[1].appendChild(fileTabs.childNodes[1].childNodes[1].childNodes[1].cloneNode(true));
                newTab.addEventListener('click', (ev)=>{
                    toggleFocus(fileTabs, newTab);
                }, false);
                toggleFocus(fileTabs, newTab);
                console.log(newTab.childNodes[1].childNodes);
                fileTabs.appendChild(newTab);
            }
        },false);
    }

    const fileTabs = document.getElementsByClassName("file-tabs")[0];
    const lis = fileTabs.getElementsByTagName("li");
    for(let i = 0; i < lis.length; ++i){
        lis[i].addEventListener('click', (e)=>{
            toggleFocus(fileTabs, lis[i]);
        }, false);
    }
});



const alreadyOn = (fileTabs, tabId) => {
    const lis = fileTabs.getElementsByTagName("li");
    for(let i = 0; i < lis.length; ++i){
        if(lis[i].id == tabId){
            return lis[i];
        }
    }
    return null;
}

const toggleFocus = (fileTabs, focusTab) => {
    const lis = fileTabs.getElementsByTagName("li");
    for(let i = 0; i < lis.length; ++i){
        lis[i].childNodes[1].classList.remove("active");
    }
    focusTab.childNodes[1].classList.add("active");
}

let tabNumber = 0;

const newTab = (obj, name) => {
    tabNumber += 1;
    var llis = document.getElementById("tab_index").getElementsByTagName("li");
    for (var i = 0; i < llis.length; i++) {
        var lli = llis[i];
        lli.style.backgroundColor = "#cccccc";
        lli.style.borderColor = "#8e8e8e";
    }
    var divs = document.getElementById("tab_list").getElementsByClassName("tab_css");
    for (var i = 0; i < divs.length; i++) {
        var divv = divs[i];
        divv.style.display = "none";
    }

    var divList = document.getElementById("tab_list");
    divList.innerHTML = divList.innerHTML +
        "<iframe class=\"tab_css\" id=\"tab" + number + "_content\" style=\"display: block\" src=\"" + name + "\"></iframe>";
    var liList = document.getElementById("tab_index");
    liList.innerHTML = liList.innerHTML + 
        "<li id=\"tab"+number+"\" onclick=\"myclick("+number+")\" ondblclick=\"dbclick("+number+")\" style=\" background-color: #666666 \">"+obj.innerHTML+ "</li>";
   
};