webpackJsonp([16],{361:function(s,t,a){s.exports=a(445)},394:function(s,t,a){function n(s){for(var t=0;t<s.length;t++){var a=s[t],n=p[a.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](a.parts[l]);for(;l<a.parts.length;l++)n.parts.push(v(a.parts[l]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var _=[],l=0;l<a.parts.length;l++)_.push(v(a.parts[l]));p[a.id]={id:a.id,refs:1,parts:_}}}}function l(){var s=document.createElement("style");return s.type="text/css",c.appendChild(s),s}function v(s){var t,a,n=document.querySelector('style[data-vue-ssr-id~="'+s.id+'"]');if(n){if(j)return d;n.parentNode.removeChild(n)}if(g){var v=o++;n=h||(h=l()),t=_.bind(null,n,v,!1),a=_.bind(null,n,v,!0)}else n=l(),t=r.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(s),function(n){if(n){if(n.css===s.css&&n.media===s.media&&n.sourceMap===s.sourceMap)return;t(s=n)}else a()}}function _(s,t,a,n){var l=a?"":n.css;if(s.styleSheet)s.styleSheet.cssText=C(t,l);else{var v=document.createTextNode(l),_=s.childNodes;_[t]&&s.removeChild(_[t]),_.length?s.insertBefore(v,_[t]):s.appendChild(v)}}function r(s,t){var a=t.css,n=t.media,l=t.sourceMap;if(n&&s.setAttribute("media",n),l&&(a+="\n/*# sourceURL="+l.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),s.styleSheet)s.styleSheet.cssText=a;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(a))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var e=a(395),p={},c=i&&(document.head||document.getElementsByTagName("head")[0]),h=null,o=0,j=!1,d=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());s.exports=function(s,t,a){j=a;var l=e(s,t);return n(l),function(t){for(var a=[],v=0;v<l.length;v++){var _=l[v],r=p[_.id];r.refs--,a.push(r)}t?(l=e(s,t),n(l)):l=[];for(var v=0;v<a.length;v++){var r=a[v];if(0===r.refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete p[r.id]}}}};var C=function(){var s=[];return function(t,a){return s[t]=a,s.filter(Boolean).join("\n")}}()},395:function(s,t){s.exports=function(s,t){for(var a=[],n={},l=0;l<t.length;l++){var v=t[l],_=v[0],r=v[1],i=v[2],e=v[3],p={id:s+":"+l,css:r,media:i,sourceMap:e};n[_]?n[_].parts.push(p):a.push(n[_]={id:_,parts:[p]})}return a}},445:function(s,t,a){"use strict";function n(s){a(446)}Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{styleObject:{height:"40px",width:"40px",lineHeight:"40px",borderRadius:"4px",color:"rgb(255, 255, 255)",textAlign:"center",fontSize:"20px",backgroundColor:"rgb(87, 197, 247)"},customStyle:{height:"40px",width:"40px",lineHeight:"40px",borderRadius:"4px",color:"rgb(255, 255, 255)",textAlign:"center",fontSize:"20px",backgroundColor:"rgb(10, 220, 80)"}}},methods:{handler:function(){console.log("噢")},getTarget:function(){return document.getElementById("back-top-target")}}},v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("undefined",[a("h1",[s._v("BackTop 回到顶部")]),s._v(" "),a("p",[s._v("返回页面顶部的操作按钮。")]),s._v(" "),a("h2",{attrs:{id:"he-shi-shi-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),a("ul",[a("li",[s._v("当页面内容区域比较长时；")]),s._v(" "),a("li",[s._v("当用户需要频繁返回顶部查看相关内容时")])]),s._v(" "),a("h2",{attrs:{id:"dai-ma-yan-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:"<template>\n    向下滚动后，见右下角灰色按钮\n    <v-back-top></v-back-top>\n</template>\n",script:null,style:null}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[s._v("\n    向下滚动后，见右下角灰色按钮\n    "),a("v-back-top")]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"ji-ben"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),a("p",[s._v("最简单的用法")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    向下滚动后，见右下角灰色按钮\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 基本\n  最简单的用法\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    向下滚动后，见右下角灰色按钮\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    向下滚动后，见右下角蓝色按钮\n    <v-back-top style="bottom: 100px;" :visibility-height="600" @click.native="handler">\n        <div :style="styleObject">UP</div>\n    </v-back-top>\n</template>\n\n',script:"\n    export default {\n        data: function() {\n            return {\n                styleObject: {\n                    height: '40px',\n                    width: '40px',\n                    lineHeight: '40px',\n                    borderRadius: '4px',\n                    color: 'rgb(255, 255, 255)',\n                    textAlign: 'center',\n                    fontSize: '20px',\n                    backgroundColor: 'rgb(87, 197, 247)'\n                }\n            }\n        },\n        methods: {\n            handler() {\n                console.log('噢');\n            }\n        }\n    }\n",style:null}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[s._v("\n    向下滚动后，见右下角蓝色按钮\n    "),a("v-back-top",{staticStyle:{bottom:"100px"},attrs:{"visibility-height":600},nativeOn:{click:function(t){s.handler(t)}}},[a("div",{style:s.styleObject},[s._v("UP")])])]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"zi-ding-yi-yang-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-yang-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义样式")]),s._v(" "),a("p",[s._v("可以自定义回到顶部按钮的样式，限制宽高："),a("code",[s._v("40px * 40px")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    向下滚动后，见右下角蓝色按钮\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom: 100px;"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visibility-height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"600"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handler"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"styleObject"')]),s._v(">")]),s._v("UP"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("styleObject")]),s._v(": {\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("lineHeight")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("borderRadius")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'4px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rgb(255, 255, 255)'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("textAlign")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'center'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("fontSize")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'20px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("backgroundColor")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rgb(87, 197, 247)'")]),s._v("\n                }\n            }\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            handler() {\n                "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'噢'")]),s._v(");\n            }\n        }\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 自定义样式\n  可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    向下滚动后，见右下角蓝色按钮\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"bottom: 100px;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visibility-height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"600"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"handler"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"styleObject"')]),s._v(">")]),s._v("UP"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("styleObject")]),s._v(": {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lineHeight")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'4px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rgb(255, 255, 255)'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'20px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("backgroundColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rgb(87, 197, 247)'")]),s._v("\n                }\n            }\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            handler() {\n                "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'噢'")]),s._v(");\n            }\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <div style="position: relative;">\n        <div id="back-top-target">\n            <div>向下滚动后，见右下角绿色按钮</div>\n            <div>向下滚动后，见右下角绿色按钮</div>\n            <div>向下滚动后，见右下角绿色按钮</div>\n            <div>向下滚动后，见右下角绿色按钮</div>\n            <div>向下滚动后，见右下角绿色按钮t</div>\n            <div>向下滚动后，见右下角绿色按钮</div>\n        </div>\n        <v-back-top style="position: absolute;margin-top: -100px;right: 80px;" :visibility-height="400" :target="getTarget">\n            <div :style="customStyle">UP</div>\n        </v-back-top>\n    </div>\n</template>\n\n\n\n',script:"\n    export default {\n        data: function() {\n            return {\n                customStyle: {\n                    height: '40px',\n                    width: '40px',\n                    lineHeight: '40px',\n                    borderRadius: '4px',\n                    color: 'rgb(255, 255, 255)',\n                    textAlign: 'center',\n                    fontSize: '20px',\n                    backgroundColor: 'rgb(10, 220, 80)'\n                }\n            }\n        },\n        methods: {\n            getTarget() {\n                return document.getElementById(\"back-top-target\");\n            }\n        }\n    }\n",style:"\n    #back-top-target {\n        height: 400px;\n        border: solid 1px #ddd;\n        padding: 20px;\n        margin: 20px;\n        overflow: auto;\n    }\n    #back-top-target div {\n        height: 280px;\n    }\n"}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[a("div",{staticStyle:{position:"relative"}},[a("div",{attrs:{id:"back-top-target"}},[a("div",[s._v("向下滚动后，见右下角绿色按钮")]),s._v(" "),a("div",[s._v("向下滚动后，见右下角绿色按钮")]),s._v(" "),a("div",[s._v("向下滚动后，见右下角绿色按钮")]),s._v(" "),a("div",[s._v("向下滚动后，见右下角绿色按钮")]),s._v(" "),a("div",[s._v("向下滚动后，见右下角绿色按钮t")]),s._v(" "),a("div",[s._v("向下滚动后，见右下角绿色按钮")])]),s._v(" "),a("v-back-top",{staticStyle:{position:"absolute","margin-top":"-100px",right:"80px"},attrs:{"visibility-height":400,target:s.getTarget}},[a("div",{style:s.customStyle},[s._v("UP")])])],1)]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"zi-ding-yi-gun-dong-shi-jian-de-yuan-su"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-gun-dong-shi-jian-de-yuan-su","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义滚动事件的元素")]),s._v(" "),a("p",[s._v("可以自定义回到顶部按钮要滚动的元素。")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"position: relative;"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"back-top-target"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮t"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"position: absolute;margin-top: -100px;right: 80px;"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visibility-height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"400"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":target")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getTarget"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"customStyle"')]),s._v(">")]),s._v("UP"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-back-top")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n    "),a("span",{staticClass:"hljs-selector-id"},[s._v("#back-top-target")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("400px")]),s._v(";\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("border")]),s._v(": solid "),a("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("#ddd")]),s._v(";\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("overflow")]),s._v(": auto;\n    }\n    "),a("span",{staticClass:"hljs-selector-id"},[s._v("#back-top-target")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("div")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("280px")]),s._v(";\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("customStyle")]),s._v(": {\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("lineHeight")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'40px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("borderRadius")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'4px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rgb(255, 255, 255)'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("textAlign")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'center'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("fontSize")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'20px'")]),s._v(",\n                    "),a("span",{staticClass:"hljs-attr"},[s._v("backgroundColor")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rgb(10, 220, 80)'")]),s._v("\n                }\n            }\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            getTarget() {\n                "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),a("span",{staticClass:"hljs-string"},[s._v('"back-top-target"')]),s._v(");\n            }\n        }\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 自定义滚动事件的元素\n  可以自定义回到顶部按钮要滚动的元素。\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position: relative;"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"back-top-target"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("向下滚动后，见右下角绿色按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"position: absolute;margin-top: -100px;right: 80px;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":visibility-height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"400"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":target")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"getTarget"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"customStyle"')]),s._v(">")]),s._v("UP"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-back-top")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-selector-id"}},[s._v("#back-top-target")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": solid "),a("span",{attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" "),a("span",{attrs:{class:"hljs-number"}},[s._v("#ddd")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("overflow")]),s._v(": auto;\n    }\n    "),a("span",{attrs:{class:"hljs-selector-id"}},[s._v("#back-top-target")]),s._v(" "),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("div")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("280px")]),s._v(";\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("customStyle")]),s._v(": {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lineHeight")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'40px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("borderRadius")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'4px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rgb(255, 255, 255)'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("textAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'20px'")]),s._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("backgroundColor")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rgb(10, 220, 80)'")]),s._v("\n                }\n            }\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n            getTarget() {\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v('"back-top-target"')]),s._v(");\n            }\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),a("blockquote",[a("p",[s._v("有默认样式，距离底部 "),a("code",{pre:!0},[s._v("50px")]),s._v("，可覆盖。")])]),s._v(" "),a("blockquote",[a("p",[s._v("自定义样式宽高不大于 40px * 40px。")])]),s._v(" "),a("h3",{attrs:{id:"backtop-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backtop-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" BackTop Props")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("visibilityHeight")]),s._v(" "),a("td",[s._v("滚动高度达到此参数值才出现 "),a("code",{pre:!0},[s._v("BackTop")])]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("400")])]),s._v(" "),a("tr",[a("td",[s._v("target")]),s._v(" "),a("td",[s._v("设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("() => window")])])])])],1)},_=[],r={render:v,staticRenderFns:_},i=r,e=a(0),p=n,c=e(l,i,!1,p,null,null);t.default=c.exports},446:function(s,t,a){var n=a(447);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(394)("94c0635a",n,!0)},447:function(s,t,a){t=s.exports=a(338)(void 0),t.push([s.i,"#back-top-target{height:400px;border:1px solid #ddd;padding:20px;margin:20px;overflow:auto}#back-top-target div{height:280px}",""])}});
//# sourceMappingURL=16.0432a33663ba2110af5b.js.map