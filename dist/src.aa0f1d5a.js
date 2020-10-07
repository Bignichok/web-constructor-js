parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"RiUx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=exports.css=exports.col=exports.row=void 0;var n=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")};exports.row=n;var o=function(n){return'<div class="col-sm">'.concat(n,"</div>")};exports.col=o;var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return function(o){return"".concat(o,": ").concat(n[o])}(o)}).join(";")};exports.css=t;var r=function(n){return'\n<form name="'.concat(n,'">\n        <h5>').concat(n,'</h5>\n        <div class="form-group">\n          <input\n            class="form-control form-control-sm"\n            name="value"\n            placeholder="value"\n          />\n        </div>\n        <div class="form-group">\n          <input\n            class="form-control form-control-sm"\n            name="styles"\n            placeholder="styles"\n          />\n        </div>\n        <button type="submit" class="btn btn-primary btn-sm">Add</button>\n</form>')};exports.block=r;
},{}],"Ozxk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextBlock=exports.ColumnsBlock=exports.ImageBlock=exports.TitleBlock=void 0;var t=require("../utils/utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=u();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?i(t):o}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o,n){l(this,t),this.type=e,this.value=o,this.options=n}return f(t,[{key:"toHTML",value:function(){throw new Error("method to html need to be realized")}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,"title",t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,"image",t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=e.imageStyles,r=e.alt,c=void 0===r?"":r;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(c,'" style="').concat((0,t.css)(n),'"/>'),(0,t.css)(o))}}]),c}();exports.ImageBlock=h;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,"columns",t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles,o=this.value.map(function(e){return(0,t.col)("<p>".concat(e,"</p>"))}).join(" ");return(0,t.row)(o,(0,t.css)(e))}}]),c}();exports.ColumnsBlock=v;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,"text",t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles;return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(e))}}]),c}();exports.TextBlock=b;
},{"../utils/utils":"RiUx"}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils/utils"),t=require("./bloks");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var r=function(){function n(e,t){i(this,n),this.$el=document.querySelector(e),this.update=t,this.init()}return l(n,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.addBlock.bind(this))}},{key:"addBlock",value:function(e){e.preventDefault();var i=e.target,n=i.name,l=i.value.value,r=i.styles.value,a={};"text"===n?a=new t.TextBlock(l,{styles:r}):"title"===n&&(a=new t.TitleBlock(l,{styles:r})),this.update(a),i.value.value="",i.styles.value=""}},{key:"template",get:function(){return[(0,e.block)("title"),(0,e.block)("text")].join("")}}]),n}();exports.Sidebar=r;
},{"../utils/utils":"RiUx","./bloks":"Ozxk"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),n=require("./sidebar");function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var o=function(){function t(e){r(this,t),this.model=e,this.init()}return i(t,[{key:"init",value:function(){var r=this,t=new e.Site("#site");t.render(this.model);new n.Sidebar("#panel",function(e){r.model.push(e),t.render(r.model)})}}]),t}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"Paoz":[function(require,module,exports) {
module.exports="/image.fd2b3831.jpg";
},{}],"kRZE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=o(require("../assets/image.jpg")),t=require("../classes/bloks");function o(e){return e&&e.__esModule?e:{default:e}}var i=[new t.TitleBlock("Site constructor on JavaScript!",{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099,#493240)",color:"#ffffff",padding:"2rem","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"this is image"}),new t.ColumnsBlock(["App on pure JS without libraries","Solid principals","handmade UI"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",display:"flex","justify-content":"space-between","text-align":"center",padding:"2rem",color:"#fff","font-weight":"bold"}}),new t.TextBlock("here we go with some text",{styles:{background:"linear-gradient(to left,#f2994a,#f2c94c)",padding:"1rem","font-weight":"bold"}})];exports.model=i;
},{"../assets/image.jpg":"Paoz","../classes/bloks":"Ozxk"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./classes/app.js"),s=require("./js/model.js");require("./styles/main.css"),new e.App(s.model);
},{"./classes/app.js":"Z1kE","./js/model.js":"kRZE","./styles/main.css":"jExt"}]},{},["Focm"], null)