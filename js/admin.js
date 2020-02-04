window.addEventListener('load', () => {
    const groupFile = document.getElementsByClassName("group-file");
    for(let i = 0; i < groupFile.length; ++i){
        groupFile[i].addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const fileTabs = document.getElementsByClassName("file-tabs")[0];
            const contents = document.getElementsByClassName("card-body")[0];
            const findTab = alreadyOn(fileTabs, e.target.innerHTML);
            if(findTab){
                toggleFocus(fileTabs, findTab);
                toggleContent(e.target.innerHTML);
            }
            else{
                const newTab = fileTabs.childNodes[1].cloneNode(true);
                //console.log(e.target.innerHTML)
                newTab.id = e.target.innerHTML;
                newTab.childNodes[1].text = newTab.id + ' ';
                newTab.childNodes[1].appendChild(fileTabs.childNodes[1].childNodes[1].childNodes[1].cloneNode(true));
                newTab.style.display = "block";
                toggleFocus(fileTabs, newTab);
                //console.log(newTab.childNodes[1].childNodes);
                fileTabs.appendChild(newTab);

                const newContent = contents.childNodes[1].cloneNode(true);
                console.log(contents.childNodes[1].outerHTML);
                console.log(newContent);
                newContent.id = e.target.innerHTML + '-content';
                newContent.style.display = "block";
                toggleContent(e.target.innerHTML);
                contents.appendChild(newContent);

                newTab.addEventListener('click', (ev)=>{
                    toggleFocus(fileTabs, newTab);
                    toggleContent(newTab.id);
                    
                }, false);
                closeTab(fileTabs, newTab, contents, contents.getElementsByTagName("div"));
            }
        },false);
    }

    const fileTabs = document.getElementsByClassName("file-tabs")[0];
    const lis = fileTabs.getElementsByTagName("li");
    const contents = document.getElementsByClassName("card-body")[0];
    const contentList = contents.getElementsByTagName("div");
    for(let i = 0; i < lis.length; ++i){
        lis[i].addEventListener('click', (e)=>{
            toggleFocus(fileTabs, lis[i]);
            toggleContent(e.target.innerHTML.split(' ')[0]);
        }, false);
        closeTab(fileTabs, lis[i], contents, contentList);
        
       
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

const closeTab = (fileTabs, tab, contents, contentList) => {
    const closeIcon = tab.getElementsByTagName("i")[0];
    closeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabName = tab.id;
        fileTabs.removeChild(tab);
        for(let i = 0; i < contentList.length; ++i){
            if(contentList[i].id.startsWith(tabName)){
                contents.removeChild(contentList[i]);
            }
        }
    }, false);
}

const toggleContent = (fileName) => {
    console.log(fileName);
    const contents = document.getElementsByClassName("card-body")[0].getElementsByTagName("div");
    for(let i = 0; i < contents.length; ++i){
        if(contents[i].id.startsWith(fileName)){
            console.log(i);
            contents[i].style.display = "block";
            console.log(contents[i].outerHTML);
        }
        else{
            contents[i].style.display = "none";
            console.log(contents[i].outerHTML);
        }
    }

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