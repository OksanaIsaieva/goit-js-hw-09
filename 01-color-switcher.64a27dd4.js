!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(e){this.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(n){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.64a27dd4.js.map
