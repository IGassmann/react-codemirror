(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[195],{452:function(n,e,t){!function(n){"use strict";n.defineMode("ntriples",(function(){var n=0,e=1,t=2,r=3,i=4,a=5,u=6,o=7,s=8,c=9,l=10,p=11,f=12;function h(h,v){var b,d=h.location;b=d==n&&"<"==v?e:d==n&&"_"==v?t:d==r&&"<"==v?i:d==a&&"<"==v?u:d==a&&"_"==v?o:d==a&&'"'==v?s:d==e&&">"==v?r:d==t&&" "==v?r:d==i&&">"==v?a:d==u&&">"==v?p:d==o&&" "==v?p:d==s&&'"'==v?p:d==c&&" "==v?p:d==l&&">"==v?p:d==s&&"@"==v?c:d==s&&"^"==v?l:" "!=v||d!=n&&d!=r&&d!=a&&d!=p?d==p&&"."==v?n:f:d,h.location=b}return{startState:function(){return{location:n,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,e){var t=n.next();if("<"==t){h(e,t);var r="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(r+=n,!0)})),e.uris.push(r),n.match("#",!1)?"variable":(n.next(),h(e,">"),"variable")}if("#"==t){var i="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(i+=n,!0)})),e.anchors.push(i),"variable-2"}if(">"==t)return h(e,">"),"variable";if("_"==t){h(e,t);var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),e.bnodes.push(a),n.next(),h(e," "),"builtin"}if('"'==t)return h(e,t),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&h(e,'"'),"string";if("@"==t){h(e,"@");var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),e.langs.push(u),n.next(),h(e," "),"string-2"}if("^"==t){n.next(),h(e,"^");var o="";return n.eatWhile((function(n){return">"!=n&&(o+=n,!0)})),e.types.push(o),n.next(),h(e,">"),"variable"}" "==t&&h(e,t),"."==t&&h(e,t)}}})),n.defineMIME("application/n-triples","ntriples"),n.defineMIME("application/n-quads","ntriples"),n.defineMIME("text/n-triples","ntriples")}(t(3))}}]);
//# sourceMappingURL=195.946c4412.chunk.js.map