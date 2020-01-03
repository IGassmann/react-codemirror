(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[206],{393:function(e,t,r){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var r,n=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function a(e){return e.scopes[e.scopes.length-1]}e.registerHelper("hintWords","python",i.concat(o)),e.defineMode("python",(function(r,s){for(var c=s.delimiters||s.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,l=[s.singleOperators,s.doubleOperators,s.doubleDelimiters,s.tripleDelimiters,s.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],u=0;u<l.length;u++)l[u]||l.splice(u--,1);var f=s.hangingIndent||r.indentUnit,p=i,d=o;void 0!=s.extra_keywords&&(p=p.concat(s.extra_keywords)),void 0!=s.extra_builtins&&(d=d.concat(s.extra_builtins));var m=!(s.version&&Number(s.version)<3);if(m){var h=s.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;p=p.concat(["nonlocal","False","True","None","async","await"]),d=d.concat(["ascii","bytes","exec","print"]);var g=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else h=s.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,p=p.concat(["exec","print"]),d=d.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),g=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var b=t(p),y=t(d);function k(e,t){var r=e.sol()&&"\\"!=t.lastToken;if(r&&(t.indent=e.indentation()),r&&"py"==a(t).type){var n=a(t).offset;if(e.eatSpace()){var i=e.indentation();return i>n?x(t):i<n&&_(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var o=v(e,t);return n>0&&_(e,t)&&(o+=" error"),o}return v(e,t)}function v(e,t){if(e.eatSpace())return null;if(e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var r=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(r=!0),e.match(/^[\d_]+\.\d*/)&&(r=!0),e.match(/^\.\d+/)&&(r=!0),r)return e.eat(/J/i),"number";var i=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(i=!0),e.match(/^0b[01_]+/i)&&(i=!0),e.match(/^0o[0-7_]+/i)&&(i=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),i=!0),e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}if(e.match(g))return-1!==e.current().toLowerCase().indexOf("f")?(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var r=1==e.length;function n(e){return function(t,r){var o=v(t,r);return"punctuation"==o&&("{"==t.current()?r.tokenize=n(e+1):"}"==t.current()&&(r.tokenize=e>1?n(e-1):i)),o}}function i(i,o){for(;!i.eol();)if(i.eatWhile(/[^'"\{\}\\]/),i.eat("\\")){if(i.next(),r&&i.eol())return"string"}else{if(i.match(e))return o.tokenize=t,"string";if(i.match("{{"))return"string";if(i.match("{",!1))return o.tokenize=n(0),i.current()?"string":o.tokenize(i,o);if(i.match("}}"))return"string";if(i.match("}"))return"error";i.eat(/['"]/)}if(r){if(s.singleLineStringErrors)return"error";o.tokenize=t}return"string"}return i.isString=!0,i}(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=function(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var r=1==e.length;function n(n,i){for(;!n.eol();)if(n.eatWhile(/[^'"\\]/),n.eat("\\")){if(n.next(),r&&n.eol())return"string"}else{if(n.match(e))return i.tokenize=t,"string";n.eat(/['"]/)}if(r){if(s.singleLineStringErrors)return"error";i.tokenize=t}return"string"}return n.isString=!0,n}(e.current(),t.tokenize),t.tokenize(e,t));for(var o=0;o<l.length;o++)if(e.match(l[o]))return"operator";return e.match(c)?"punctuation":"."==t.lastToken&&e.match(h)?"property":e.match(b)||e.match(n)?"keyword":e.match(y)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(h)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),"error")}function x(e){for(;"py"!=a(e).type;)e.scopes.pop();e.scopes.push({offset:a(e).offset+r.indentUnit,type:"py",align:null})}function _(e,t){for(var r=e.indentation();t.scopes.length>1&&a(t).offset>r;){if("py"!=a(t).type)return!0;t.scopes.pop()}return a(t).offset!=r}function z(e,t){e.sol()&&(t.beginningOfLine=!0);var r=t.tokenize(e,t),n=e.current();if(t.beginningOfLine&&"@"==n)return e.match(h,!1)?"meta":m?"operator":"error";if(/\S/.test(n)&&(t.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=t.lastToken||(r="meta"),"pass"!=n&&"return"!=n||(t.dedent+=1),"lambda"==n&&(t.lambda=!0),":"!=n||t.lambda||"py"!=a(t).type||x(t),1==n.length&&!/string|comment/.test(r)){var i="[({".indexOf(n);if(-1!=i&&function(e,t,r){var n=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+f,type:r,align:n})}(e,t,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(n))){if(a(t).type!=n)return"error";t.indent=t.scopes.pop().offset-f}}return t.dedent>0&&e.eol()&&"py"==a(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),r}return{startState:function(e){return{tokenize:k,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var r=t.errorToken;r&&(t.errorToken=!1);var n=z(e,t);return n&&"comment"!=n&&(t.lastToken="keyword"==n||"punctuation"==n?e.current():n),"punctuation"==n&&(n=null),e.eol()&&t.lambda&&(t.lambda=!1),r?n+" error":n},indent:function(t,r){if(t.tokenize!=k)return t.tokenize.isString?e.Pass:0;var n=a(t),i=n.type==r.charAt(0);return null!=n.align?n.align-(i?1:0):n.offset-(i?f:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-python","python"),e.defineMIME("text/x-cython",{name:"python",extra_keywords:(r="by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE",r.split(" "))})}(r(3))}}]);
//# sourceMappingURL=206.89962fe6.chunk.js.map