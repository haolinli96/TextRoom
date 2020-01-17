
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