(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[218],{476:function(e,t,n){!function(e){"use strict";e.defineMode("solr",(function(){var e=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,t=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i;function r(t){return function(r,i){for(var u=t;(t=r.peek())&&null!=t.match(e);)u+=r.next();return i.tokenize=o,n.test(u)?"operator":function(e){return parseFloat(e).toString()===e}(u)?"number":":"==r.peek()?"field":"string"}}function o(n,i){var u,a,c=n.next();return'"'==c?i.tokenize=(a=c,function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=a||r);)r=!r&&"\\"==n;return r||(t.tokenize=o),"string"}):t.test(c)?i.tokenize=(u=c,function(e,t){var n="operator";return"+"==u?n+=" positive":"-"==u?n+=" negative":"|"==u?e.eat(/\|/):"&"==u?e.eat(/\&/):"^"==u&&(n+=" boost"),t.tokenize=o,n}):e.test(c)&&(i.tokenize=r(c)),i.tokenize!=o?i.tokenize(n,i):null}return{startState:function(){return{tokenize:o}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-solr","solr")}(n(3))}}]);
//# sourceMappingURL=218.23e896f7.chunk.js.map