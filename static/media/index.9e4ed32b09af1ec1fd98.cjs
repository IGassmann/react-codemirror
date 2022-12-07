"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var javascript$1=require("@lezer/javascript"),language=require("@codemirror/language"),state=require("@codemirror/state"),view=require("@codemirror/view"),autocomplete=require("@codemirror/autocomplete"),common=require("@lezer/common");const snippets=[autocomplete.snippetCompletion("function ${name}(${params}) {\n\t${}\n}",{label:"function",detail:"definition",type:"keyword"}),autocomplete.snippetCompletion("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}",{label:"for",detail:"loop",type:"keyword"}),autocomplete.snippetCompletion("for (let ${name} of ${collection}) {\n\t${}\n}",{label:"for",detail:"of loop",type:"keyword"}),autocomplete.snippetCompletion("do {\n\t${}\n} while (${})",{label:"do",detail:"loop",type:"keyword"}),autocomplete.snippetCompletion("while (${}) {\n\t${}\n}",{label:"while",detail:"loop",type:"keyword"}),autocomplete.snippetCompletion("try {\n\t${}\n} catch (${error}) {\n\t${}\n}",{label:"try",detail:"/ catch block",type:"keyword"}),autocomplete.snippetCompletion("if (${}) {\n\t${}\n}",{label:"if",detail:"block",type:"keyword"}),autocomplete.snippetCompletion("if (${}) {\n\t${}\n} else {\n\t${}\n}",{label:"if",detail:"/ else block",type:"keyword"}),autocomplete.snippetCompletion("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}",{label:"class",detail:"definition",type:"keyword"}),autocomplete.snippetCompletion('import {${names}} from "${module}"\n${}',{label:"import",detail:"named",type:"keyword"}),autocomplete.snippetCompletion('import ${name} from "${module}"\n${}',{label:"import",detail:"default",type:"keyword"})],cache=new common.NodeWeakMap,ScopeNodes=new Set(["Script","Block","FunctionExpression","FunctionDeclaration","ArrowFunction","MethodDeclaration","ForStatement"]);function defID(e){return(t,n)=>{let o=t.node.getChild("VariableDefinition");return o&&n(o,e),!0}}const functionContext=["FunctionDeclaration"],gatherCompletions={FunctionDeclaration:defID("function"),ClassDeclaration:defID("class"),ClassExpression:()=>!0,EnumDeclaration:defID("constant"),TypeAliasDeclaration:defID("type"),NamespaceDeclaration:defID("namespace"),VariableDefinition(e,t){e.matchContext(functionContext)||t(e,"variable")},TypeDefinition(e,t){t(e,"type")},__proto__:null};function getScope(e,t){let n=cache.get(t);if(n)return n;let o=[],a=!0;function r(t,n){let a=e.sliceString(t.from,t.to);o.push({label:a,type:n})}return t.cursor(common.IterMode.IncludeAnonymous).iterate((t=>{if(a)a=!1;else if(t.name){let e=gatherCompletions[t.name];if(e&&e(t,r)||ScopeNodes.has(t.name))return!1}else if(t.to-t.from>8192){for(let n of getScope(e,t.node))o.push(n);return!1}})),cache.set(t,o),o}const Identifier=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,dontComplete=["TemplateString","String","RegExp","LineComment","BlockComment","VariableDefinition","TypeDefinition","Label","PropertyDefinition","PropertyName","PrivatePropertyDefinition","PrivatePropertyName"];function localCompletionSource(e){let t=language.syntaxTree(e.state).resolveInner(e.pos,-1);if(dontComplete.indexOf(t.name)>-1)return null;let n="VariableName"==t.name||t.to-t.from<20&&Identifier.test(e.state.sliceDoc(t.from,t.to));if(!n&&!e.explicit)return null;let o=[];for(let a=t;a;a=a.parent)ScopeNodes.has(a.name)&&(o=o.concat(getScope(e.state.doc,a)));return{options:o,from:n?t.from:e.pos,validFor:Identifier}}function pathFor(e,t,n){var o;let a=[];for(;;){let r,i=t.firstChild;if("VariableName"==(null===i||void 0===i?void 0:i.name))return a.push(e(i)),{path:a.reverse(),name:n};if("MemberExpression"!=(null===i||void 0===i?void 0:i.name)||"PropertyName"!=(null===(o=r=i.lastChild)||void 0===o?void 0:o.name))return null;a.push(e(r)),t=i}}function completionPath(e){let t=t=>e.state.doc.sliceString(t.from,t.to),n=language.syntaxTree(e.state).resolveInner(e.pos,-1);return"PropertyName"==n.name?pathFor(t,n.parent,t(n)):dontComplete.indexOf(n.name)>-1?null:"VariableName"==n.name||n.to-n.from<20&&Identifier.test(t(n))?{path:[],name:t(n)}:"."!=n.name&&"?."!=n.name||"MemberExpression"!=n.parent.name?"MemberExpression"==n.name?pathFor(t,n,""):e.explicit?{path:[],name:""}:null:pathFor(t,n.parent,"")}function enumeratePropertyCompletions(e,t){let n=[],o=new Set;for(let r=0;;r++){for(let l of(Object.getOwnPropertyNames||Object.keys)(e)){if(o.has(l))continue;let i;o.add(l);try{i=e[l]}catch(a){continue}n.push({label:l,type:"function"==typeof i?/^[A-Z]/.test(l)?"class":t?"function":"method":t?"variable":"property",boost:-r})}let i=Object.getPrototypeOf(e);if(!i)return n;e=i}}function scopeCompletionSource(e){let t=new Map;return n=>{let o=completionPath(n);if(!o)return null;let a=e;for(let e of o.path)if(a=a[e],!a)return null;let r=t.get(a);return r||t.set(a,r=enumeratePropertyCompletions(a,!o.path.length)),{from:n.pos-o.name.length,options:r,validFor:Identifier}}}const javascriptLanguage=language.LRLanguage.define({name:"javascript",parser:javascript$1.parser.configure({props:[language.indentNodeProp.add({IfStatement:language.continuedIndent({except:/^\s*({|else\b)/}),TryStatement:language.continuedIndent({except:/^\s*({|catch\b|finally\b)/}),LabeledStatement:language.flatIndent,SwitchBody:e=>{let t=e.textAfter,n=/^\s*\}/.test(t),o=/^\s*(case|default)\b/.test(t);return e.baseIndent+(n?0:o?1:2)*e.unit},Block:language.delimitedIndent({closing:"}"}),ArrowFunction:e=>e.baseIndent+e.unit,"TemplateString BlockComment":()=>null,"Statement Property":language.continuedIndent({except:/^{/}),JSXElement(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},JSXEscape(e){let t=/\s*\}/.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"JSXOpenTag JSXSelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),language.foldNodeProp.add({"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression":language.foldInside,BlockComment(e){return{from:e.from+2,to:e.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case |default:|\{|\}|<\/)$/,wordChars:"$"}}),typescriptLanguage=javascriptLanguage.configure({dialect:"ts"},"typescript"),jsxLanguage=javascriptLanguage.configure({dialect:"jsx"}),tsxLanguage=javascriptLanguage.configure({dialect:"jsx ts"},"typescript"),keywords="break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map((e=>({label:e,type:"keyword"})));function javascript(e={}){let t=e.jsx?e.typescript?tsxLanguage:jsxLanguage:e.typescript?typescriptLanguage:javascriptLanguage;return new language.LanguageSupport(t,[javascriptLanguage.data.of({autocomplete:autocomplete.ifNotIn(dontComplete,autocomplete.completeFromList(snippets.concat(keywords)))}),javascriptLanguage.data.of({autocomplete:localCompletionSource}),e.jsx?autoCloseTags:[]])}function elementName(e,t,n=e.length){if(!t)return"";let o=t.getChild("JSXIdentifier");return o?e.sliceString(o.from,Math.min(o.to,n)):""}const android="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),autoCloseTags=view.EditorView.inputHandler.of(((e,t,n,o)=>{if((android?e.composing:e.compositionStarted)||e.state.readOnly||t!=n||">"!=o&&"/"!=o||!javascriptLanguage.isActiveAt(e.state,t,-1))return!1;let{state:a}=e,r=a.changeByRange((e=>{var t,n,r;let i,{head:l}=e,s=language.syntaxTree(a).resolveInner(l,-1);if("JSXStartTag"==s.name&&(s=s.parent),">"==o&&"JSXFragmentTag"==s.name)return{range:state.EditorSelection.cursor(l+1),changes:{from:l,insert:"><>"}};if(">"==o&&"JSXIdentifier"==s.name){if("JSXEndTag"!=(null===(n=null===(t=s.parent)||void 0===t?void 0:t.lastChild)||void 0===n?void 0:n.name)&&(i=elementName(a.doc,s.parent,l)))return{range:state.EditorSelection.cursor(l+1),changes:{from:l,insert:`></${i}>`}}}else if("/"==o&&"JSXFragmentTag"==s.name){let e=s.parent,t=null===e||void 0===e?void 0:e.parent;if(e.from==l-1&&"JSXEndTag"!=(null===(r=t.lastChild)||void 0===r?void 0:r.name)&&(i=elementName(a.doc,null===t||void 0===t?void 0:t.firstChild,l))){let e=`/${i}>`;return{range:state.EditorSelection.cursor(l+e.length),changes:{from:l,insert:e}}}}return{range:e}}));return!r.changes.empty&&(e.dispatch(r,{userEvent:"input.type",scrollIntoView:!0}),!0)}));function esLint(e,t){return t||(t={parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:!0,node:!0,es6:!0,es2015:!0,es2017:!0,es2020:!0},rules:{}},e.getRules().forEach(((e,n)=>{e.meta.docs.recommended&&(t.rules[n]=2)}))),n=>{let{state:o}=n,a=[];for(let{from:r,to:i}of javascriptLanguage.findRegions(o)){let n=o.doc.lineAt(r),l={line:n.number-1,col:r-n.from,pos:r};for(let s of e.verify(o.sliceDoc(r,i),t))a.push(translateDiagnostic(s,o.doc,l))}return a}}function mapPos(e,t,n,o){return n.line(e+o.line).from+t+(1==e?o.col-1:-1)}function translateDiagnostic(e,t,n){let o=mapPos(e.line,e.column,t,n),a={from:o,to:null!=e.endLine&&1!=e.endColumn?mapPos(e.endLine,e.endColumn,t,n):o,message:e.message,source:e.ruleId?"eslint:"+e.ruleId:"eslint",severity:1==e.severity?"warning":"error"};if(e.fix){let{range:t,text:r}=e.fix,i=t[0]+n.pos-o,l=t[1]+n.pos-o;a.actions=[{name:"fix",apply(e,t){e.dispatch({changes:{from:t+i,to:t+l,insert:r},scrollIntoView:!0})}}]}return a}exports.autoCloseTags=autoCloseTags,exports.completionPath=completionPath,exports.esLint=esLint,exports.javascript=javascript,exports.javascriptLanguage=javascriptLanguage,exports.jsxLanguage=jsxLanguage,exports.localCompletionSource=localCompletionSource,exports.scopeCompletionSource=scopeCompletionSource,exports.snippets=snippets,exports.tsxLanguage=tsxLanguage,exports.typescriptLanguage=typescriptLanguage;