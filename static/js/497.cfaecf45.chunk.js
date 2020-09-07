(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[497],{797:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='diff --git a/index.html b/index.html\nindex c1d9156..7764744 100644\n--- a/index.html\n+++ b/index.html\n@@ -95,7 +95,8 @@ StringStream.prototype = {\n     <script>\n       var editor = CodeMirror.fromTextArea(document.getElementById("code"), {\n         lineNumbers: true,\n-        autoMatchBrackets: true\n+        autoMatchBrackets: true,\n+      onGutterClick: function(x){console.log(x);}\n       });\n     <\/script>\n   </body>\ndiff --git a/lib/codemirror.js b/lib/codemirror.js\nindex 04646a9..9a39cc7 100644\n--- a/lib/codemirror.js\n+++ b/lib/codemirror.js\n@@ -399,10 +399,16 @@ var CodeMirror = (function() {\n     }\n \n     function onMouseDown(e) {\n-      var start = posFromMouse(e), last = start;    \n+      var start = posFromMouse(e), last = start, target = e.target();\n       if (!start) return;\n       setCursor(start.line, start.ch, false);\n       if (e.button() != 1) return;\n+      if (target.parentNode == gutter) {    \n+        if (options.onGutterClick)\n+          options.onGutterClick(indexOf(gutter.childNodes, target) + showingFrom);\n+        return;\n+      }\n+\n       if (!focused) onFocus();\n \n       e.stop();\n@@ -808,7 +814,7 @@ var CodeMirror = (function() {\n       for (var i = showingFrom; i < showingTo; ++i) {\n         var marker = lines[i].gutterMarker;\n         if (marker) html.push(\'<div class="\' + marker.style + \'">\' + htmlEscape(marker.text) + \'</div>\');\n-        else html.push("<div>" + (options.lineNumbers ? i + 1 : "\\u00a0") + "</div>");\n+        else html.push("<div>" + (options.lineNumbers ? i + options.firstLineNumber : "\\u00a0") + "</div>");\n       }\n       gutter.style.display = "none"; // TODO test whether this actually helps\n       gutter.innerHTML = html.join("");\n@@ -1371,10 +1377,8 @@ var CodeMirror = (function() {\n         if (option == "parser") setParser(value);\n         else if (option === "lineNumbers") setLineNumbers(value);\n         else if (option === "gutter") setGutter(value);\n-        else if (option === "readOnly") options.readOnly = value;\n-        else if (option === "indentUnit") {options.indentUnit = indentUnit = value; setParser(options.parser);}\n-        else if (/^(?:enterMode|tabMode|indentWithTabs|readOnly|autoMatchBrackets|undoDepth)$/.test(option)) options[option] = value;\n-        else throw new Error("Can\'t set option " + option);\n+        else if (option === "indentUnit") {options.indentUnit = value; setParser(options.parser);}\n+        else options[option] = value;\n       },\n       cursorCoords: cursorCoords,\n       undo: operation(undo),\n@@ -1402,7 +1406,8 @@ var CodeMirror = (function() {\n       replaceRange: operation(replaceRange),\n \n       operation: function(f){return operation(f)();},\n-      refresh: function(){updateDisplay([{from: 0, to: lines.length}]);}\n+      refresh: function(){updateDisplay([{from: 0, to: lines.length}]);},\n+      getInputField: function(){return input;}\n     };\n     return instance;\n   }\n@@ -1420,6 +1425,7 @@ var CodeMirror = (function() {\n     readOnly: false,\n     onChange: null,\n     onCursorActivity: null,\n+    onGutterClick: null,\n     autoMatchBrackets: false,\n     workTime: 200,\n     workDelay: 300,\n\n'}}]);
//# sourceMappingURL=497.cfaecf45.chunk.js.map