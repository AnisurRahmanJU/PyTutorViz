const Viz = (() => {

function encodeCode(code){
return encodeURIComponent(code)
.replace(/'/g,"%27")
.replace(/"/g,"%22")
.replace(/\n/g,"%0A");
}

function getTutorURL(lang){

if(lang==="c")
return "https://pythontutor.com/c.html";

if(lang==="cpp")
return "https://pythontutor.com/cpp.html";

if(lang==="java")
return "https://pythontutor.com/java.html";

if(lang==="javascript")
return "https://pythontutor.com/javascript.html";

if(lang==="python")
return "https://pythontutor.com/visualize.html";

return "https://pythontutor.com/visualize.html";
}

function createVisualizerIframe(container,code){

const lang=document.getElementById("language-select").value;

container.innerHTML="";

const iframe=document.createElement("iframe");

iframe.style.width="100%";
iframe.style.height="100%";
iframe.style.border="none";

const baseURL=getTutorURL(lang);

iframe.src=
baseURL+
"#code="+encodeCode(code)+
"&mode=edit";

container.appendChild(iframe);

}

return{
createVisualizerIframe
};

})();
