(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[357],{402:function(t,n){!function(t){var n={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},e={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function r(t,r){var a={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var o in r)a[o]=r[o];return a.tag={pattern:/([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},a.variable=e,a.comment=n,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,(function(){return t})),"im"),alias:"section",inside:a}}var a={pattern:/(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:e}},i={pattern:/([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:e}};t.languages.robotframework={settings:r("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:r("Variables"),"test-cases":r("Test Cases",{"test-name":o,documentation:a,property:i}),keywords:r("Keywords",{"keyword-name":o,documentation:a,property:i}),tasks:r("Tasks",{"task-name":o,documentation:a,property:i}),comment:n},t.languages.robot=t.languages.robotframework}(Prism)}}]);
//# sourceMappingURL=357.c5afdf9f.chunk.js.map