parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/products/ice-cream-mob@1x.png":[["ice-cream-mob@1x.9315307d.png","Yh9F"],"Yh9F"],"./../images/products/ice-cream-tab@1x.png":[["ice-cream-tab@1x.8b26250e.png","jtTj"],"jtTj"],"./../images/products/ice-cream@1x.png":[["ice-cream@1x.d96130bd.png","y1aH"],"y1aH"],"./../images/products/ice-coffee-mob@1x.png":[["ice-coffee-mob@1x.7c236e65.png","Vtmm"],"Vtmm"],"./../images/products/ice-coffee-tab@1x.png":[["ice-coffee-tab@1x.c552820c.png","IKag"],"IKag"],"./../images/products/ice-coffee@1x.png":[["ice-coffee@1x.0d820958.png","k8gg"],"k8gg"],"./../images/products/miikshakes-mob@1x.png":[["miikshakes-mob@1x.d3ed788e.png","eghj"],"eghj"],"./../images/products/miikshakes-tab@1x.png":[["miikshakes-tab@1x.a3132341.png","duWv"],"duWv"],"./../images/products/miikshakes@1x.png":[["miikshakes@1x.ed1efda8.png","jRX5"],"jRX5"],"./../images/products/ice-cream-mob@2x.png":[["ice-cream-mob@2x.6f79a407.png","L6Qe"],"L6Qe"],"./../images/products/ice-cream-tab@2x.png":[["ice-cream-tab@2x.0f1435c9.png","Iklh"],"Iklh"],"./../images/products/ice-cream@2x.png":[["ice-cream@2x.7080dca0.png","nv6v"],"nv6v"],"./../images/products/ice-coffee-mob@2x.png":[["ice-coffee-mob@2x.00c9b846.png","G31c"],"G31c"],"./../images/products/ice-coffee-tab@2x.png":[["ice-coffee-tab@2x.e795445f.png","atCy"],"atCy"],"./../images/products/ice-coffee@2x.png":[["ice-coffee@2x.a8a232bc.png","Y6Uu"],"Y6Uu"],"./../images/products/miikshakes-mob@2x.png":[["miikshakes-mob@2x.a326e486.png","mGVG"],"mGVG"],"./../images/products/miikshakes-tab@2x.png":[["miikshakes-tab@2x.37824414.png","Z1RB"],"Z1RB"],"./../images/products/miikshakes@2x.png":[["miikshakes@2x.f7478320.png","TWcp"],"TWcp"],"./../images/products/arrow@1x.png":[["arrow@1x.b7fd2033.png","MNEB"],"MNEB"],"./../images/products/arrow@2x.png":[["arrow@2x.3c1ea60f.png","Gasl"],"Gasl"],"./../images/contacts/gradientbg1@1x-desktop.png":[["gradientbg1@1x-desktop.66aaf955.png","Whvg"],"Whvg"],"./../images/contacts/gradientbg2@2x-desktop.png":[["gradientbg2@2x-desktop.3ecc4cdb.png","XWEn"],"XWEn"],"/home/runner/work/ice-cream_project/ice-cream_project/src/images/about/splash@1x.png":[["splash@1x.a31baa12.png","CI3t"],"CI3t"],"/home/runner/work/ice-cream_project/ice-cream_project/src/images/about/splash@2x.png":[["splash@2x.0e1012b7.png","Tl4C"],"Tl4C"],"/home/runner/work/ice-cream_project/ice-cream_project/src/images/about/splash-mob@1x.png":[["splash-mob@1x.9c7456e1.png","DiVy"],"DiVy"],"/home/runner/work/ice-cream_project/ice-cream_project/src/images/about/splash-mob@2x.png":[["splash-mob@2x.d5fabc7c.png","GR0q"],"GR0q"],"./../images/about/splash@1x.png":[["splash@1x.a31baa12.png","CI3t"],"CI3t"]}],"GKsu":[function(require,module,exports) {
(()=>{const c=document.querySelector(".product-card__button--ice-cream"),t=document.querySelector(".product-card__button--ice-coffee"),e=document.querySelector(".product-card__button--milk-shake");function o(){this.classList.contains("product-card__button--ice-cream")&&(document.querySelector("[products-desc-ice-cream]").classList.toggle("product-card__description--hidden"),c.classList.toggle("product-card__button--opened")),this.classList.contains("product-card__button--ice-coffee")&&(document.querySelector("[products-desc-ice-coffee]").classList.toggle("product-card__description--hidden"),t.classList.toggle("product-card__button--opened")),this.classList.contains("product-card__button--milk-shake")&&(document.querySelector("[products-desc-milk-shake]").classList.toggle("product-card__description--hidden"),e.classList.toggle("product-card__button--opened"))}c.addEventListener("click",o),t.addEventListener("click",o),e.addEventListener("click",o)})();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/products-desc-data.js");
},{"./sass/main.scss":"clu1","./js/products-desc-data.js":"GKsu"}]},{},["Focm"], null)
//# sourceMappingURL=/ice-cream_project/src.ecbd391a.js.map